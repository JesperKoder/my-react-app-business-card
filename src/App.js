import './App.css';
import Top from "./components/top"
import Mid from "./components/mid";
import Bot from "./components/bot";


function App() {
  return (
    <div className="App">
      <div className="Container">
        <Top />
        <Mid />
        <Bot />
      </div>
    </div>
  );
}

export default App;
