import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Adrian Käsper
        </p>
        <p>
          Huvid:
        </p>
        <ul>
          <li>Arvutid</li>
          <li>Arvutimängud</li>
          <li>Programmeerimine</li>
          <li>Filmid</li>
          <li>UFC</li>
          <li>Kokkamine</li>
          <li>Robootika</li>
          <li>Placeholder Huvi</li>
          <li>Placeholder Huvi</li>
          <li>Placeholder Huvi</li>
          <li>Placeholder Huvi</li>
          <li>Placeholder Huvi</li>
        </ul>
        <form>
          <label for="text-input">Saatja:</label>
          <input type="text" id="text-input1" name="text-input" />
          <br></br>

          <label for="text-input">Saaja:</label>
          <input type="text" id="text-input2" name="text-input" />
          <br></br>

          <label for="text-input">Sõnum:</label>
          <textarea id="text-input" name="text-input" rows="10" cols="50"></textarea>
          <br></br>

          <input type="submit" value="Saada" />
        </form>
      </header>
    </div>
  );
}

export default App;
