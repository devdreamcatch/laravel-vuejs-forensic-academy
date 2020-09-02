<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use File;

class MyDataController extends Controller
{
    /**
     * User personal data save
     * @param \App\Models\User  $user
     * @param \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function savePersonalData(User $user, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:191',
            'surname' => 'required|string|max:191',
            'cpf' => 'required',
            'sex' => 'required|integer',
            'date_of_birth' => 'required|date',
            'telephone' => 'required',
            'whatsapp' => 'required',
            'email' => 'required|email|unique:users,email,'.$user->id,
        ]);

        if ($validator->fails()) {
            return new JsonResponse($validator->errors(), 422);
        }
        
        $photoPath = 'none';
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('photos', 'public');
        }

        $user->update([
            'name' => $request->name,
            'surname' => $request->surname,
            'cpf' => $request->cpf,
            'sex' => $request->sex,
            'date_of_birth' => $request->date_of_birth,
            'telephone' => $request->telephone,
            'whatsapp' => $request->whatsapp,
            'email' => $request->email,
            'photo' => $photoPath
        ]);

        return new JsonResponse($user, 202);
    }

    /**
     * User avatar remove
     * @param \App\Models\User  $user
     * @param \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function removePhoto(User $user, Request $request) {
        $photoPath = public_path("/storage/$user->photo");  // get previous image from folder
        if (File::exists($photoPath) && $user->photo != 'none') { // unlink or remove previous image from folder
            unlink($photoPath);
        }

        $user->update([
            'photo' => 'none'
        ]);

        return new JsonResponse($user, 202);
    }

    /**
     * Save social networks
     * 
     * @param \Illuminate\Http\Request  $request
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function saveSocial(Request $request) {
        $validator = Validator::make($request->all(), [
            'facebook' => 'nullable|active_url',
            'instagram' => 'nullable|active_url',
            'linkedin' => 'nullable|active_url',
            'twitter' => 'nullable|active_url',
        ]);

        if ($validator->fails()) {
            return new JsonResponse($validator->errors(), 422);
        }

        $user = User::findOrfail($request->user()->id);

        $user->update([
            'facebook' => $request->facebook,
            'instagram' => $request->instagram,
            'linkedin' => $request->linkedin,
            'twitter' => $request->twitter
        ]);

        return new JsonResponse($user, 202);
    }

}
