<?php


namespace App\Utils;


use Illuminate\Support\Facades\Storage;

class FileUploadUtil
{

    public function upload($file,$dir){
        $fullFileName   = $file->getClientOriginalName();
        $filename   = pathinfo($fullFileName, PATHINFO_FILENAME);
        $ext        = $file->extension();

        //remove unwanted characters and spaces
        $filename = str_replace(' ', '_', $filename);
        $filename = preg_replace( '/[\W]/', '', $filename);

        $imageName = substr($filename, 0, 40).'_'.uniqid().'.'.$ext;

        $file_path = $file->storeAs($dir, $imageName, 'public');

        return $file_path;

    }


}
