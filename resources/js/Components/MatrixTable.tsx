import React from 'react'
import {Simulate} from "react-dom/test-utils";
import dragOver = Simulate.dragOver;

interface Props {
  matrices: any[]
}

const MatrixTable : React.FC<Props> = ({matrices}) => {
    return (
      <>
        {matrices.map((matrix: any, k: number) => {
          let total = {
            weekly: 0,
            lessons: 0,
            hours: 0
          }
          return (
            <div key={k} className="w-full bg-white shadow-sm rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">{matrix.name}</h2>
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
                    {matrix.subjects.map((subject: any, k: number) => {
                      total.weekly += parseInt(subject.lessons_weekly)
                      total.lessons += parseInt(subject.lessons_total)
                      total.hours += parseInt(subject.lessons_hours)
                      return (
                        <tr key={k}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                {subject.name}
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                              {subject.lessons_weekly}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                              {subject.lessons_total}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                              {subject.lessons_hours}
                            </div>
                          </td>
                        </tr>
                      )
                    })}
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
                          {total.weekly}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-bold">
                          {total.lessons}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-bold">
                          {total.hours}
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
}

export default MatrixTable
