<?php

namespace Database\Seeders;

use App\Models\Module;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ModulesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Module::insert([
            // EPSIC
            ['id' => 162, 'name' => 'Analyser et modéliser des données', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 117, 'name' => 'Mettre en place l’infrastructure informatique d’une petite entreprise', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 231, 'name' => 'Appliquer la protection et la sécurité des données', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 293, 'name' => 'Création et publication d\'un site web', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 431, 'name' => 'Exécuter des mandats de manière autonome dans un environnement informatique', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 122, 'name' => 'Automatiser des procédures à l’aide de scripts', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 319, 'name' => 'Concevoir et implémenter des applications', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 164, 'name' => 'Créer des bases de données et y insérer des données', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 114, 'name' => 'Mettre en œuvre des systèmes de codification, de compression et d’encryptage', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 320, 'name' => 'Programmer orienté objet', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 347, 'name' => 'Utiliser un service avec des conteneurs', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 165, 'name' => 'Utiliser des bases de données NoSQL', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 254, 'name' => 'Décrire les processus métier dans votre propre environnement professionnel', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 322, 'name' => 'Concevoir et implémenter des interfaces utilisateur', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 346, 'name' => 'Concevoir et réaliser des solutions cloud', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 426, 'name' => 'Développer un logiciel avec des méthodes agiles', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 183, 'name' => 'Implémenter la sécurité d’une application', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 323, 'name' => 'Programmer de manière fonctionnelle', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 306, 'name' => 'Réaliser des petits projets dans son propre environnement professionnel', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 450, 'name' => 'Tester des applications', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 241, 'name' => 'Initialiser des solutions ICT innovantes', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 324, 'name' => 'Prendre en charge des processus DevOps avec des outils logiciels', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 245, 'name' => 'Mettre en œuvre des solutions ICT innovantes', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 321, 'name' => 'Programmer des systèmes distribués', 'created_at' => now(), 'updated_at' => now()],

            // CIE
            ['id' => 106, 'name' => 'Interroger, traiter et assurer la maintenance des bases de données', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 110, 'name' => 'Analyser et représenter des données avec des outils', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 187, 'name' => 'Mettre en service un poste de travail ICT avec le système d’exploitation', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 259, 'name' => 'Développer des solutions ICT avec le machine learning', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 294, 'name' => 'Réaliser le front-end d\'une application Web interactive', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 295, 'name' => 'Réaliser le back-end pour des applications', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 335, 'name' => 'Réaliser une application pour mobile', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}




