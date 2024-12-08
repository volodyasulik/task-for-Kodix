import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ROUTER_KEYS } from '../const/app-keys.const';
import SignInComponent from '../pages/auth/signInFrom/signIn.component';
import SignUpComponent from '../pages/auth/sighnUpForm/signUp.component';
import HomeComponent from '../pages/home/home.component';

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

      <Route path={ROUTER_KEYS.home} element={<HomeComponent />} />
      <Route path={`${ROUTER_KEYS.post}/:id`} element={<HomeComponent />} />

      <Route path={ROUTER_KEYS.auth}>
        <Route index element={<Navigate to={ROUTER_KEYS.signIn} replace />} />
        <Route path={ROUTER_KEYS.signIn} element={<SignInComponent />} />
        <Route path={ROUTER_KEYS.signUp} element={<SignUpComponent />} />
      </Route>

      <Route path={ROUTER_KEYS.all} element={<NotFound />} />
    </Routes>
  </Router>
);
