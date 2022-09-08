import React, { lazy, Suspense } from 'react';
import { retry } from './utils/CommonFunctions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Home = lazy(() => retry(() => import('./pages/Home')));
const Overview = lazy(() => retry(() => import('./pages/Overview')));
const Blogs = lazy(() => retry(() => import('./pages/Blogs')));
const ContactUs = lazy(() => retry(() => import('./pages/ContactUs')));
const Diversification = lazy(() =>
  retry(() => import('./pages/Diversification')),
);
const Feedback = lazy(() => retry(() => import('./pages/Feedback')));
const Ideas = lazy(() => retry(() => import('./pages/Ideas')));
const Logout = lazy(() => retry(() => import('./pages/Logout')));
const MonthlyHarvest = lazy(() =>
  retry(() => import('./pages/MonthlyHarvest')),
);
const MyFarm = lazy(() => retry(() => import('./pages/MyFarm')));
const Settings = lazy(() => retry(() => import('./pages/Settings')));
const Watchlist = lazy(() => retry(() => import('./pages/Watchlist')));

function App() {
  console.log(
    '%cMade with ❤ by Hit Patel',
    'color: black; background: grey; font-size: 15px; padding: 5px 15px; border-radius: 6px',
  );

  const pages = [
    {
      pageLink: '/',
      view: Home,
    },
    {
      pageLink: '/blogs',
      view: Blogs,
    },
    {
      pageLink: '/contact-us',
      view: ContactUs,
    },
    {
      pageLink: '/diversification',
      view: Diversification,
    },
    {
      pageLink: '/feedback',
      view: Feedback,
    },
    {
      pageLink: '/ideas',
      view: Ideas,
    },
    {
      pageLink: '/logout',
      view: Logout,
    },
    {
      pageLink: '/monthly-harvest',
      view: MonthlyHarvest,
    },
    {
      pageLink: '/my-farm',
      view: MyFarm,
    },
    {
      pageLink: '/overview',
      view: Overview,
    },
    {
      pageLink: '/settings',
      view: Settings,
    },
    {
      pageLink: '/watchlist',
      view: Watchlist,
    },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1EAEFF',
      },
      secondary: {
        main: '#BBBBBB',
      },
    },
    typography: {
      fontFamily: 'lexend',
    },
  });

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
