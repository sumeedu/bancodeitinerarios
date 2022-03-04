import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import { Link } from '@inertiajs/inertia-react'
import Container from "@/Components/Container"
import route from "ziggy-js"

interface Props {
  auth: any,
  errors: any,
}

const Dashboard: React.FC<Props> = ({auth, errors}) => {
    return (
        <Authenticated
            auth={auth}
            errors={errors}
        >
          <Container>
            <div className="p-6 bg-white border-b border-gray-200">
              Olarrrr! Este é um protótipo do sistema de Itinerários Formativos da Sumé Solutions. Use a nossa busca ou <Link href={route('itineraries.index')}>clique aqui para navegar no catálogo</Link>.
            </div>
          </Container>
        </Authenticated>
    )
}

export default Dashboard
