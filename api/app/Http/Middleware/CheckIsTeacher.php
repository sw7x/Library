<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckIsTeacher
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        //if user role belongs to admin level then pass request if not block
        if(Auth::guard()->check()){

            $roleName = Auth::guard()->user()->role;
            if($roleName == 'teacher'){
                return $next($request);
            }else{
                return response()->json([
                    'status' => 'Error',
                    'message' => 'You dont have permission to access this service'
                ],403);
            }
        }else{
            return response()->json(['status' => 'Error','message' => 'You cannot Access this service'],401);
        }

    }
}
