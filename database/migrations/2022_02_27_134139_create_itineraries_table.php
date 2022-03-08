<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('itineraries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->text('objective');
            $table->text('importance');
            $table->text('formation');
            $table->text('reference');
            $table->enum('cycle', [
                'weekly', 'monthly', 'bimonthly', 'semiannual', 'yearly'
            ]);
            $table->foreignId('user_id')->constrained();
            $table->timestamp('published_at')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('itineraries');
    }
};
