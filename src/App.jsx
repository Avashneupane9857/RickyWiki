import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
function App() {
  return (
    <Router>
      <div className="APP">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}
const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  let { info, results } = fetchedData;
  console.log(info);
  let api = `https://rickandmortyapi.com/api/character/?page= ${pageNumber}&name=${search}&status=${status}&gender=${gender}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());

      updateFetchedData(data);
      // console.log(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="row">
        <Filters
          setGender={setGender}
          setStatus={setStatus}
          setPageNumber={setPageNumber}
        />

        <div className="col-8">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
      <div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};

export default App;
