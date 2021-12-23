<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::group(['prefix' => 'v1'], function() {






    Route::get('/dd', function () {

        //dump(User::where('role', 'teacher')->find(1));
        //User::where('username', 'someuser')->find(1);

        //dump(User::find(5)->books);

        $name = 'ro';




        $name = 'ro';
        dump(

            Book::whereHas('author', function ($q) use ($name){
                $q->where('rusers.role','teacher')
                    ->Where('users.full_name', 'like', '%' . $name . '%');
            })->get()




            /*return $student->enrolled_courses()
                ->where('courses.status','published')
                ->where(function($query) {
                    $query->where('enrollments.status', 'enrolled')
                        ->orWhere('enrollments.status', 'completed');
                })->get();




            Book::author()
                ->where('user.role','teacher')
                ->Where('user.full_name', 'like', '%' . $name . '%')
                ->get()

            */
        );

        /*dump(
            User::with('books')
                ->where('role','teacher')
                ->Where('full_name', 'like', '%' . $name . '%')
                ->get()
        );*/

        //dump(User::where('role','teacher')->Where('full_name', 'like', '%' . $name . '%')->with('books')->get());
        //dump(User::find(5)->books()->get()->toArray());








        //dd(Storage::files('/spares'));
        //dump(URL('/').Storage::url('images/'.'file.jpg'));
        //dump(Book::find(5)->author);

        //dd('ff');
















    });




    Route::resource('books', BookController::class,[
        'except' => ['create','edit','update','destroy']
    ]);

    Route::get('authors/{id}/books', [AuthorController::class,'getBooksBelongToAuthor']);
    Route::resource('authors', AuthorController::class,[
        'except' => ['create','edit','destroy']
    ]);


    Route::group(['as'=>'auth.','namespace' =>'Auth'], function(){
        Route::post('/login',       [AuthController::class,'login'])->name ('login');
        Route::delete('/logout',    [AuthController::class,'logout'])->name ('logout');
        Route::post('/register',    [AuthController::class,'register'])->name ('register');
    });



    Route::get('token-decode', [AuthController::class, 'tokenDecode']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('check', [AuthController::class, 'check']);
    Route::post('logout', [AuthController::class, 'logout']);











});
