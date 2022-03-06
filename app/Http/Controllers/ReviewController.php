<?php

namespace App\Http\Controllers;

use App\Http\Requests\Review\StoreRequest;
use App\Models\Itinerary;
use App\Models\Review;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReviewController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRequest $request
     * @return RedirectResponse
     */
    public function store(StoreRequest $request) : RedirectResponse
    {
        Review::create(
            array_merge($request->validated(), ['user_id' => Auth::id()])
        );

        return redirect()
            ->route('itineraries.show', ['itinerary' => $request->get('itinerary_id')])
            ->with('message', 'Feedback was successfully created!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy(Review $review)
    {
        $review->delete();
    }
}
