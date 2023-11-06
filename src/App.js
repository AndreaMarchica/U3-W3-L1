import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouriteList from "./components/FavouriteList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route
          path="/favourites"
          element={<FavouriteList></FavouriteList>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
