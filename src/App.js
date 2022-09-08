import "./App.css";
import React, { lazy, Suspense } from 'react';
import { retry } from './utils/CommonFunctions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
const Home = lazy(() => retry(() => import('./components/Home')));

function App() {
  console.log(
    '%cMade with ❤ by Hit Patel',
    'color: black; background: grey; font-size: 15px; padding: 5px 15px; border-radius: 6px',
  );

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
    },
  ];

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                element={<page.view key={Date.now()} />}
                key={index}
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
