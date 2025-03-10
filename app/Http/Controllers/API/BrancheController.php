<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Branche;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrancheController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Branche $branche)
    {
        // $branche = Branche::where('name', 'LIKE', '%CIE%')->get(['id', 'name']);

        return Inertia::render('AddGrade', [
            'branche' => $branche
        ]);
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
