import {useSelector} from 'react-redux';
import './App.css';
import {useState } from "react";

import AddProfil from './Components/AddProfil';
import ListProfil from  './Components/ListProfil'

function App() {

  const profils = useSelector(state => state.profilReducer.profils);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <AddProfil search={search} setSearch={setSearch} />
      <ListProfil profils={profils} search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;

