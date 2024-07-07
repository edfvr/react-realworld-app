import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, setToken } from '../redux/authSlice';
import api from '../services/api';

interface UserResponse {
    user: {
        username: string;
        email: string;
        token: string;
    };
}

export default function SignInForm(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await api.post<UserResponse>('/users/login', { user: { email, password } });
            const { username, email: userEmail, token } = response.data.user;
            dispatch(setUser({ username, email: userEmail, token }));
            dispatch(setToken(token));
            navigate('/');
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <div className="container page">
            <div className="row">
                <div className="col-md-6 offset-md-3 col-xs-12">
                    <h1 className='text-xs-center ng-binding'>Sign in</h1>
                    <p className="text-xs-center">
                        <a href="/register">Need an account? </a>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <fieldset className='form-group'>
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className='form-group'>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </fieldset>
                        <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
