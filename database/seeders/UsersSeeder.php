<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert([
            'first_name' => "Admin",
            'last_name' => "Admin",
            'email' => 'admin@jobtrek.com',
            'password' => Hash::make('admin'),
            'role_id' => 1,
        ]);
    }
}
