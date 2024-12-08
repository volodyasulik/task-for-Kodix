import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ROUTER_KEYS } from '../const/app-keys.const';
import KodexIcon from '../../assets/icons/star.icon.svg';
import SignInComponent from '../pages/auth/signInFrom/signIn.component';
import SignUpComponent from '../pages/auth/sighnUpForm/signUp.component';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Home page!</p>
    <img src={KodexIcon} alt="Kodex Icon" style={{ height: '100px' }} />
  </div>
);

const NotFound = () => (
  <div>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for doesn't exist.</p>
  </div>
);

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to={ROUTER_KEYS.home} replace />} />

      <Route path={ROUTER_KEYS.home} element={<Home />} />

      <Route path={ROUTER_KEYS.auth}>
        <Route index element={<Navigate to={ROUTER_KEYS.signIn} replace />} />
        <Route path={ROUTER_KEYS.signIn} element={<SignInComponent />} />
        <Route path={ROUTER_KEYS.signUp} element={<SignUpComponent />} />
      </Route>

      <Route path={ROUTER_KEYS.all} element={<NotFound />} />
    </Routes>
  </Router>
);
