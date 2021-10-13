import PetList from './pets/PetList';
import './App.css';

function App() {
  return (
    <div className="directory">
      <h1 className="directory-header">
        The Pet Directory
      </h1>
      <p className="directory-description">
        • An unofficial professional bio directory for the pets of Women Who Code, RVA Chapter •
      </p>
      <PetList />
    </div>
  );
}

export default App;
