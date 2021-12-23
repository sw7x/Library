<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckLoginUser
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
        //if already logged in then pass request if not block
        if(Auth::guard()->check()){
            return $next($request);
        }else{
            return response()->json([
                'status' => 'Error',
                'redirect'=> true,  //to indicate do redirecting in SPA
                'message' => 'You cannot Access this service'
            ],401);
        }
    }
}
