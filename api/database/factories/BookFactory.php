<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $randomNumber   = $this->faker->numberBetween(1, 3);
        $bookName     = $this->faker->sentence($nbWords = $randomNumber, $variableNbWords = true);

        $users = User::pluck('id')->toArray();




        return [
            'title'         => $bookName,
            'description'   => $this->faker->text(),
            'image'         => $this->faker->image('public/storage/books',640,480, null, false),
            //'image'         => $this->faker->image(storage_path('images'),500,400, null, false),


            //'author_id'     => $this->faker->randomElement($users),
            'author_id'     => User::inRandomOrder()->first()->id,
            'created_at'    => now(),
            'updated_at'    => now() ,
        ];
    }
}
