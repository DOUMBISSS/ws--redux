import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uid } from 'uid';
import { addProfil, setProfil } from "../Redux/actions";
import SearchProfil from "./SearchProfil";


function AddProfil ({setSearch}){

  const [fullname, setFullName] = useState("");
  const [job, setJob] = useState("");
  const [matricule, setMatricule] = useState("");

  const dispatch= useDispatch();

  const handleFullName = (event) =>{
    setFullName(event.target.value)
  }
  const handleJob = (event) =>{
    setJob(event.target.value)
  }
  const handleMatricule =(event) => {
      setMatricule (event.target.value)
  }

  const handleAdd = ()=>{
    dispatch(addProfil({
      id : uid(),
      fullname,
      job,
      matricule,
      // img
    }))
    setFullName("");
    setJob("");
    setMatricule("")
  }

    
  const [modify , setModify] = useState(false);
  const selectedProfil = useSelector(state => state.profilReducer.selectedProfil);

  useEffect(()=>{
    setJob(selectedProfil.job);
    setFullName(selectedProfil.fullname);
    setMatricule(selectedProfil.matricule);
    setModify(true);
  }, [selectedProfil])

    const handleUpdate = (id) =>{
         dispatch(setProfil({
            id,
            fullname,
            job,
            matricule,
            // img
          }));
        setJob("");
        setFullName("");
        setMatricule("");
        setModify(false);
      }

      return (
        <div>
          <header>
            <h1>LIST OF CLASSROOM</h1>
           <SearchProfil setSearch={setSearch}/>
          </header>
              <div className="profil--list">
               <input type="text" placeholder="Fullname" onChange={handleFullName} value={fullname}/>
                <input type="text" placeholder="Job" onChange={handleJob} value={job}/>
                <input type="text" placeholder="Matricule" onChange={handleMatricule} value ={matricule} />
                <input type="file" />
               {modify ? <button className="btn--add" onClick={()=>handleUpdate(selectedProfil.id)}>Modifier</button> : <button className="btn--add" onClick={handleAdd}>Ajouter</button>} 
               {/* <button className="btn--add" onClick={handleAdd}>Ajouter</button> */}
                {/* <button className="btn--add" onClick={handleValidate}>Valider</button> */}
            </div>
        </div>
              
            );
}


export default AddProfil;