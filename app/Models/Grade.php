<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Auth;

class Grade extends Model
{
    /* Relation à une branche et à un personne */

    protected $table = 'grades';


    /*protected $fillable = [
        'grade',
        'user_id',
    ];*/





    /* ------------------------------------- Fonction de relation avec le user -------------------------------------- */
    /**
     * Un utilisateur peut ajouter plusieurs notes
     *
     * @return BelongsTo
     *
     */
    public function userAddGrade(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id'); // Relation avec le model User
    }


    /**
     * Une note appartient à un seul utilisateur
     *
     * @return BelongsTo
     *
     */
    public function addedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');// Relation avec le model User
    }


    /**
     * Vérifier sur l'utilisateur authentifié à déjà ajouté une note pour un module
     *
     * @return bool
     *
     */
    public function alreadyAddedBy(): bool
    {
        return Auth::check() && $this->addedBy->contains('id', Auth::id());
    }




    /* ----------------------------------- Fonction de relation avec les branches ----------------------------------- */

    /**
     * Une note appartient à une seule branche
     *
     * @return BelongsTo
     *
     */
    public function gradeByBranche(): BelongsTo {
        return $this->belongsTo(Branche::class, 'branche_id');// Relation avec le model branche
    }
}
