<?php

namespace Database\Seeders;

use App\Models\Group;
use Illuminate\Database\Seeder;

class GroupesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Group::insert([
            ['name' => 'Culture générale', 'weight' => 20, 'rounding' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Compétence de base élargie', 'weight' => 10, 'rounding' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Compétence en informatique', 'weight' => 30, 'rounding' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Travail pratique', 'weight' => 40, 'rounding' => 1, 'created_at' => now(), 'updated_at' => now()]
        ]);
    }
}
