<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Group extends Model
{
    /**
     * Un Group peut contenir une ou plusieurs Branch
     *
     * @return BelongsToMany
     *
     */
    public function branch(): BelongsToMany
    {
        return $this->belongsToMany(Branch::class);
    }
}
