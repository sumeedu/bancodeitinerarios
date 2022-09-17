import React from 'react'
import Authenticated from "@/Layouts/Authenticated"
import Container from "@/Components/Container"
import { Head } from "@inertiajs/inertia-react"
import route from "ziggy-js"
import Collapse from "@/Components/Collapse";
import { Badge, Breadcrumb, Card, Button } from 'flowbite-react'
import { HiHome, HiBookmark } from 'react-icons/hi'

const Index: React.FC = (props: React.PropsWithChildren<any>) => {
  const { itineraries, filters } = props

  // @TODO Create breadcrumb
  const header = (
    <h2 className="flex text-sm font-semibold leading-tight text-gray-800">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item
          href="/"
          icon={HiHome}
        >
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/itinerarios">
          Itinerarios Formativos
        </Breadcrumb.Item>
        {filters.category && (
          <Breadcrumb.Item>
            {filters.category.name}
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    </h2>
  )

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={header}
    >
      <Head title="Itinerários Formativos" />

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
                    {['inclusão', 'astronomia', 'audiovisual', 'engenharia', 'gastronomia', 'fotografia'].map((v: any, k: number) => (
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
                    {['laboratório', 'dança', 'debate', 'jogos', 'projetos'].map((v: any, k: number) => (
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
                <Card horizontal imgSrc='https://placeimg.com/120/120/tech' key={item.id}>
                  <div className="flex flex-col justify-start p-6">

                    <a className="flex-1" href={route('itineraries.show', { itinerary: item })}>
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" title={item.name}>{item.name}</h3>
                      <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 line-clamp-3" title={item.description}>{item.description}</p>
                      <p className="text-xs text-gray-600" title={item.user.name}>Criado por: {item.user.name}</p>
                    </a>

                    <div className="z-10 flex flex-wrap gap-2 justify-left">
                      <Badge>inclusão</Badge>
                      <Badge>tecnologia</Badge>
                      <Badge>robótica</Badge>
                    </div>
                  </div>

                  <div className='flex justify-end'>
                    <Button>
                      Read more
                      <svg
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </div>


                </Card>
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
