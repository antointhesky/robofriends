import { robots } from "./robots.jsx";
import CardList from "./CardList.jsx";
import Searchbox from "./Searchbox.jsx";

const App = () => {
  return (
    <div>
      <h1>RoboFriends</h1>
      <Searchbox />
      <CardList robots={robots} />;
    </div>
  );
};

export default App;
