import React, {useState} from 'react'

interface Props {
  label: string
}

const Collapse : React.FC<Props> = ({label, children}) => {
  const [ isOpen, setIsOpen ] = useState<any>(false)
  return (
    <>
      <h3 className="-mx-2 -my-3 flow-root" onClick={() => setIsOpen(!isOpen)}>
        <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
          <span className="font-medium text-gray-900">{label}</span>
          <span className="ml-6 flex items-center">

            <span className={`cursor-pointer ${isOpen ? 'hidden' : 'block'}`}>
              <svg className="h-5 w-5  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </span>
            <span className={`cursor-pointer ${!isOpen ? 'hidden' : 'block'}`}>
              <svg className="h-5 w-5 show" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </span>
          </span>
        </button>
      </h3>

      <div className={`pt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </>
  )
}

export default Collapse
