<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Matrix extends Model
{
    use HasFactory;

    /**
     * Lazy loading data
     *
     * @var string[]
     */
    protected $with = [
        'subjects'
    ];

    /**
     * The subjects that related to this matrix
     *
     * @return HasMany
     */
    public function subjects(): HasMany
    {
        return $this->hasMany(Subject::class);
    }
}
