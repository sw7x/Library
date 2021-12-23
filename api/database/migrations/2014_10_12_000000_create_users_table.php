<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {

            $table->increments('id');
            $table->string('full_name',80);
            $table->string('email')->unique();
            $table->string('password');
            $table->string('phone',20)->nullable();

            $table->enum('role', ['admin','teacher'])->default('teacher');
            $table->boolean('status')->default(True);

            //$table->rememberToken();
            $table->timestamps();
        });












    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
