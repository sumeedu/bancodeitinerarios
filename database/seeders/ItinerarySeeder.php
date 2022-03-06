<?php

namespace Database\Seeders;

use App\Models\Review;
use App\Models\User;
use App\Models\Category;
use App\Models\Itinerary;
use Illuminate\Database\Seeder;

class ItinerarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::all()->each(function ($user) {
            $itineraries = Itinerary::factory(3)->make();
            $user->itineraries()->saveMany($itineraries);

            $itineraries->each(function ($itinerary) {
                /**
                 * Categories
                 */

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
