<?php

namespace App\Http\Controllers;

use App\Http\Requests\Itinerary\StoreRequest;
use App\Http\Requests\Itinerary\UpdateRequest;
use App\Models\Itinerary;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ItineraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request) : Response
    {
        $itineraries = Itinerary::with('user')->where(function($query) use ($request) {
            $query->when($request->has('s'), function($q) use($request) {
                $q->where('name', 'like', "%{$request->get('s')}%");
            });
        })->get();

        // @TODO Filters

        return Inertia::render('Itinerary/Index', ['itineraries' => $itineraries]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create() : Response
    {
        return Inertia::render('Itinerary/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRequest $request
     * @return RedirectResponse
     */
    public function store(StoreRequest $request) : RedirectResponse
    {
        $itinerary = Itinerary::create($request->validated());

        return redirect()
            ->route('itineraries.edit', ['itinerary' => $itinerary])
            ->with('message', 'Itinerary was successfully created!');
    }

    /**
     * Display the specified resource.
     *
     * @param Itinerary $itinerary
     * @return Response
     */
    public function show(Itinerary $itinerary): Response
    {
        $itinerary->load('user', 'categories', 'matrices');
        return Inertia::render('Itinerary/Show', ['itinerary' => $itinerary]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Itinerary $itinerary
     * @return Response
     */
    public function edit(Itinerary $itinerary): Response
    {
        return Inertia::render('Itinerary/Edit', ['itinerary' => $itinerary]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRequest $request
     * @param Itinerary $itinerary
     * @return RedirectResponse
     */
    public function update(UpdateRequest $request, Itinerary $itinerary): RedirectResponse
    {
        $itinerary->save($request->validated());

        return redirect()
            ->route('itineraries.edit', ['itinerary' => $itinerary])
            ->with('message', 'Itinerary was successfully updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Itinerary $itinerary
     * @return RedirectResponse
     */
    public function destroy(Itinerary $itinerary): RedirectResponse
    {
        $itinerary->delete();

        return redirect()
            ->route('itineraries.index')
            ->with('message', 'Itinerary was successfully deleted!');
    }
}
