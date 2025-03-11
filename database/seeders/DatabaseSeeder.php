<?php

namespace Database\Seeders;

use App\Models\Branch;
use App\Models\Group;
use App\Models\Role;
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
        User::insert([
            'first_name' => "Admin",
            'last_name' => "Jobtrek",
            'email' => 'admin@admin.ch',
            'password' => Hash::make('admin'),
            'role_id' => 4,
        ]);

        Branch::insert([
            ['name' => 'ECG', 'weight' => 100, 'rounding' => 0.5, 'groupe_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Math', 'weight' => 50, 'rounding' => 0.2, 'groupe_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Anglais', 'weight' => 50, 'rounding' => 0.2, 'groupe_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 162 - Analyser et modéliser des données', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 117 - Mettre en place l’infrastructure informatique d’une petite entreprise', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 231 - Appliquer la protection et la sécurité des données', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 293 - Création et publication d\'un site web', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 431 - Exécuter des mandats de manière autonome dans un environnement informatique', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 122 - Automatiser des procédures à l’aide de scripts', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 319 - Concevoir et implémenter des applications', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 164 - Créer des bases de données et y insérer des données', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 114 - Mettre en œuvre des systèmes de codification, de compression et d’encryptage', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 320 - Programmer orienté objet', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 347 - Utiliser un service avec des conteneurs', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 165 - Utiliser des bases de données NoSQL', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 254 - Décrire les processus métier dans votre propre environnement professionnel', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 322 - Concevoir et implémenter des interfaces utilisateur', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 346 - Concevoir et réaliser des solutions cloud', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 426 - Développer un logiciel avec des méthodes agiles', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 183 - Implémenter la sécurité d’une application', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 323 - Programmer de manière fonctionnelle', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 306 - Réaliser des petits projets dans son propre environnement professionnel', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 450 - Tester des applications', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 241 - Initialiser des solutions ICT innovantes', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 324 - Prendre en charge des processus DevOps avec des outils logiciels', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 245 - Mettre en œuvre des solutions ICT innovantes', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Module 321 - Programmer des systèmes distribués', 'weight' => 80, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'CIE 106 - Interroger, traiter et assurer la maintenance des bases de données', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'CIE 110 - Analyser et représenter des données avec des outils', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'CIE 187 - Mettre en service un poste de travail ICT avec le système d’exploitation', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'CIE 259 - Développer des solutions ICT avec le machine learning', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'CIE 294 - Réaliser le front-end d\'une application Web interactive', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'CIE 295 - Réaliser le back-end pour des applications', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'CIE 335 - Réaliser une application pour mobile', 'weight' => 20, 'rounding' => 0.5, 'groupe_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'TPI', 'weight' => 100, 'rounding' => 0.5, 'groupe_id' => 4, 'created_at' => now(), 'updated_at' => now()],
        ]);

        Group::insert([
            ['name' => 'Culture générale', 'weight' => 20, 'rounding' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Compétence de base élargie', 'weight' => 10, 'rounding' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Compétence en informatique', 'weight' => 30, 'rounding' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Travail pratique', 'weight' => 40, 'rounding' => 1, 'created_at' => now(), 'updated_at' => now()]
        ]);

        Role::insert([
            ['name' => 'Apprenti'],
            ['name' => 'Formateur'],
            ['name' => 'Coach']
        ]);
    }
}
