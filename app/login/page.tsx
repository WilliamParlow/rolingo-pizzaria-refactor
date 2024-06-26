'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const LoginPage: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    cookies.user && router.push('/');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        setCookie('user', {
            admin: true,
            blocked: false,
            email: username,
            id: 1,
            login: username,
            name: 'William',
            passwd: password,
        } as User);
        router.push('/');
    };

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen">

            <div className="w-full max-w-md bg-white rounded-md shadow-lg bg-gray-100 p-2">

                <form onSubmit={handleLogin}>

                    <header className="text-center mb-6 bg-[#FF5722] rounded-md">

                        <h4 className="text-2xl text-gray-900 p-4 text-white">
                            <b>Entre na Rolingo!</b>
                        </h4>

                    </header>

                    <main className='px-8'>

                        <div className="form-group">
                            <label htmlFor="login">Email</label>
                            <input value={username} type="email" placeholder="Entre com seu email!" required className="form-control w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none" onChange={handleUsernameChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passwd">Senha</label>
                            <input value={password} type="password" placeholder="Entre com sua senha!" required className="form-control w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none" onChange={handlePasswordChange} />
                        </div>

                    </main>

                    <footer className="mt-6 text-center px-4 pb-4">

                        <button type="submit" className="w-full py-3 mt-4 bg-[#3cc844] rounded-md text-white text-sm hover:bg-[#3dd966] transition duration-200">Entrar</button>

                    </footer>

                </form>
            </div>
        </section>
    );
};

export default LoginPage;