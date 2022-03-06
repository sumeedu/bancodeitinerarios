<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use HasFactory;

    /**
     * Lazy loading data
     *
     * @var string[]
     */
    protected $with = [
        'user'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'comment',
        'rate',
        'user_id',
        'itinerary_id',
    ];

    /**
     * The user
     *
     * @return BelongsTo
     */
    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The itinerary
     *
     * @return BelongsTo
     */
    public function itinerary() : BelongsTo
    {
        return $this->belongsTo(Itinerary::class);
    }
}
