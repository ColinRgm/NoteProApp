<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

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


    public function grades(): HasOneThrough
    {
        return $this->hasOneThrough(
            Grade::class,
            Branch::class,
            'id',
            'id',
            'branch_id',
            'groupe_id'
        );
    }
}
