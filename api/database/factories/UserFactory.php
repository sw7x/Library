<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            'full_name'     => $this->faker->name(),
            'email'         => $this->faker->unique()->safeEmail(),
            'password'      => bcrypt('Pa$$w0rd!'),

            'phone'         => $this->faker->phoneNumber(),
            'role'          => 'teacher',
            'status'        => $this->faker->randomElement([1,0]),

            'created_at'    => now(),
            'updated_at'    => now(),
        ];




    }


}

