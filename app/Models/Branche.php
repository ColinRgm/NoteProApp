<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\JsonResponse;

class Branche extends Model
{

    protected $table = 'branche';


    /**
     * Une branche peut avoir un ou plusieurs notes
     *
     * @return HasMany
     *
     */
    public function brancheForGrade(): HasMany
    {
        return $this->hasMany(Grade::class, 'branch_id'); // Relation avec le model Grade
    }
}
