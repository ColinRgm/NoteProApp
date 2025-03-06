<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\GradeResources;
use App\Models\Branche;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function Pest\Laravel\get;

class BrancheController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $branches = Branche::all();

        return GradeResources::collection($branches);
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
        //
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
