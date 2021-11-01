import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Movies from './Components/Pages/Movies/Movies';
import NotFound from './Components/NotFound/NotFound';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import FavMovies from './Components/FavMovies/FavMovies';
import { LanguageProvider } from './context/LangContext';


function App() {
  const [lang, setLang] = useState("en"); 
  return (
    <div
    dir={lang === "ar" ? "rtl" : "ltr"}
    className={lang === "ar" ? "text-right" : "text-left"}
  >
  <LanguageProvider value={{ lang, setLang }}>
   <Router>
     <Navbar/>
     <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/details/:id" exact component={MovieDetails} />
        <Route path="/favmovies" exact component={FavMovies} />
        <Route path="*" exact component={NotFound} />
     </Switch>
   </Router>
   </LanguageProvider>
   </div>
  )
}

export default App;
