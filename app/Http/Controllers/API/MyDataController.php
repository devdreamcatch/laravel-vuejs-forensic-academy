<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;

class MyDataController extends Controller
{
    /**
     * user register
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function savePersonalData(User $user, Request $request)
    {
        $validator = Validator::make($request->all(), [
            // 'name' => 'required|string|max:191',
            // 'surname' => 'required|string|max:191',
            // 'cpf' => 'required',
            // 'sex' => 'required|integer',
            // 'date_of_birth' => 'required|date',
            // 'telephone' => 'required',
            // 'whatsapp' => 'required',
            'email' => 'required|email|unique:users,email,'.$user->id,
            // 'password' => 'required',
        ]);

        if ($validator->fails()) {
            return new JsonResponse($validator->errors(), 422);
        }

        $user->update([
            'name' => $request->name,
            'surname' => $request->surname,
            'cpf' => $request->cpf,
            'sex' => $request->sex,
            'date_of_birth' => $request->date_of_birth,
            'telephone' => $request->telephone,
            'whatsapp' => $request->whatsapp,
            'email' => $request->email
        ]);

        return new JsonResponse($user, 201);
    }

}
