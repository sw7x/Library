<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomException;
use App\Models\User;
use App\Services\AuthService;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\JWTException;



class AuthController extends Controller
{


    public function __construct()
    {
        $this->middleware('check.guest',['only' => ['login']]);
        $this->middleware('check.login',['only' => ['check','tokenDecode']]);
        $this->middleware('jwt.auth',['only' => ['logout']]);
    }


    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    public function guard()
    {
        return Auth::guard();
    }


    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');


        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()
                ->json([
                    'code' => 1,
                    'message' => 'Validation failed.',
                    'errors' => $validator->errors()
                ], 422);
        }


        $user = User::where('email', $credentials['email'])->first();
        
        if($user === null || $user->status != 1) {
            
            return response()->json([
                'status' => 'error',
                'message' => 'Your account is disabled.'
            ], 409);

        }else{

            $token = $this->guard()->attempt($credentials);
            if ($token) {
                return $this->respondWithToken($token);                
            } else {
                return response()->json([
                    'status'    => 'failed',
                    'message'   => 'Invalid credentials.'
                ], 401);
            }
        }

    }

    //todo ???
    public function check(Request $request){

        $authHeader = $request->header('Authorization');
        $token = $request->bearerToken();
        //$token = JWTAuth::getToken();

        try {
            //dd(JWTAuth::getPayload($token)->toArray());
            $user = JWTAuth::parseToken()->authenticate();
            return $user;
        } catch (JWTException $exception) {
            $error = array('error' => 'Unauthorized');
            return response()->json($error);
            //var_dump($exception->getMessage ());
        }

    }

    public function logout(Request $request)
    {
        try {
            $this->guard()->logout();
            //JWTAuth::invalidate($request->token);
            return response()->json([
                'success' => true,
                'message' => 'User logged out successfully'
            ],200);

        } catch (JWTException $exception) {

            return response()->json([
                'success' => false,
                'message' => 'Sorry, the user cannot be logged out'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }


    /**
     * Get the authenticated User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAuthUser()
    {
        return response()->json($this->guard()->user());
    }


    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        
        $loginUser = $this->guard()->user();

        return response()->json([
            'access_token'  => $token,
            'token_type'    => 'bearer',
            'expires_in'    => $this->guard()->factory()->getTTL() * 60,
            'status'        => 'success',
            'message'       => 'login successful',
            'userData'      => [
                'id'    =>  $loginUser->id,
                'email' =>  $loginUser->email,
                'role'  =>  $loginUser->role,
            ]
        ],200);
    }





    public function tokenDecode()
    {
        return $this->getAuthUser();
    }


}