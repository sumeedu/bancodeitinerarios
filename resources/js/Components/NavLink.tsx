import React from 'react';
import { Link } from '@inertiajs/inertia-react';

interface Props {
  href: string
  active: boolean
  className?: string
}

const NavLink: React.FC<Props> = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="flex items-center relative py-6 px-4 lg:p-6 text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-100"
        >
            {children}
        </Link>
    );
}

export default NavLink
