<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use phpDocumentor\Reflection\DocBlock\Tags\Uses;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'first_name' => "Admin",
            'last_name' => "Jobtrek",
            'email' => 'admin@admin.ch',
            'password' => Hash::make('admin'),
            'role_id' => 4,
        ]);
    }
}
