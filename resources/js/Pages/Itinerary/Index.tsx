import React from 'react'
import Authenticated from "@/Layouts/Authenticated"
import Container from "@/Components/Container"
import {Head} from "@inertiajs/inertia-react"
import route from "ziggy-js"
import Collapse from "@/Components/Collapse";

const Index: React.FC = (props: React.PropsWithChildren<any>) => {
  const {itineraries, filters} = props

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <Head title="Itinerários Formativos"/>

      <Container className="bg-white shadow-sm rounded-t-lg">
        <div className="grid grid-cols-4 gap-4">

          <div className="bg-gray-50 p-6 rounded-tl-lg">
            <div>
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
              </div>
              <form className="mt-4 border-t border-gray-200">

                <div className="border-t border-gray-200 px-4 py-6">
                  <Collapse label="Desenvolvimento">
                    {filters.objective.map((v: any, k: number) => (
                      <div key={k} className="flex items-center">
                        <input
                          id={`filter-objective-${v.id}`}
                          name="objective[]"
                          value={v.id}
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-objective-${v.id}`}
                          className="ml-3 min-w-0 flex-1 text-gray-500"
                        >
                          {v.name}
                        </label>
                      </div>
                    ))}
                  </Collapse>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <Collapse label="Ciclo">
                      {['bimestral', 'semestral', 'anual'].map((v: any, k: number) => (
                      <div key={k} className="flex items-center">
                        <input
                          id={`filter-cycle-${v}`}
                          name="cycle[]"
                          value={v}
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-cycle-${v}`}
                          className="ml-3 min-w-0 flex-1 text-gray-500 first-letter:uppercase"
                        >
                          {v}
                        </label>
                      </div>
                      ))}
                  </Collapse>
                </div>
                <div className="border-t border-gray-200 px-4 py-6">
                  <Collapse label="Temática">
                      {['inclusão', 'astronomia', 'audiovisual', 'engenharia', 'gastronomia','fotografia'].map((v: any, k: number) => (
                      <div key={k} className="flex items-center">
                        <input
                          id={`filter-cycle-${v}`}
                          name="cycle[]"
                          value={v}
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-cycle-${v}`}
                          className="ml-3 min-w-0 flex-1 text-gray-500 first-letter:uppercase"
                        >
                          {v}
                        </label>
                      </div>
                      ))}
                  </Collapse>
                </div>
                <div className="border-t border-gray-200 px-4 py-6">
                  <Collapse label="Metodologia">
                      {['laboratório', 'dança', 'debate', 'jogos','projetos'].map((v: any, k: number) => (
                      <div key={k} className="flex items-center">
                        <input
                          id={`filter-cycle-${v}`}
                          name="cycle[]"
                          value={v}
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-cycle-${v}`}
                          className="ml-3 min-w-0 flex-1 text-gray-500 first-letter:uppercase"
                        >
                          {v}
                        </label>
                      </div>
                      ))}
                  </Collapse>
                </div>

              </form>
            </div>
          </div>

          <div className="col-span-3 p-6">

            <div className="gap-4">
              {itineraries && itineraries.map((item: any) => (
                <div key={item.id} className="flex flex-col md:flex-row sm:flex-col-reverse rounded-lg bg-white shadow-lg mb-10 z-0 relative" >

                  <div className="p-6 flex flex-col justify-start">
                    <a className="flex-1" href={route('itineraries.show', {itinerary: item})}>
                      <h3 className="text-gray-900 text-3xl font-bold  mb-2 line-clamp-1">{item.name}</h3>
                      <p className="text-gray-700 mb-4 overflow-hidden line-clamp-3">{item.description}</p>
                      <p className="text-gray-600 text-xs">Criado por: {item.user.name}</p>
                    </a>

                    <div className="px-6 pt-4 pb-2 flex justify-end">
                      <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 z-10" href='#'>inclusão</a>
                      <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 z-10" href='#'>tecnologia</a>
                      <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 z-10" href='#'>robotica</a>
                    </div>

                  </div>

                  <a className='contents' href={route('itineraries.show', {itinerary: item})}>
                    <img
                      className="w-64 h-64 pt-6 pr-6 pb-12"
                      src="https://placeimg.com/120/120/tech" alt={(item.description)}
                    />
                  </a>

                  <a href="" className="text-slate-500 absolute right-4 top-2 bg-gray-100 rounded-full p-2 hover:bg-gray-700 hover:text-gray-50 hover:delay-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0   24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </a>

                </div>


              ))}
            </div>
          </div>

        </div>
      </Container>
    </Authenticated>
  )
}

export default Index
