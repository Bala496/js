function roomclean (){
       return new Promise ((resolve,reject) =>{
              setTimeout(() => {
                let room = true;
                if (room) {
                    resolve("Room is cleaned")
                } else {
                    reject("Room is not cleaned")
                }
              }, 5000);
       })
}

function watercan (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let water = true;
            if (water) {
                resolve("watercan is filled")
            } else {
                reject("it is empty")
            }
        },500)
    })

}

function movie (){
       return new Promise ((resolve,reject) =>{
                 setTimeout(() => {
                    let theatre = false;
                    if (theatre) {
                        resolve("got a movie ticket")
                    } else {
                        reject("didn't get a movie ticket")
                    }
                 }, 2000);
       })
}

async function result (){
        
    try{
        const result1 = await roomclean();
        console.log(result1);
  
        const result2 = await watercan();
        console.log(result2);
  
        const result3 = await movie ();
        console.log(result3);
    }catch(err){
        console.log(err);        
    }    
      
}
result();