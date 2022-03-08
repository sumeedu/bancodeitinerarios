import React from 'react'
import Button from '@/Components/Button'
import Guest from '@/Layouts/Guest'
import { Head, Link, useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

interface Props {
    status: string
}

const VerifyEmail: React.FC<Props> = ({ status }) => {
    const { post, processing } = useForm()

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        post(route('verification.send'))
    }

    return (
        <Guest>
            <Head title="Verificação de e-mail" />

            <div className="mb-4 text-sm text-gray-600">
              Obrigado por se registrar! Antes de começar, você poderia verificar seu e-mail clicando no link que nós
              acabamos de enviar para você? Se você não recebeu este e-mail, nós ficaremos feliz em mandar outro.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                  Uma nova mensagem para verificação de e-mail foi enviada para o e-mail que você forneceu no seu cadastro.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button processing={processing}>Enviar e-mail de verificação novamente</Button>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Sair
                    </Link>
                </div>
            </form>
        </Guest>
    )
}

export default VerifyEmail
