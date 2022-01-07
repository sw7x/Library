<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomException;
use App\Services\BookService;
use App\Utils\FileUploadUtil;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;


class BookController extends Controller
{

    private $bookService;

    public function __construct(BookService $bookService)
    {
        $this->bookService = $bookService;        
        $this->middleware('check.teacher',['only' => ['store']]);
    }



    public function index(Request $request)
    {

        try{
            $title      = $request->query('title');
            $authorName = $request->query('author');

            if($title && $authorName){
                throw new CustomException('Cant search using both book title and author name');
            }else{
                if($title && !$authorName){
                    $books = $this->bookService->searchBookByTitle($title);
                }else if(!$title && $authorName){
                    $books = $this->bookService->searchBookByAuthorName($authorName);
                }else{
                    
                    // only admin able to view all the books                    
                    if(Auth::guard()->user() && Auth::guard()->user()->role == 'admin'){
                        $books = $this->bookService->viewAll();
                    }else{
                        throw new CustomException('you dont have permissions to view all books',403);
                    }
                    
                }
            }

            $response = array(
                'status'    => 'success',
                'data'      => $books,
                'message'   => ''
            );

            if(count($books) == 0){
                return response()->json($response, 404);
            }else{
                return response()->json($response, 200);
            }

        }catch(CustomException $exception){
            $code = $exception->getCode() ?? 500;
            $response = array(
                'status'    => 'error',
                'message'   => $exception->getMessage(),
            );
            return response()->json($response, $code);
        }
        catch(\Exception $exception){
            $response = array(
                'status'    => 'error',
                'message'   => 'server error',
                //'message'   => $exception->getMessage(),
            );
            return response()->json($response, 500);
        }
    }




    public function store(Request $request)
    {
        
        try{
            $validator = Validator::make($request->all(), [
                'bookTitle' => 'required',
                'userId'   => 'required',
            ]);


            if($validator->fails()){
                throw new ValidationException($validator);
            }

            $file = $request->file('bookImg');

            if(!isset($file)){  //no image upload
                throw new CustomException('Book image is not provided',400);
            }else{
                $fileUploadUtil = new FileUploadUtil();
                $imgDest        = $fileUploadUtil->upload($file,'books');
            }

            $bookRecord = array(
                'title'         => $request->input('bookTitle'),
                'description'   => $request->input('bookDesc'),
                'image'         => $imgDest,
                'author_id'     => $request->input('userId'),
            );

            $insertedRecord = $this->bookService->add($bookRecord);

            $response = array(
                'status'    => 'success',
                'data'      => $insertedRecord,
                'message'   => 'Book added successfully'
            );

            return response()->json($response, 201);

        }catch (ValidationException $exception) {
            $response = array(
                'status'    => 'error',
                'message'   => $exception->getMessage(),
            );
            return response()->json($response, 400);

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

            $book = $this->bookService->view($id);

            if($book){
                $response = array(
                    'status'    => 'success',
                    'data'      => $book,
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


}
