import React, { useEffect } from 'react'
import Button from '@/Components/Button'
import Checkbox from '@/Components/Checkbox'
import Guest from '@/Layouts/Guest'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import ValidationErrors from '@/Components/ValidationErrors'
import { Head, Link, useForm } from '@inertiajs/inertia-react'
import route from 'ziggy-js'

interface Props {
    status: string
    canResetPassword: boolean
}

const Login: React.FC<Props> = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    })

    useEffect(() => {
        return () => {
            reset('password')
        }
    }, [])

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            event.target.name as "email" | "password" | "remember",
            event.target.type === 'checkbox' ? event.target.checked + '' : event.target.value)
    }

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        post(route('login'))
    }

    return (
        <Guest>
            <Head title="Entrar" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="E-mail" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Senha" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Salvar dados</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Esqueceu sua senha?
                        </Link>
                    )}

                    <Button className="ml-4" processing={processing}>
                        Entrar
                    </Button>
                </div>
            </form>
        </Guest>
    )
}

export default Login
