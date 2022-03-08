<?php

namespace Database\Factories;

use App\Models\Itinerary;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class ItineraryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(6),
            'objective' => $this->faker->paragraph(6),
            'importance' => $this->faker->paragraph(6),
            'formation' => $this->faker->paragraph(6),
            'reference' => $this->faker->paragraph(3),
            'cycle' => $this->faker->randomElement([
                'weekly', 'monthly', 'bimonthly', 'semiannual', 'yearly'
            ]),
        ];
    }
}
