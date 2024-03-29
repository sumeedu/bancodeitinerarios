import React, {useState} from 'react'
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from '@/Components/Dropdown'
import NavLink from '@/Components/NavLink'
import MegaMenu from '@/Components/MegaMenu';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'
import {Link, usePage} from '@inertiajs/inertia-react'
import route from 'ziggy-js'

interface Props {
  auth: any
  header?: React.ReactNode
  errors: any
}

const Authenticated: React.FC<Props> = ({
  auth,
  header,
  children
}) => {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const { categories } = usePage<any>().props.app

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">

            <div className="flex">
              <div className="shrink-0 flex items-center">
                <Link href="/">
                  <ApplicationLogo className="block h-9 w-auto text-gray-500"/>
                </Link>
              </div>
            </div>
            {/*searchbox*/}
            <div className="searchbox hidden md:flex justify-center items-center">
              <div className="xl:w-96">
                <form method="GET" action={route('itineraries.index')}>
                  <div className="input-group relative flex items-stretch w-full">
                    <input
                      name="s"
                      id="s"
                      type="search"
                      className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded rounded-r-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700  focus:outline-none"
                      placeholder="Buscar por..."
                      aria-label="Busca">
                    </input>
                    <button className="btn px-6 py-2.5 bg-gray-100 text-slate-500 leading-tight rounded rounded-l-none  hover:bg-gray-700 hover:text-white transition duration-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg ease-in-out flex items-center" type="submit">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* MegaMenu */}
            <div className="flex items-center">
              <div className="self-center hidden md:flex">
                <MegaMenu label="Categorias">
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <ul>
                      <h3 className="font-bold text-xl text-white text-bold mb-4">Áreas do Conhecimento</h3>
                      {categories.area.map((v: any, k: number) => (
                        <li key={k}>
                          <a
                            href={route('itineraries.category', {slug: v.slug})}
                            className="block p-3 hover:bg-gray-900 text-gray-300 hover:text-white"
                          >
                            {v.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r-0 lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-bold text-xl text-white text-bold mb-4">Eixo Estruturantes</h3>
                    <ul>
                      {categories.axis.map((v: any, k: number) => (
                        <li key={k}>
                          <a
                            href={route('itineraries.category', {slug: v.slug})}
                            className="block p-3 hover:bg-gray-900 text-gray-300 hover:text-white"
                          >
                            {v.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MegaMenu>
              </div>

              <div className="hidden md:flex hover:bg-gray-700 hover:text-white">
                <NavLink href={route('itineraries.index')} active={route().current('itineraries.index')}>
                  Itinerários Formativos
                </NavLink>
              </div>

              <div className="flex">
              {auth.user ? (
                <div className="ml-3 relative">
                  <Dropdown>
                    <Dropdown.Trigger>
                      <span className="inline-flex rounded-md">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                          >
                              {auth.user.name}

                            <svg
                              className="ml-2 -mr-0.5 h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                              </svg>
                          </button>
                      </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                      <Dropdown.Link href={route('itineraries.create')} as="a">
                        Cadastrar Itinerário
                      </Dropdown.Link>
                      <div className="border border-gray-50 border-b" />
                      <Dropdown.Link href={route('logout')} method="post" as="button">
                        Sair
                      </Dropdown.Link>
                    </Dropdown.Content>
                  </Dropdown>
                </div>
              ) : (
                <div className="relative hidden md:flex">
                  <Link href={route('login')} className="btn px-6 py-2.5 bg-gray-100 textslate-500 leading-tight uppercase rounded  hover:bg-blue-700 hover:text-gray-50 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                    Entrar
                  </Link>
                </div>
              )}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                      className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* itinerários formativos e login button */}
            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
              <div className="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink href={route('itineraries.index')} active={route().current('itineraries.index')}>
                  Itinerários Formativos
                </ResponsiveNavLink>
              </div>

              {auth.user ? (
              <div className="pt-4 pb-1 border-t border-gray-200">
                <div className="px-4">
                  <div className="font-medium text-base text-gray-800">{auth.user.name}</div>
                  <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                </div>

                <div className="mt-3 space-y-1">
                  <ResponsiveNavLink method="post" href={route('logout')} as="button">
                    Sair
                  </ResponsiveNavLink>
                </div>
              </div>
              ) : (
              <div className="mt-3 space-y-1">
                <ResponsiveNavLink href={route('login')} as="button">
                  Entrar
                </ResponsiveNavLink>
              </div>
              )}

            </div>
          </div>
        </div>


      </nav>

      {header && (
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
        </header>
      )}

      <main>{children}</main>
    </div>
  )
}

export default Authenticated
