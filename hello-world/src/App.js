import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <Greet name="Adam">
        <p>This is a children prop</p>
      </Greet>
      <Welcome name="luke"/>
    </div>
  );
}

export default App;
