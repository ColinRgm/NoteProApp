<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::select(
            'id',
            'last_name',
            'first_name',
            'email')
            ->where(
                'role_id',
                1)
            ->get();

        return Inertia::render('students', [
            'users' => $users
        ]);
    }

    public function create()
    {
        return Inertia::render('students/create');
    }

    public function store(Request $request)
    {
        //
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
