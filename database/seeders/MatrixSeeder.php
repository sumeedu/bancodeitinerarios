<?php

namespace Database\Seeders;

use App\Models\Itinerary;
use App\Models\Subject;
use App\Models\Matrix;
use Illuminate\Database\Seeder;

class MatrixSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $itineraries = Itinerary::all();
        $itineraries->each(function($itinerary) {

            $matrices = Matrix::factory(rand(2, 10))->make();
            $itinerary->matrices()->saveMany($matrices);

            $itinerary->matrices()->each(function($matrix) {
                $subjects = Subject::factory(rand(3, 5))->make();
                $matrix->subjects()->saveMany($subjects);
            });
        });
    }
}
