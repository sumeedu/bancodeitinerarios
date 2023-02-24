<?php

namespace App\Http\Controllers;

use App\Http\Requests\Itinerary\StoreRequest;
use App\Http\Requests\Itinerary\UpdateRequest;
use App\Models\Category;
use App\Models\Itinerary;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class FavouriteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index() : JsonResponse
    {
        $user = Auth::user();
        $favorites = $user?->getFavoriteItems(Itinerary::class)->paginate();

        return response()->json($favorites);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Itinerary $itinerary
     * @return void
     */
    public function store(Itinerary $itinerary) : void
    {
        $itinerary = Itinerary::find($itinerary->getAttributeValue('id'));

        Auth::user()?->favorite($itinerary);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Itinerary $itinerary
     * @return void
     */
    public function destroy(Itinerary $itinerary): void
    {
        $itinerary = Itinerary::find($itinerary->getAttributeValue('id'));

        Auth::user()?->unfavorite($itinerary);
    }
}
