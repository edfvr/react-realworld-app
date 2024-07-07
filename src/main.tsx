import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Home from './routes/Home';
import SignInForm from './routes/SignIn';
import SignUpForm from './routes/SignUp';
import store from './redux/store';
import ArticlePage from './components/ArticlePage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/article/:slug" element={<ArticlePage/>} />
            <Route path="/login" element={<SignInForm />} />
            <Route path="/register" element={<SignUpForm />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);