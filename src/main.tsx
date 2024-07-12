import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Home from './routes/Home';
import SignInForm from './routes/SignIn';
import SignUpForm from './routes/SignUp';
import store from './redux/store';
import ArticlePage from './routes/ArticlePage';
import Profile from './routes/Profile';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />}>
              <Route index element={<ArticlePage/>} />
            </Route>
            <Route path="login" element={<SignInForm />} />
            <Route path="register" element={<SignUpForm />} />
            <Route path="profile" element={<Profile />}></Route>
          </Route>

          <Route path="*" />
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);