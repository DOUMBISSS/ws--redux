import React from 'react';
import {useDispatch} from 'react-redux';
import { deletProfil, selectProfil } from '../Redux/actions';


function Profil ({profil}) {
  const dispatch = useDispatch();

    // const deleteProfil = (id) =>{
    //   dispatch(deletProfil(id))
    // }
    const deleteProfil = (profilId) =>{
      dispatch(deletProfil(profilId))
    }
    const select = (id)=>{
      dispatch(selectProfil(id));
    }

    return (
        <div key={profil.id} className='profil--container'>
       <div className='profil'>
            <div className='profil--image'>
                <div className='profil--image--container'>
                    <img src={profil.img} alt="" />
                </div>
            </div>
            <div className='profil--name'>
            <h3>{profil.fullname}</h3>
            </div>
            <div className='profil--description'>
              <h3>{profil.job}</h3>
            </div>
            <div className='profil--matricule'>
              <h3>{profil.matricule}</h3>
            </div>
            <div className='profil--modify'>
             <div className='profil--modify--box'>
             <button className='modify' onClick={()=>select(profil.id)}>Modifier</button>
              <button className='delete' onClick={()=>deleteProfil(profil.id)}>Supprimer</button>
             </div>
            </div>
            {/* <div className='profil--modify'>
              <button className='modify' >Modifier</button>
              <button className='delete' onClick={deleteProfil}>Supprimer</button>
            </div> */}
            {/* <button className='modify' onClick={()=>select(task.id)}>Modifier</button> */}
        </div>
         
      </div>
    );
}

export default Profil;
