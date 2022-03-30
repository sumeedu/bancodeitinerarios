import React from 'react'
import Authenticated from "@/Layouts/Authenticated"
import Container from "@/Components/Container"
import {Head} from "@inertiajs/inertia-react"
import route from "ziggy-js"
import Collapse from "@/Components/Collapse";

const Index: React.FC = (props: React.PropsWithChildren<any>) => {
  const {itineraries, filters} = props

  // @TODO Create breadcrumb
  const header = (
    <h2 className="flex text-sm font-semibold leading-tight text-gray-800">
      Itinerários Informativos
      {filters.category && (
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          {filters.category.name}
        </span>
      )}
    </h2>
  )

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={header}
    >
      <Head title="Itinerários Formativos"/>

      <Container className="bg-white rounded-t-lg shadow-sm">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4">

          <div className="p-6 rounded-tl-lg bg-gray-50">
            <div>
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
              </div>
              <form className="mt-4 border-t border-gray-200">

                <div className="px-4 py-6 border-t border-gray-200">
                  <Collapse label="Desenvolvimento">
                    {filters.objective.map((v: any, k: number) => (
                      <div key={k} className="flex items-center">
                        <input
                          id={`filter-objective-${v.id}`}
                          name="objective[]"
                          value={v.id}
                          type="checkbox"
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-objective-${v.id}`}
                          className="flex-1 min-w-0 ml-3 text-gray-500"
                        >
                          {v.name}
                        </label>
                      </div>
                    ))}
                  </Collapse>
                </div>

                <div className="px-4 py-6 border-t border-gray-200">
                  <Collapse label="Ciclo">
                      {['bimestral', 'semestral', 'anual'].map((v: any, k: number) => (
                      <div key={k} className="flex items-center">
                        <input
                          id={`filter-cycle-${v}`}
                          name="cycle[]"
                          value={v}
                          type="checkbox"
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-cycle-${v}`}
                          className="flex-1 min-w-0 ml-3 text-gray-500 first-letter:uppercase"
                        >
                          {v}
                        </label>
                      </div>
                      ))}
                  </Collapse>
                </div>
                <div className="px-4 py-6 border-t border-gray-200">
                  <Collapse label="Temática">
                      {['inclusão', 'astronomia', 'audiovisual', 'engenharia', 'gastronomia','fotografia'].map((v: any, k: number) => (
                      <div key={k} className="flex items-center">
                        <input
                          id={`filter-cycle-${v}`}
                          name="cycle[]"
                          value={v}
                          type="checkbox"
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-cycle-${v}`}
                          className="flex-1 min-w-0 ml-3 text-gray-500 first-letter:uppercase"
                        >
                          {v}
                        </label>
                      </div>
                      ))}
                  </Collapse>
                </div>
                <div className="px-4 py-6 border-t border-gray-200">
                  <Collapse label="Metodologia">
                      {['laboratório', 'dança', 'debate', 'jogos','projetos'].map((v: any, k: number) => (
                      <div key={k} className="flex items-center">
                        <input
                          id={`filter-cycle-${v}`}
                          name="cycle[]"
                          value={v}
                          type="checkbox"
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-cycle-${v}`}
                          className="flex-1 min-w-0 ml-3 text-gray-500 first-letter:uppercase"
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
          {/* colun of itineraris cards */}
          <div className="col-span-3 p-6">
            <div className="gap-4">
              {itineraries.length > 0 ? itineraries.map((item: any) => (
                <div key={item.id} className="relative z-0 flex flex-col mb-10 bg-white rounded-lg shadow-lg md:flex-row sm:flex-col-reverse" >

                  <div className="flex flex-col justify-start p-6">
                    <a className="flex-1" href={route('itineraries.show', {itinerary: item})}>
                      <h3 className="mb-2 text-3xl font-bold text-gray-900 line-clamp-1" title={item.name}>{item.name}</h3>
                      <p className="mb-4 overflow-hidden text-gray-700 line-clamp-3" title={item.description}>{item.description}</p>
                      <p className="text-xs text-gray-600" title={item.user.name}>Criado por: {item.user.name}</p>
                    </a>

                    <div className="flex justify-end px-6 pt-4 pb-2">
                      <a className="z-10 inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full" href='#' title='inclusao tag'>inclusão</a>
                      <a className="z-10 inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full" href='#' title='tecnologia tag'>tecnologia</a>
                      <a className="z-10 inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full" href='#' title='robotica tag'>robotica</a>
                    </div>

                  </div>

                  <a className='contents' href={route('itineraries.show', {itinerary: item})} title="imagem ilustrativa">
                    <img
                      className="hidden w-64 h-64 pt-6 pb-12 pr-6 md:inline-flex"
                      src="https://placeimg.com/120/120/tech" alt={(item.description)}
                    />
                  </a>

                  <a href="" className="absolute p-2 bg-gray-100 rounded-full text-slate-500 right-4 top-2 hover:bg-gray-700 hover:text-gray-50 hover:delay-150" title='favoritar'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0   24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </a>

                </div>


              )) : (
                <div className="p-10 mb-10 text-center bg-white rounded-lg shadow-lg">
                  Não foi possível encontrar nenhum itinerário formativo.
                </div>
              )}
            </div>
          </div>

        </div>
      </Container>
    </Authenticated>
  )
}

export default Index
