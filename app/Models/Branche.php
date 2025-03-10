<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Http\JsonResponse;

class Branche extends Model
{

    /**
     * Table associée au model
     *
     * @var string
     *
     */
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

    /**
     * Une branche peut appartenir à un seul groupe
     *
     * @return HasOne
     */
    public function brancheByGroupe(): HasOne
    {
        return $this->hasOne(Groupe::class, 'groupe_id');
    }
}
