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
        'branch_id',
        'user_id',
        'grade',
        'semester',
        'created_at',
        'updated_at',
    ];


    /**
     * Un User peut ajouter plusieurs Grades
     *
     * @return BelongsTo
     *
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


    /**
     * Une Grade appartient à une seule Branch
     *
     * @return BelongsTo
     *
     */
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
            'group_id'
        );
    }


    protected function casts(): array
    {
        return [
            'grade' => 'double',
        ];
    }

    public function avg()
    {
        return $this->branch()->avg('grade');
    }
}
