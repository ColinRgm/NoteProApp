<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Seeder;

class BranchesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Branch::insert([
            ['name' => 'ECG', 'weight' => 100, 'rounding' => 0.5, 'group_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Math', 'weight' => 50, 'rounding' => 0.2, 'group_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Anglais', 'weight' => 50, 'rounding' => 0.2, 'group_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'EPSIC', 'weight' => 80, 'rounding' => 0.2, 'group_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'CIE', 'weight' => 20, 'rounding' => 0.2, 'group_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'TPI', 'weight' => 100, 'rounding' => 0.5, 'group_id' => 4, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
