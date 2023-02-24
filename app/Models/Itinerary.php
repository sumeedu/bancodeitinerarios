<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Overtrue\LaravelFavorite\Traits\Favoriteable;

class Itinerary extends Model
{
    use HasFactory, Favoriteable;

    /**
     * The owner of this itinerary
     *
     * @return BelongsTo
     */
    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The categories that are related to this itinerary
     *
     * @return BelongsToMany
     */
    public function categories() : BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    /**
     * The matrices that are related to this itinerary
     *
     * @return HasMany
     */
    public function matrices() : HasMany
    {
        return $this->hasMany(Matrix::class);
    }

    /**
     * The reviews that are related to this itinerary
     *
     * @return HasMany
     */
    public function reviews() : HasMany
    {
        return $this->hasMany(Review::class);
    }
}
