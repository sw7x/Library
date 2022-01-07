<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomException;
use App\Http\Requests\TeacherRegFormRequest;
use App\Services\AuthorService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class AuthorController extends Controller
{
    private $authorService;

    public function __construct(AuthorService $authorService)
    {
        $this->authorService = $authorService;

        $this->middleware('check.admin',['only' => ['update','index']]);
        $this->middleware('check.teacher',['only' => ['getBooksBelongToAuthor']]);
        $this->middleware('check.guest',['only' => ['store']]);
        
    }




    public function index()
    {
        try{
            $authors = $this->authorService->viewAll();

            $response = array(
                'status'    => 'success',
                'data'      => $authors,
                'message'   => ''
            );

            if(count($authors) == 0){
                return response()->json($response, 404);
            }else{
                return response()->json($response, 200);
            }

        }catch(\Exception $exception){
            $response = array(
                'status'    => 'error',
                'message'   => 'server error',
            );
            return response()->json($response, 500);
        }
    }



    public function store(TeacherRegFormRequest $request)
    {
        try{

            if (isset($request->validator) && $request->validator->fails()) {
                $errorString = implode(", ",$request->validator->messages()->all());
                throw new CustomException($errorString,400);
            }

            $authorRecord   = array(
                'full_name' => $request->input('full_name'),
                'email'     => $request->input('email'),
                'password'  => bcrypt($request->input('password')),
                'phone'     => $request->input('phone'),
                'role'      => 'teacher',
                'status'    => true
            );

            $insertedRecord = $this->authorService->add($authorRecord);

            $response = array(
                'status'    => 'success',
                'data'      => $insertedRecord,
                'message'   => 'User Registered successfully'
            );
            return response()->json($response, 201);

        }catch (CustomException $e) {

            $response = array(
                'status'    => 'error',
                'message'   => $e->getMessage(),
            );
            $code = $e->getCode() ?? 500;
            return response()->json($response, $code);
        }
        catch(\Exception $exception){
            $code       = $exception->getCode() ?? 500;
            $message    = $exception->getMessage();
            //$message = 'server error';
            $response = array(
                'status'    => 'error',
                'message'   => $message,
            );
            return response()->json($response, 500);
        }
    }


    public function show($id)
    {
        try{
            if(is_numeric ($id)){
                $id = intval($id);
            }else{
                throw new CustomException('The given data was invalid',400);
            }

            $author = $this->authorService->view($id);
            if($author){
                $response = array(
                    'status'    => 'success',
                    'data'      => $author,
                    'message'   => ''
                );
                return response()->json($response, 200);
            }else{
                $response = array(
                    'status'    => 'error',
                    'data'      => null,
                    'message'   => 'Resource does not exist'
                );
                return response()->json($response, 404);
            }

        }catch (CustomException $e) {

            $response = array(
                'status'    => 'error',
                'message'   => $e->getMessage(),
            );
            $code = $e->getCode() ?? 500;
            return response()->json($response, $code);
        }
        catch (\Exception $e) {

            $response = array(
                'status'    => 'error',
                //'message'   => 'Internal server error',
                'message'   => $e->getMessage(),
            );
            return response()->json($response, 500);
        }
    }




    public function update(Request $request, $id)
    {        
        try{
            if(is_numeric ($id)){
                $id = intval($id);
            }else{
                throw new CustomException('The given data was invalid',400);
            }

            $validator = Validator::make($request->all(), [
                'status'         => 'required|boolean',
            ],[
                'status.required' => 'Author status is required',
                'status.boolean' => 'Author status given value is invalid',
            ]);

            if (isset($validator) && $validator->fails()) {
                $errorString = implode(", ",$validator->messages()->all());
                throw new CustomException($errorString,400);
            }

            $userDetailsArr = array(
                'status'          => $request->get('status'),
            );

            $updatedRecord = $this->authorService->update($userDetailsArr,$id);

            $response = array(
                'status'    => 'success',
                'data'      => $updatedRecord,
                'message'   => 'User updated successfully'
            );

            return response()->json($response, 200);

        }catch(CustomException $exception){

            $response = array(
                'status'    => 'error',
                'message'   => $exception->getMessage(),
            );
            return response()->json($response, $exception->getCode());
        }catch(\Exception $exception){

            $response = array(
                'status'    => 'error',
                //'message'   => 'Internal server error',
                'message'   => $exception->getMessage(),
            );
            return response()->json($response, 500);
        }


    }

    public function getBooksBelongToAuthor($id){

        try{
            if(is_numeric ($id)){
                $id = intval($id);
            }else{
                throw new CustomException('The given data was invalid',400);
            }

            $booksData = $this->authorService->booksBelongToAuthor($id);

            $response = array(
                'status'    => 'success',
                'message'   => '',
                'data'      => $booksData,
            );
            return response()->json($response, 200);

        }catch (CustomException $e) {

            $response = array(
                'status'    => 'error',
                'message'   => $e->getMessage(),
                'data'      => [],
            );
            return response()->json($response, $e->getCode());
        }catch (\Exception $e) {

            $response = array(
                'status'    => 'error',
                'data'      => [],
                //'message'   => 'Internal server error',
                'message'   => $e->getMessage(),
            );
            return response()->json($response, 500);
        }
    }



}
