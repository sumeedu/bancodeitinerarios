import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import { Head } from '@inertiajs/inertia-react'
import Container from "@/Components/Container";

function Dashboard(props: React.PropsWithChildren<any>) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
          <Container>
            <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
          </Container>
        </Authenticated>
    )
}

export default Dashboard
