import './App.css';
import Menu from './menu.js'
import background from "./res/background.png"

function App() {
  return (
    <div className="App">
      <div id="round-corner"
        style = {{backgroundImage: `url(${background})`}}>
        <Menu />
      </div>
    </div>
  );
}

export default App;
