import React, {ChangeEvent} from 'react'
import Authenticated from "@/Layouts/Authenticated"
import {Head, InertiaFormProps, useForm} from "@inertiajs/inertia-react"
import Container from "@/Components/Container"
import Event from "@ckeditor/ckeditor5-utils/src/eventinfo"
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import route from 'ziggy-js'

interface Subject {
  name: string
  lessons_weekly: number
  lessons_total: number
  lessons_hours: number
}

interface Matrix {
  name: string
  subjects: Subject[]
}

interface FormData {
  name: string
  description: string
  objective: string
  importance: string
  formation: string
  reference: string
  cycle: string
  matrices: Matrix[]
}

const Create: React.FC = (props: React.PropsWithChildren<any>) => {
  const { data, setData, post } = useForm<FormData>({
    name: '',
    description: '',
    objective: '',
    importance: '',
    formation: '',
    reference: '',
    cycle:  '',
    matrices: []
  })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(data)
    // post(route('activities.store'))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    const key = e.target.id
    const value = e.target.value

    setData(data => ({
      ...data,
      [key]: value,
    }))
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cadastrar um Itinerário Informativo</h2>}
    >
      <Head title="Cadastrar um Itinerário Informativo"/>

      <Container>
        <form onSubmit={handleSubmit}>
          <div className="px-4 py-5 space-y-6 bg-white sm:p-6">

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="flex mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="flex-1 block w-full border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                    placeholder="Nome do itinerário formativo"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <CKEditor
                  editor={ ClassicEditor }
                  data="<p>Descreva o itinerário formativo...</p>"
                  onChange={(e: Event, editor: ClassicEditor) => {
                    const text = editor.getData()
                    setData(data => ({
                      ...data,
                      'description': text,
                    }))
                  }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="objective" className="block text-sm font-medium text-gray-700">
                Objetivos
              </label>
              <div className="mt-1">
                <div className="mt-1">
                  <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Enumere os objetivos deste itinerário formativo...</p>"
                    onChange={(e: Event, editor: ClassicEditor) => {
                      const text = editor.getData()
                      setData(data => ({
                        ...data,
                        'objective': text,
                      }))
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="importance" className="block text-sm font-medium text-gray-700">
                Importância
              </label>
              <div className="mt-1">
                <CKEditor
                  editor={ ClassicEditor }
                  data="<p>Pensando na proposta do itinerário formativo, seu contexto social...</p>"
                  onChange={(e: Event, editor: ClassicEditor) => {
                    const text = editor.getData()
                    setData(data => ({
                      ...data,
                      'importance': text,
                    }))
                  }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="formation" className="block text-sm font-medium text-gray-700">
                Formação
              </label>
              <div className="mt-1">
                <CKEditor
                  editor={ ClassicEditor }
                  data="<p>Espera-se que ao final desse aprofundamento o aluno...</p>"
                  onChange={(e: Event, editor: ClassicEditor) => {
                    const text = editor.getData()
                    setData(data => ({
                      ...data,
                      'formation': text,
                    }))
                  }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="reference" className="block text-sm font-medium text-gray-700">
                Referências
              </label>
              <div className="mt-1">
                <CKEditor
                  editor={ ClassicEditor }
                  data="<p>Enumere as referências bibliográficas que sustentam esse itinerário informativo.</p>"
                  onChange={(e: Event, editor: ClassicEditor) => {
                    const text = editor.getData()
                    setData(data => ({
                      ...data,
                      'reference': text,
                    }))
                  }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="taxonomy" className="block text-sm font-medium text-gray-700">
                Periodicidade
              </label>
              <div className="mt-1">
                <select
                  id="cycle"
                  name="cycle"
                  className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={handleChange}
                >
                  <option value="" disabled>Selecione a periodicidade das aulas</option>
                  <option value="weekly">Semanal</option>
                  <option value="monthly">Mensal</option>
                  <option value="bimonthly">Bimestral</option>
                  <option value="semiannual">Semestral</option>
                  <option value="yearly">Anual</option>
                </select>
              </div>
            </div>

          </div>
          <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <div className="flex space-x-3">
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </Container>
    </Authenticated>
  )
}

export default Create
