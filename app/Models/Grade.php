<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
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




    /* ------------------------------------- Fonction de relation avec le user -------------------------------------- */
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




    /* ----------------------------------- Fonction de relation avec les branches ----------------------------------- */
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


    public function avg()
    {
        return $this->branch()->avg('grade');
    }
}
