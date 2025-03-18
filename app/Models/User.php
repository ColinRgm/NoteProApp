<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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
        'role_id'
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
     * Un User peut avoir une ou plusieurs Grade
     *
     * @return HasMany
     *
     */
    public function grades(): HasMany {
        return $this->hasMany(Grade::class);
    }

    /**
     * Un User peut avoir un Role
     *
     * @return BelongsTo
     *
     */
    public function role(): BelongsTo {
        return $this->belongsTo(Role::class);
    }



    /**
     * Calcul des moyennes
     */
    public function weightedAverage()
    {
        return $this->grades()
            ->join('branches', 'grades.branch_id', '=', 'branches.id')
            ->join('groups', 'branches.group_id', '=', 'groups.id')
            ->select('SUM(grades.grade * branches.weight * groups.weight) / SUM(branches.weight * groups.weight) AS weighted_average')
            ->value('weighted_average');
    }
}


