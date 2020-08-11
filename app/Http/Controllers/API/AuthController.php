<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    /**
     * get token from user email and password
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getToken(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', "$request->email")->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return new JsonResponse(null, 401);
        }

        return new JsonResponse([
            'token' => $user->createToken('forensic-academy-token', ['forensic:admin'])->plainTextToken,
            'user_info' => $user
        ]);
    }

    /**
     * logout, token remove
     * @param \Illuminate\Http\Request $request
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return new JsonResponse();
    }

    /**
     * user register
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:191',
            'surname' => 'required|string|max:191',
            'cpf' => 'required|cpf',
            'sex' => 'required|integer',
            'date_of_birth' => 'required|date',
            'telephone' => 'required|integer',
            'whatsapp' => 'required',
            'email' => 'required|same:email_confirmation|email|unique:users',
            'password' => 'required|same:password_confirmation',
        ]);
        
        $user = User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'cpf' => $request->cpf,
            'sex' => $request->sex,
            'date_of_birth' => $request->date_of_birth,
            'telephone' => $request->telephone,
            'whatsapp' => $request->whatsapp,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return new JsonResponse($user, 201);
    }

    /**
     * Profile update
     * @param $request
     * @param $user
     * @return $jsonResponse
     * @route('/api/profile/{user}', method='PUT')
     */
    public function updateProfile(User $user, Request $request)
    {
        try {
            if ($user->id != $request->user()->id) {
                return response()->json([
                    'success' => false,
                    'error' => "You can't update profile of another user."
                ]);
            }
            $validator = Validator::make($request->all(), [
                'email' => 'required|email|unique:users,email,' . $user->id,
                'password' => 'required',
                'name' => 'required',
            ]);
    
            if ($validator->fails()) {
                $error_messages = $validator->errors()->messages();
                $error_keys = array_keys($error_messages);
                foreach ($error_keys as $error_key) {
                    $error_result[$error_key] = $error_messages[$error_key];
                }
                return response()->json([
                    'success' => false,
                    'error' => $error_result
                ]);
            }
    
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
    
            return response()->json([
                'success' => true,
                'message' => 'The profile is updated successfully.'
            ]);
        } catch (Exception $error) {
            return response()->json([
                'success' => false,
                'error' => $error->getMessage()
            ]);
        }
    }

    /**
     * Profile show
     * @param $request
     * @param $user
     * @return $jsonResponse
     * @route('/api/profile/{user}', method='GET')
     */
    public function showProfile(User $user, Request $request)
    {
        return response()->json([
            'success' => true,
            'data' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ]
        ]);
    }

}