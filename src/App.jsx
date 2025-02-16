import { useState } from "react";
import { robots } from "./robots.jsx";
import CardList from "./CardList.jsx";
import Searchbox from "./Searchbox.jsx";

const App = () => {
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value.toLowerCase());
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield)
  );

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <Searchbox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;

