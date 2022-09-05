import Profil from "./Profil";


function AddProfil ({profils,search}){
      return (
    <div>
    {profils.filter(profil => {
    if (search === ""){
      return profil;
    }
    else if (profil.fullname.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
      return profil;
    }
    return 0;
  }).map((profil) => <Profil key={profil.id} profil ={profil} />)}
            {/* {profils.map((profil) =>  <Profil key={profil.id} profil ={profil} />)} */}
        </div>
               
            );
}


export default AddProfil;