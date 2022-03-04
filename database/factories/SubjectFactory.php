<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subject>
 */
class SubjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->paragraph(1),
            'lessons_weekly' => $this->faker->numberBetween(1, 3),
            'lessons_total' => $this->faker->numberBetween(10, 40),
            'lessons_hours' => $this->faker->numberBetween(10, 30),
        ];
    }
}
