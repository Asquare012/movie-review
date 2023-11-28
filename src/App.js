import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./components/moviess/movies.scss";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Movies from "./components/moviess/Movies";
import Series from "./components/series/Series";

import Footer from "./components/footer/Footer";

// movies full pages
import MovieFullList from "./components/fullpage/MoviePage";
import SeriesFullList from "./components/fullpage/SeriesPage";

function App() {
  return (
    <div className="App">
      <Hero />
      <Navigation />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/series" element={<Series />} />

        {/* Full list of movies(pages) */}
        <Route path="/movielist" element={<MovieFullList />} />
        <Route path="/serieslist" element={<SeriesFullList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
