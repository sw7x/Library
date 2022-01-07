<?php


namespace App\Services;


use App\Exceptions\CustomException;
use App\Repositories\BookRepository;
use Illuminate\Support\Facades\Storage;


class BookService
{
    private $bookRepository;

    public function __construct(BookRepository $bookRepository) {
        $this->bookRepository = $bookRepository;
    }

    public function view($bookId){
        $book = $this->bookRepository->findById($bookId);

        if(!$book){
            throw new CustomException('Book does not exist',404);
        }


        $url    = URL('/').Storage::url('');
        $imgUrl = ($book->image==null)?'':$url.$book->image; 


        $arr = array(
            'id'            => $book->id,
            'title'         => $book->title,
            'description'   => $book->description,
            'image'         => $imgUrl,
            'author'        => $book->author->full_name,
            'posted'        => $book->created_at->diffForHumans(),
        );
        return $arr;
    }

    public function viewAll(){
        $results = $this->bookRepository->findAll();
        return $this->fillArr($results);
    }

    public function searchBookByTitle($title){
        $results = $this->bookRepository->searchBookByTitle($title);
        return $this->fillArr($results);
    }


    public function searchBookByAuthorName($authorName){
        $results = $this->bookRepository->searchBookByAuthorName($authorName);
        return $this->fillArr($results);
    }




    private function fillArr($results){
        $arr = [];
        $url            = URL('/').Storage::url('');
        

        foreach($results as $result){
            $imgUrl = ($result->image==null)?'':$url.$result->image;

            $arr[] = array(
                'id'            => $result->id,
                'title'         => $result->title,
                'description'   => $result->description,
                'image'         => $imgUrl,
                'author'        => $result->author->full_name,
                'posted'        => $result->created_at->diffForHumans(),
            );
        }
        return $arr;
    }



    public function add($bookArr){
        //check if already exist in database
        $author = $this->bookRepository->findByBookName($bookArr['title']);

        if($author->count() > 0){
            throw new CustomException('Book name already exist',409);
        }else{
            $insertedRecord = $this->bookRepository->add($bookArr);            
            if($insertedRecord){
                return array(
                    'id'            => $insertedRecord->id,
                    'title'         => $insertedRecord->title,
                    'description'   => $insertedRecord->description,
                    'image'         => URL('/').Storage::url('').$insertedRecord->image,
                    'author'        => $insertedRecord->author->full_name,
                    'posted'        => $insertedRecord->created_at->diffForHumans(),
                );
            }else{
                throw new \PDOException('Failed to insert into database',500);
            }
        }
    }





}
