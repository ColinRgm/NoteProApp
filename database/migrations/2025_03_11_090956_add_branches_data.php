<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::table('branches')->insert([
            ['name' => 'ECG', 'weight' => 100, 'rounding' => 0.5, 'groupe_id' => 1],
            ['name' => 'Math', 'weight' => 50, 'rounding' => 0.2, 'groupe_id' => 2],
            ['name' => 'Anglais', 'weight' => 50, 'rounding' => 0.2, 'groupe_id' => 2],
            ['name' => 'Module 162 - Analyser et modéliser des données', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 117 - Mettre en place l’infrastructure informatique d’une petite entreprise', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 231 - Appliquer la protection et la sécurité des données', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 293 - Création et publication d\'un site web', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 431 - Exécuter des mandats de manière autonome dans un environnement informatique', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 122 - Automatiser des procédures à l’aide de scripts', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 319 - Concevoir et implémenter des applications', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 164 - Créer des bases de données et y insérer des données', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 114 - Mettre en œuvre des systèmes de codification, de compression et d’encryptage', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 320 - Programmer orienté objet', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 347 - Utiliser un service avec des conteneurs', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 165 - Utiliser des bases de données NoSQL', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 254 - Décrire les processus métier dans votre propre environnement professionnel', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 322 - Concevoir et implémenter des interfaces utilisateur', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 346 - Concevoir et réaliser des solutions cloud', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 426 - Développer un logiciel avec des méthodes agiles', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 183 - Implémenter la sécurité d’une application', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 323 - Programmer de manière fonctionnelle', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 306 - Réaliser des petits projets dans son propre environnement professionnel', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 450 - Tester des applications', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 241 - Initialiser des solutions ICT innovantes', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 324 - Prendre en charge des processus DevOps avec des outils logiciels', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 245 - Mettre en œuvre des solutions ICT innovantes', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'Module 321 - Programmer des systèmes distribués', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'CIE 106 - Interroger, traiter et assurer la maintenance des bases de données', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'CIE 110 - Analyser et représenter des données avec des outils', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'CIE 187 - Mettre en service un poste de travail ICT avec le système d’exploitation', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'CIE 259 - Développer des solutions ICT avec le machine learning', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'CIE 294 - Réaliser le front-end d\'une application Web interactive', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'CIE 295 - Réaliser le back-end pour des applications', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'CIE 335 - Réaliser une application pour mobile', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3],
            ['name' => 'TPI', 'weight' => 100, 'rounding' => 0.5, 'groupe_id' => 4],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('branches')->delete();
    }
};
