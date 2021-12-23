<?php


namespace App\Repositories;
use App\Models\Book;
use App\Models\User;



class AuthorRepository
{
    public function findByAuthorByEmail($email){
        return User::where(['email'=> $email,'role' => 'teacher'])->get();
    }

    public function findAll(){
        return User::where('role', 'teacher')->get();
    }

    public function findById($id){
        return User::where('role', 'teacher')->find($id);
    }

    public function findMany($idArr){
        return Book::find($idArr);
    }



    public function add($author){
        $authorRecord = User::create($author);
        return $authorRecord;
    }


    public function changeStatus($userDetailsArr,$id){

        $selectedUser = $this->findById($id);
        try
        {
            $selectedUser->status    =   $userDetailsArr['status'];
            $selectedUser->save();
            $updatedRecord = $selectedUser->refresh();
            return array(
                'isUpdated' =>true,
                'id'=>$id,
                'updatedRecord'=>$updatedRecord
            );

        }catch (\PDOException $e) {
            return array('isUpdated' =>false,'id'=>null);
        }
    }

    public function findBooksByAuthor(User $author){
        return $author->books()->orderBy('created_at','desc')->get()->toArray();
    }





}