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
        'group_id',
        'name',
        'weight',
        'rounding'
    ];

    /**
     * Une Branch peut avoir un ou plusieurs Grade
     *
     * @return HasMany
     *
     */
    public function grades(): HasMany
    {
        return $this->hasMany(Grade::class);
    }



    /**
     * Une Branch peut appartenir à un seul Group
     *
     * @return BelongsTo
     */
    public function group(): BelongsTo
    {
        return $this->belongsTo(Group::class);
    }
}
