

function SearchProfil ({setSearch}){
   
    const handleSearch = (event) => {
        setSearch(event.target.value);
      }

      return (
        <div>
            <input type="text" placeholder='Recherche'  onChange={handleSearch}/>
        </div>
  
               
            );
} 


export default SearchProfil;