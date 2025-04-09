<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Module extends Model
{
    /** @use HasFactory<\Database\Factories\ModulesFactory> */
    use HasFactory;


    public function grades(): HasMany
    {
        return $this->hasMany(Grade::class);
    }

    public $incrementing = false;
}
