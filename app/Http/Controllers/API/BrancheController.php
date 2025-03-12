<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\Grade;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BrancheController extends Controller
{

    public function create(): Response
    {
        return Inertia::render('addGrade', [
            'branches' => Branch::select('id', 'name')->get()
        ]);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Branch::all('id', 'name');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'branche_id' => 'required|integer'
        ]);

        $grade = Grade::create([
            'branche_id' => $request->branche_id
        ]);

        event(new Branch($grade));

        return to_route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        // $branche = Branch::where('name', 'LIKE', '%CIE%')->get(['id', 'name']);

        $branche = Branch::first();
        return $branche;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
