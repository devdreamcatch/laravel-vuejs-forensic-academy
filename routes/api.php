<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\JsonResponse;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::GET('/token/require', function () {
    return new JsonResponse([
        'error' => 'Your credential token is invalid.'
    ], 401);
})->name('token_require');

Route::POST('/token', 'API\AuthController@getToken');
Route::POST('/register', 'API\AuthController@register');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::POST('/logout', 'API\AuthController@logout');
    Route::PUT('/profile/{user}', 'API\AuthController@updateProfile');
    Route::GET('/profile/{user}', 'API\AuthController@showProfile');
}); 