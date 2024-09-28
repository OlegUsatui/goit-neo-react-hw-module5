import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Navigation from './components/Navigation/Navigation.jsx';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage.jsx'));
const MoviesPage = React.lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));
const MovieDetailsPage = React.lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage.jsx'));
const MovieReviews = React.lazy(() => import('./components/MovieReviews/MovieReviews.jsx'));
const MovieCast = React.lazy(() => import('./components/MovieCast/MovieCast.jsx'));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
