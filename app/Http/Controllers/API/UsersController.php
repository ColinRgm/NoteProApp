<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use App\Notifications\WelcomeUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::select('id', 'last_name', 'first_name', 'email')
            ->where('role_id', 2)
            ->get();

        return Inertia::render('users', [
            'users' => $users
        ]);
    }

    public function create()
    {
        $roles = Role::all();

        $formateur = User::select('id', 'last_name', 'first_name')
            ->where('role_id', 3)
        ->get();

        $coach = User::select('id', 'last_name', 'first_name')
            ->where('role_id', 4)
            ->get();

        return Inertia::render('users/create', [
            'roles' => $roles,
            'formateurs' => $formateur,
            'coachs' => $coach
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'password' => 'required|string|max:255',
            'role_id' => 'required|integer|exists:roles,id',
            'formateur_id' => 'nullable|integer',
            'coach_id' => 'nullable|integer'
        ]);

        User::create([
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role_id' => $validated['role_id'],
            'formateur_id' => $validated['formateur_id'],
            'coach_id' => $validated['coach_id']
        ]);

        // $newUser->notify(new WelcomeUser());

        return redirect('dashboard')->with('success', 'Utilisateur créé avec succès !');
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
