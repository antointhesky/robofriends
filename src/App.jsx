import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import CardList from "./CardList.jsx";
import SearchBox from "./Searchbox.jsx";
import Scroll from "./Scroll.jsx";
import "./App.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState(""); 

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        setRobots(data); 
      } catch (error) {
        console.error("Error fetching robots:", error);
      }
    };

    fetchRobots();
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return robots.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;


