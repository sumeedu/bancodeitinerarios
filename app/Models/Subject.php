<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Subject extends Model
{
    use HasFactory;

    /**
     * The matrix that owns this subject
     *
     * @return BelongsTo
     */
    public function matrix(): BelongsTo
    {
        return $this->belongsTo(Matrix::class);
    }
}
