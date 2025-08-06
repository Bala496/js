

//john 
//roomclean  - 3 
//watercan fill-1
//trashout - 2

//promise  
// return new Promise((resolve,reject)=>)

//resolve => then
//reject => catch
function roomclean() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const clean =  true
            if(clean){
                resolve("room is cleaned")
            }else{
                reject("room is not cleaned")
            }
        }, 4000)


    })



}

function watercanfill() {

return new Promise((resolve,reject)=>{
    setTimeout(() => {
        const water =  true
        if(water){
            resolve("water is filled")
        }else{
            reject("water is not filled")
        }
    }, 500)
})
   

}

function trashout() {
  return new Promise((resolve,reject)=>{

    setTimeout(() => {
        const trash=  false
        if(trash){
            resolve("trash is kept outsid")
        }else{
            reject("trash is not kept outside")
        }
    }, 2000)


  })
    
}

roomclean().then(val => {console.log(val); return watercanfill()})
           .then(val => {console.log(val);return trashout()})
           .catch(err => console.log(err))