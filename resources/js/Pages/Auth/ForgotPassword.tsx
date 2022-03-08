import React from 'react'
import Button from '@/Components/Button'
import Guest from '@/Layouts/Guest'
import Input from '@/Components/Input'
import ValidationErrors from '@/Components/ValidationErrors'
import { Head, useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

interface Props {
    status: string
}

const ForgotPassword: React.FC<Props> = ({ status }) => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    })

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData("email", event.target.value)
    }

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        post(route('password.email'))
    }

    return (
        <Guest>
            <Head title="Esqueci minha senha" />

            <div className="mb-4 text-sm text-gray-500 leading-normal">
                Esqueceu sua senha? Sem problemas. Apenas nos informe seu e-mail e nós enviaremos um link para que você
                possa escolher uma senha nova.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        Enviar
                    </Button>
                </div>
            </form>
        </Guest>
    )
}

export default ForgotPassword
