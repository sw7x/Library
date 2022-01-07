<?php


namespace App\Repositories;
use App\Models\Book;

class BookRepository
{
    public function findByBookName($categoryName){
        return Book::where('title', $categoryName)->get();
    }

    public function findById($id){
        return Book::find($id);
    }
    public function findMany($idArr){
        return Book::find($idArr);
    }

    public function findAll(){
        return Book::all();
    }

    public function add($book){
        $bookRecord = Book::create($book);
        return $bookRecord;
    }

    public function searchBookByTitle($title){
        return Book::whereHas('author', function ($q) use ($title){
            $q->where('title', 'like', '%' . $title . '%')
                ->where('users.status',true);
        })->get();
    }

    public function searchBookByAuthorName($name){

        return Book::whereHas('author', function ($q) use ($name){
            $q->where('users.role','teacher')
                ->where('users.status',true)
                ->Where('users.full_name', 'like', '%' . $name . '%');
        })->get();
    }


}