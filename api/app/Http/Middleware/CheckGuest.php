<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class checkGuest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$guards)
    {
        //if not logged in then pass request if logged in then block
        if(!Auth::guard()->check()){
            return $next($request);
        }else{
            return response()->json([
                'status' => 'Access denied',
                'message' => 'You cannot Access this service'
            ],307);
        }

    }
}
