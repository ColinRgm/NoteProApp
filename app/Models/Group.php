<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Group extends Model
{
    /**
     * Un Group peut contenir une ou plusieurs Branch
     *
     * @return HasMany
     *
     */
    public function branches(): HasMany
    {
        return $this->hasMany(Branch::class);
    }
}
