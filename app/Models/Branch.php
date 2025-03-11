<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Http\JsonResponse;

class Branch extends Model
{
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
     * @return HasOne
     */
    public function group(): HasOne
    {
        return $this->hasOne(Groupe::class);
    }
}
