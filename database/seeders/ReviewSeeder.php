<?php

namespace Database\Seeders;

use App\Models\Itinerary;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Itinerary::inRandomOrder()->limit(10)->each(function ($itinerary) {

            User::inRandomOrder()->limit(rand(1, 5))->get()->each(function ($user) use($itinerary) {

                $review = Review::factory()->makeOne();
                $review->user_id = $user->id;
                $review->itinerary_id = $itinerary->id;
                $review->save();

            });

        });
    }
}
