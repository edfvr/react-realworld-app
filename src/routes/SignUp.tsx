import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setUser } from '../redux/authSlice';
import api from '../services/api';

interface ApiResponse {
  user: {
    username: string;
    email: string;
    token: string;
  };
}

export default function SignUp(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post<ApiResponse>('/users', { user: { username, email, password } });
      const user = response.data.user;
      dispatch(setUser(user));
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Failed to sign up. Please try again.'); // Set error message
    }
  };

  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center ng-binding">Sign up</h1>
          <p className="text-xs-center">
            <Link to="/login">Have an account?</Link>
          </p>
          {error && <p className="text-xs-center text-danger">{error}</p>} 
          <form onSubmit={handleSubmit}>
            <fieldset className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </fieldset>
            <fieldset className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
            <button className="btn btn-lg btn-primary pull-xs-right" type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
