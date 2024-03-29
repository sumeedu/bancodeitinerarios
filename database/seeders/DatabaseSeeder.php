<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Itinerary;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            CategoriesSeeder::class,
            ItinerarySeeder::class,
            MatrixSeeder::class,
            ReviewSeeder::class,
        ]);


    }
}
