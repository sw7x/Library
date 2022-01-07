<?php


namespace App\Services;


use App\Exceptions\CustomException;
use App\Repositories\AuthorRepository;
use App\Repositories\BookRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;


class AuthorService
{
    private $authorRepository;


    public function __construct(AuthorRepository $authorRepository) {
        $this->authorRepository = $authorRepository;

    }

    public function viewAll(){
        $results = $this->authorRepository->findAll();
        $arr = [];
        foreach($results as $result){
            $accountStatus = ($result->status==true)?'enabled':'disabled';
            $arr[] = array(
                'id'            => $result->id,
                'name'          => $result->full_name,
                'email'         => $result->email,
                'phone'         => $result->phone,
                'role'          => $result->role,
                'status'        => $accountStatus,
                'registered'    => $result->created_at->diffForHumans(),
            );
        }
        return $arr;
    }

    public function view($authorId){

        $author = $this->authorRepository->findById($authorId);

        if(!$author){
            throw new CustomException('Author does not exist',404);
        }
        $accountStatus = ($author->status==true)?'enabled':'disabled';
        $arr = array(
            'id'            => $author->id,
            'name'          => $author->full_name,
            'email'         => $author->email,
            'phone'         => $author->phone,
            'role'          => $author->role,
            'status'        => $accountStatus,
            'registered'    => $author->created_at->diffForHumans()
        );
        return $arr;
    }


    public function add($authorDetailsArr){

        //check if already exist in database
        $isExist = $this->authorRepository->findByAuthorByEmail($authorDetailsArr['email']);

        if($isExist->count() > 0){
            throw new CustomException('Author email already exist',409);
        }else{
            $insertedRecord = $this->authorRepository->add($authorDetailsArr);
            if($insertedRecord){

                $accountStatus = ($insertedRecord->status==true)?'enabled':'disabled';
                return array(
                    'id'            => $insertedRecord->id,
                    'name'          => $insertedRecord->full_name,
                    'email'         => $insertedRecord->email,
                    'phone'         => $insertedRecord->phone,
                    'role'          => $insertedRecord->role,
                    'status'        => $accountStatus,
                    'registered'    => $insertedRecord->created_at->diffForHumans()
                );
            }else{
                throw new \PDOException('Failed to insert into database',500);
            }
        }
    }



    public function update($userDetailsArr,$id){
        $selectedUser = $this->authorRepository->findById($id);

        if($selectedUser==null){
            throw new \Exception('Resource does not exist',404);
        }else{
            $result = $this->authorRepository->changeStatus($userDetailsArr,$id);
            if($result['isUpdated']){
                $updatedRecord = $result['updatedRecord'];
                $accountStatus = ($updatedRecord->status==true)?'enabled':'disabled';

                return array(
                    'id'            => $updatedRecord->id,
                    'name'          => $updatedRecord->full_name,
                    'email'         => $updatedRecord->email,
                    'phone'         => $updatedRecord->phone,
                    'role'          => $updatedRecord->role,
                    'status'        => $accountStatus,
                    'registered'    => $updatedRecord->created_at->diffForHumans()
                );
            }else{
                throw new \PDOException('Failed to insert into database',500);
            }
        }
    }



    public function booksBelongToAuthor($id){
        $author = $this->authorRepository->findById($id);

        if($author == null){
            throw new CustomException('Resource does not exist',404);
        }else{

            $authorBooks =  $this->authorRepository->findBooksByAuthor($author);

            if(empty($authorBooks))
            {
                return $authorBooks;
                //throw new CustomException('Resource does not exist', 404);
            }else{
                $arr = array();
                foreach($authorBooks as $book){

                    $arr[] =    array(
                        'id'            => $book['id'],
                        'title'         => $book['title'],
                        'description'   => $book['description'],
                        'image'         => URL('/').Storage::url('').$book['image'],
                        'posted'        => Carbon::parse($book['created_at'])->diffForHumans(),
                    );
                }
            }
            return $arr;
        }
    }



}