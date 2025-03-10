<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{

    /**
     * Table associée au model
     *
     * @var string
     *
     */
    protected $table = 'roles';

    /**
     * Un Role peut avoir un ou plusieurs User
     *
     * @return HasMany
     *
     */
    public function roleForUser(): HasMany {
        return $this->hasMany(User::class, 'role_id');
    }
}
