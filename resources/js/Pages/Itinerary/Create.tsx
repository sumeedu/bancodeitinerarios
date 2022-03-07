import React, {ChangeEvent} from 'react'
import Authenticated from "@/Layouts/Authenticated"
import {Head, InertiaFormProps, useForm} from "@inertiajs/inertia-react"
import Container from "@/Components/Container"
import route from 'ziggy-js'

interface FormData {
  name: string
  description: string
  objective: string
  importance: string
  formation: string
  reference: string
  matrices: any
}

const Create: React.FC = (props: React.PropsWithChildren<any>) => {
  const { data, setData, post } = useForm<FormData>({
    name: '',
    description: '',
    objective: '',
    importance: '',
    formation: '',
    reference: '',
    matrices: []
  })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    post(route('activities.store'))
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
                    placeholder="My activity"
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
                <textarea
                  id="description"
                  name="description"
                  rows={8}
                  className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="This activity description"
                  defaultValue={data.description}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="taxonomy" className="block text-sm font-medium text-gray-700">
                Taxonomy
              </label>
              <div className="mt-1">
                <select
                  id="taxonomy"
                  name="taxonomy"
                  autoComplete="taxonomy-bloom"
                  className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={handleChange}
                  // defaultValue={data.taxonomy}
                >
                  <option value="" disabled>Select the taxonomy</option>
                  <option value="create">Create</option>
                  <option value="evaluate">Evaluate</option>
                  <option value="analyze">Analyze</option>
                  <option value="apply">Apply</option>
                  <option value="understand">Understand</option>
                  <option value="remember">Remember</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="allows_fork"
                        name="allows_fork"
                        type="checkbox"
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        // defaultChecked={''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="allows_fork" className="font-medium text-gray-700">
                        Allows fork
                      </label>
                      <p className="text-gray-500">Allows other person to create a copy of this activity.</p>
                    </div>
                  </div>
                </div>
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
