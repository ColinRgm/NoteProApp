<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Http\JsonResponse;

class Branch extends Model
{

    protected $fillable = [
        'groupe_id',
        'name',
        'weight',
        'rounding'
    ];


    public function grades(): HasMany
    {
        return $this->hasMany(Grade::class);
    }


    public function group(): BelongsTo
    {
        return $this->belongsTo(Group::class);
    }
}
