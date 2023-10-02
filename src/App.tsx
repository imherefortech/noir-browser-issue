import { generateProofNoir } from './generate-proof';
import './App.css';

function App() {
  async function onClick() {
    const proof = await generateProofNoir();
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>Generate Noir Proof</button>
      </header>
    </div>
  );
}

export default App;
