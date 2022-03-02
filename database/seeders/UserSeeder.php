<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Itinerary;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create some fake users
        User::factory(10)->create()->each(function ($user) {
            $itineraries = Itinerary::factory(3)->make();
            $user->itineraries()->saveMany($itineraries);

            $itineraries->each(function ($itinerary) {
                // areas
                $categories = Category::where('type', 'area')->get()->random(rand(1, 4));
                $itinerary->categories()->attach($categories);
                // axis
                $categories = Category::where('type', 'axis')->get()->random(rand(1, 4));
                $itinerary->categories()->attach($categories);
                // objectives
                $categories = Category::where('type', 'objective')->get()->random(rand(1, 17));
                $itinerary->categories()->attach($categories);
            });
        });
    }
}
