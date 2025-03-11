<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::table('groups')->insert([
            ['name' => 'Culture générale', 'weight' => 20, 'rounding' => 1],
            ['name' => 'Compétence de base élargie', 'weight' => 10, 'rounding' => 1],
            ['name' => 'Compétence en informatique', 'weight' => 30, 'rounding' => 1],
            ['name' => 'Travail pratique', 'weight' => 40, 'rounding' => 1]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('groups')->delete();
    }
};
