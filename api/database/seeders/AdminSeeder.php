<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $admin = [

            'full_name'     => 'admin',
            'email'         => 'admin',
            'password'      =>  bcrypt(env('ADMIN_PASS', 'qwerty123')),
            'phone'         => '',
            'role'          => 'admin',
            'status'        =>  1,
            'created_at'    => date('Y-m-d H:i:s'),
            'updated_at'    => date('Y-m-d H:i:s'),
        ];
        DB::table('users')->insert([$admin]);










    }
}
