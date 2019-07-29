import React from "react";
import HomePage from "./components/homepage/HomePage";
import AnimeView from "./components/animeview/AnimeView";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollToTop from "./common/ScrollToTop";
import NavigationMobile from "./components/navigation/NavigationMobile";
import NavigationDesktop from "./components/navigation/NavigationDesktop";
import AnimeSearchPage from "./components/animesearch/AnimeSearchPage";
import MangaSearchPage from "./components/mangasearch/MangaSearchPage";
import Footer from "./components/footer/Footer";
import index from "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <div className="App page-content">
            <div className="d-none d-md-block">
              <NavigationDesktop />
            </div>
            <div className="d-md-none d-block">
              <NavigationMobile />
            </div>
            <div className="wrapper">
              <Route exact path="/" component={HomePage} />
              <Switch>
                <Route exact path="/anime/:id" component={AnimeView} />
                <Route exact path="/search-anime" component={AnimeSearchPage} />
                <Route exact path="/search-manga" component={MangaSearchPage} />
              </Switch>
            </div>
          </div>
          <Footer />
        </ScrollToTop>
      </Router>
    </Provider>
  );
}

export default App;
