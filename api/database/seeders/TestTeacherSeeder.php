<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class TestTeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $testTeacherPassAccount = [

            'full_name'     => 'test',
            'email'         => 'test@email.com',
            'password'      =>  bcrypt(env('TEST_TEACHER_PASS', 'qwerty123')),
            'phone'         => '',
            'role'          => 'teacher',
            'status'        =>  1,
            'created_at'    => date('Y-m-d H:i:s'),
            'updated_at'    => date('Y-m-d H:i:s'),
        ];
        DB::table('users')->insert([$testTeacherPassAccount]);










    }
}
