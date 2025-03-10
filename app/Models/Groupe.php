<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Groupe extends Model
{
    /**
     * Table associée au model
     *
     * @return string
     *
     */
    protected $table = 'groupes';

    /**
     * Un groupe peut contenir une ou plusieurs Branche
     *
     * @return BelongsToMany
     *
     */
    public function groupeBy(): BelongsToMany
    {
        return $this->belongsToMany(Branche::class, 'branches');
    }
}
