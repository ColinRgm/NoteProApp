<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>1
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     *
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     *
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Un utilisateur peut avoir une ou plusieurs notes
     *
     * @return HasMany
     *
     */
    public function userHasGrade(): HasMany {
        return $this->hasMany(Grade::class, 'user_id'); // Relation avec le model Grade
    }

    /**
     * Un utilisateur peut ajouté une ou plusieurs notes
     *
     * @return BelongsToMany
     *
     */
    public function addGrade(): BelongsToMany {
        return $this->belongsToMany(Grade::class, 'grades'); // Relation avec la table grades
    }

    /**
     * Un User peut avoir un Role
     *
     * @return HasOne
     *
     */
    public function oneRoleByUser(): HasOne {
        return $this->hasOne(Role::class, 'user_id');
    }
}


