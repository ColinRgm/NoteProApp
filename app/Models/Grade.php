<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;
use Illuminate\Support\Facades\Auth;

class Grade extends Model
{

    protected $fillable = [
        'branche_id',
        'user_id',
        'grade',
        'semester',
        'created_at',
        'updated_at',
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }


    public function module(): BelongsTo
    {
        return $this->belongsTo(Module::class);
    }


    public function group(): HasOneThrough
    {
        return $this->hasOneThrough(
            Group::class,
            Branch::class,
            'id',
            'id',
            'branche_id',
            'groupe_id'
        );
    }


    protected function casts(): array
    {
        return [
            'grade' => 'double',
        ];
    }
}
