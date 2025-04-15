<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Module extends Model
{
    use HasFactory;

    protected $appends = ['title'];

    public function grades(): HasMany
    {
        return $this->hasMany(Grade::class);
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    protected function title(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->id . ' - ' . $this->name
        );
    }

    public $incrementing = false;
}
