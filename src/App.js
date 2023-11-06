import './App.css';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div id="root">
      <div className="App">
        <Header />
        <Weather />
      </div>
    </div>
    );
}

export default App;
