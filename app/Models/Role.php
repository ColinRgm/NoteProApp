<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    /**
     * Un Role peut avoir un ou plusieurs User
     *
     * @return HasMany
     *
     */
    public function user(): HasMany {
        return $this->hasMany(User::class);
    }
}
