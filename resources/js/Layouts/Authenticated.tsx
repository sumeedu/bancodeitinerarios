import React, { useState } from 'react'
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from '@/Components/Dropdown'
import NavLink from '@/Components/NavLink'
import MegaMenu from '@/Components/MegaMenu';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Navbar, Button } from 'flowbite-react';
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
      <div className='bg-white border-b border-gray-100'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <Navbar
            fluid={true}
            rounded={true}
          >
            <Navbar.Brand href="/">
              <ApplicationLogo className="block w-auto text-gray-500 h-9" />
            </Navbar.Brand>
            <div className="flex gap-2 md:order-2">
              <Button href="/register">
                Criar conta
              </Button>
              <Button href="/login">
                Entrar
              </Button>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              <Navbar.Link href="/itinerarios">
                Itinerários Formativos
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>

      {header && (
        <header className="bg-white shadow">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">{header}</div>
        </header>
      )}

      <main>{children}</main>
    </div>
  )
}

export default Authenticated
