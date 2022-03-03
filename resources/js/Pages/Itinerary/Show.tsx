import React from 'react'
import Authenticated from "@/Layouts/Authenticated"
import {Head} from "@inertiajs/inertia-react"
import Container from "@/Components/Container"
import ObjectiveIcon from "@/Components/ObjectiveIcon"
import moment from 'moment'
import ReviewBox from "@/Components/ReviewBox";

const Index: React.FC = (props: React.PropsWithChildren<any>) => {
  const {itinerary} = props

  function getCategoryByType(obj: any, type: string): any[] {
    let list : any[] = []
    obj.categories.filter((c: any) => c.type === type).map((c: any) => list.push(c.name))
    return list
  }

  let areas: any[] = getCategoryByType(itinerary, 'area')
  let axis : any[] = getCategoryByType(itinerary, 'axis')
  let objectives : any[] = getCategoryByType(itinerary, 'objective')

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <Head title={`Itinerários Formativos | ${itinerary.name}`}/>

      <Container className="bg-white shadow-sm rounded-t-lg">
        <div className="grid grid-cols-3 gap-4">

          <div className="col-span-2 p-6">

            <div className="mb-6 border-b pb-6">
              <h3 className="text-gray-900 text-xl font-medium mb-2">{itinerary.name}</h3>

              <div className="flex flex-row mt-2 py-3 ">
                <div className="w-auto h-auto rounded-full border-2">
                  <img className='w-12 h-12 object-cover rounded-full shadow' alt='User avatar'
                       src='https://i.pravatar.cc/200' />
                </div>
                <div className="flex flex-col mb-2 ml-4 mt-1">
                  <div className='text-gray-600 text-sm font-semibold'>{itinerary.user.name}</div>
                  <div className='flex w-full mt-1'>
                    <div className='text-gray-400 font-thin text-xs'>
                      Atualizado a {moment(itinerary.updated_at).fromNow()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Descrição</h4>
            <p>{itinerary.description}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Objetivos</h4>
            <p>{itinerary.objective}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Importância</h4>
            <p>{itinerary.importance}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Formação</h4>
            <p>{itinerary.formation}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Referência</h4>
            <p>{itinerary.reference}</p>

            <div>
              <h4 className="font-semibold mt-4 mb-2 text-lg">Matrizes</h4>

              <div className="flex flex-col gap-3">
              {Array.from({length: 3}, (v, k) => k+1 ).map((i) => (
              <div key={i} className="w-full bg-white shadow-sm rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                      <h2 className="font-semibold text-gray-800">Com quantas estratégias chegamos a uma solução?</h2>
                    </header>
                    <div className="p-3">
                      <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                              <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Componentes Curriculares</div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Aulas Semanais</div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Aulas Totais</div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Total Horas</div>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                              <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                    Clube de Jovens Leitores
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  2
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  40
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  30
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                    Clube da imagem
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  2
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  40
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  30
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                    Clube de Quadrinhos
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  2
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  40
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  30
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                    Clube de eSports e Jogos Digitais
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  2
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  40
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  30
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                    Clube de exatas: resolução de problemas
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  2
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  40
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  30
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                    TOTAL
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left font-bold">
                                  10
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left font-bold">
                                  200
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left font-bold">
                                  150
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
              ))}
              </div>
            </div>

          </div>

          <div className="bg-gray-50 p-6 rounded-tr-lg">

            <h4 className="font-semibold mt-4 mb-2 text-lg">Áreas do Conhecimento</h4>
            <p>{areas.join(', ')}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Eixos Estruturantes</h4>
            <p>{axis.join(', ')}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Objetivos da ONU</h4>
            <div className="flex flex-wrap gap-1">
              {objectives.map((n, k) => (
                <ObjectiveIcon key={k} name={n} />
              ))}
            </div>

            <div className="mt-4">
              <ReviewBox />
            </div>

          </div>

        </div>
      </Container>
    </Authenticated>
  )
}

export default Index
