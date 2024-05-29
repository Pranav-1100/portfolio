import './App.css';
import NavBar from './NavBar.js';
import TypeWriter from './TypeWriter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        
        <h1>Pranav Aggarwal</h1>
        
        <TypeWriter
          text={[
            "Hello, My name is Pranav",
            "I m a software developer",
            "I am learning React"
          ]}
          typingSpeed={100}
          deletingSpeed={50}
          duration={1000}
        />
      </header>
    </div>
  );
}

export default App;
