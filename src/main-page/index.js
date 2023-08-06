import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main-page.css";
import Header from "./header";
import FeatureHouse from "./featured-house";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/houses.json");
      const houses = await response.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  // useMemo stores the value of a variable in Memory/Cache
  let featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing Houses All Over The World." />

        <Switch>
          <Route path="/">
            <FeatureHouse house={featuredHouse}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
