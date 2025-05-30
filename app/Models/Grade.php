<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;
use Illuminate\Support\Facades\Auth;

class Grade extends Model
{

    protected $fillable = [
        'branch_id',
        'module_id',
        'user_id',
        'grade',
        'semester',
        'test_name',
        'pdf'
    ];

    protected $appends = ['title'];

    protected static function booted(): void
    {
        static::addGlobalScope('connected_user', function (Builder $builder) {
            $builder->where('user_id', auth()->id());
        });
    }


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
            'branch_id',
            'groupe_id'
        );
    }


    protected function casts(): array
    {
        return [
            'grade' => 'double',
        ];
    }

    protected function title(): Attribute
    {
        return Attribute::make(
            get: fn() => match ($this->branch_id) {
                1, 2, 3 => $this->branch->name . ' - ' . $this->test_name,
                4, 5 => $this->module->title,
                default => $this->branch->name,
            },
        );
    }
}
