import React from 'react'
import Authenticated from "@/Layouts/Authenticated"
import {Head} from "@inertiajs/inertia-react"
import Container from "@/Components/Container"
import ObjectiveIcon from "@/Components/ObjectiveIcon"
import moment from 'moment'
import ReviewBox from "@/Components/ReviewBox";
import MatrixTable from "@/Components/MatrixTable";

const Index: React.FC = (props: React.PropsWithChildren<any>) => {
  const {itinerary} = props

  moment.locale('pt-br');

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
              <h3 className="text-gray-900 font-bold text-5xl mb-2">{itinerary.name}</h3>

              <div className="flex flex-row mt-2 pt-3">
                <div className="self-center">
                  <img className='w-10 h-10 object-cover rounded-full border-2' alt='User avatar'
                       src='https://i.pravatar.cc/200' />
                </div>
                <div className="flex flex-col ml-4 self-center">
                  <div className='text-gray-600 text-sm font-semibold'>{itinerary.user.name}</div>
                  <div className='flex w-full'>
                    <div className='text-gray-400 font-thin text-xs'>
                      Atualizado {moment(itinerary.updated_at).fromNow()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mt-8 mb-2 text-lg">Descrição</h4>
            <p>{itinerary.description}</p>

            <h4 className="font-semibold mt-8 mb-2 text-lg">Objetivos</h4>
            <p>{itinerary.objective}</p>

            <h4 className="font-semibold mt-8 mb-2 text-lg">Importância</h4>
            <p>{itinerary.importance}</p>

            <h4 className="font-semibold mt-8 mb-2 text-lg">Formação</h4>
            <p>{itinerary.formation}</p>

            <h4 className="font-semibold mt-8 mb-2 text-lg">Referência</h4>
            <p>{itinerary.reference}</p>

            <div>
              <h4 className="font-semibold mt-4 mb-2 text-lg">Matrizes</h4>

              <div className="flex flex-col gap-3">
                <MatrixTable matrices={itinerary.matrices} />
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
