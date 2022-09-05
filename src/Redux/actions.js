export function addProfil(profil){
    return {
        type :"ADD-PROFIL",
        payload: profil
    }
            
}

export function deletProfil (profilId){
    return {
        type : "DELETE-PROFIL",
        payload : profilId
    }
}
export function selectProfil(id){
    return {
        type : "SELECT-PROFIL",
        payload : id
    }
}

export function setProfil(obj) {
    return {
        type : "SET-PROFIL",
        payload : obj
    }
}



// export function addTask(task) {
//     return {
//         type : "ADD-TODO",
//         payload : task
//     }
// }

// export function setTask(obj) {
//     return {
//         type : "SET-TASK",
//         payload : obj
//     }
// }



// export function deleteTask (taskId){
//     return {
//         type :"DELETE-TASK",
//         payload : taskId
//     }
// }