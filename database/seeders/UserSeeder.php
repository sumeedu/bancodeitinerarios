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
        User::factory(10)->create();
    }
}
