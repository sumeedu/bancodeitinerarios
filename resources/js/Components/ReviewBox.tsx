import React, {useState} from "react"
import route from 'ziggy-js'
import {useForm} from "@inertiajs/inertia-react";

interface Props {
  itinerary: any
}

const ReviewBox: React.FC<Props> = ({itinerary}) => {
  const { reviews } = itinerary

  const ofMax = 5;
  const [showReviewForm, setShowReviewForm] = useState(false)
  const {data, setData, post} = useForm({
    itinerary_id: itinerary.id,
    comment: '',
    rate: 3,
  })

  const submitReview = (e: React.SyntheticEvent) => {
    e.preventDefault()

    post(route('reviews.store'))

    setShowReviewForm(!showReviewForm)
    setData({...data, comment: ''});
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const key = e.target.id
    const value = e.target.value

    setData(data => ({
      ...data,
      [key]: value
    }))
  }

  return (
    <div className="mx-auto py-4 max-w-sm ">
      <div className="mb-1 tracking-wide py-4">
        <h2 className="text-gray-800 font-semibold mt-1">67 avaliações</h2>
        <div className="border-b pb-3">
          <div className="flex items-center mt-1">
            <div className=" w-1/5 text-blue-600 tracking-tighter">
              <span>5 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-7/12 bg-blue-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">51%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className="w-1/5 text-blue-600 tracking-tighter">
              <span>4 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className="w-1/5 bg-blue-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">17%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className="w-1/5 text-blue-600 tracking-tighter">
              <span>3 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-3/12 bg-blue-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">19%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className=" w-1/5 text-blue-600 tracking-tighter">
              <span>2 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-1/5 bg-blue-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">8%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className="w-1/5 text-blue-600 tracking-tighter">
              <span>1 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-2/12 bg-blue-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">5%</span>
            </div>
          </div>
        </div>
      </div>

      {reviews && (
      <div className="flow-root">
        <h3 className="font-semibold mt-4 mb-3 text-lg">Avaliações</h3>
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {reviews.map((review: any, k: number) => (
            <li key={k} className="py-3 sm:py-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full"
                       src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    {review.user.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.rate}/{ofMax}
                  </p>
                </div>
              </div>
              <div className="py-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {review.comment}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      )}
      <div className="mt-4 w-full">
        <h3 className="font-semibold mt-4 mb-0 text-lg">Faça uma avaliação</h3>
        {!showReviewForm ? (
          <div>
            <p className="text-gray-700 text-sm mb-3 py-1">
              e dê sua opinião sobre esse itinerário.
            </p>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
            >
              Fazer uma avalização
            </button>
          </div>
        ) : (
          <div>
            <form className="mt-4" onSubmit={submitReview}>
              <textarea
                onChange={handleChange}
                id="comment"
                name="comment"
                rows={4}
                defaultValue={data.comment}
                className="block mb-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."></textarea>
              <button
                className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>

    </div>
  );
}

export default ReviewBox


