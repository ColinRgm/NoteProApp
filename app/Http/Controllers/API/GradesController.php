<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use function React\Promise\all;

class GradesController extends Controller
{
    public function index()
    {
        dump('test');
    }

    /**
     * @return void
     *
     * Get the add grades form
     */
    public function create()
    {
        //
    }

    /**
     * @param Request $request
     * @return void
     *
     * Add grade in the database
     */
    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    /**
     * @param Grade $grade
     * @return void
     *
     * Get the edit grades form
     */
    public function edit(Grade $grade)
    {
        //
    }

    /**
     * @param Request $request
     * @param string $id
     * @return void
     *
     * Add the modification to the database
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * @param string $id
     * @return void
     *
     * Delete a grade
     */
    public function destroy(string $id)
    {
        //
    }
}
