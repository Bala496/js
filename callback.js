

// //callback 
// function name(a) {
//     console.log("hari")
//      a()
// }

// function greets() {
//     console.log("hello")
// }

// name(greets)


function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           let hotel = true;
           if (hotel) {
            resolve("i am in hotel")
           } else {
            reject("I am not in hotel")
           }
            
        },6000)
    })
}


function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
       let movie = true ;
       if (movie) {
         resolve("i watched a movie")
       } else {
        reject("i didn't watch a movie")
       }

    },2000)
  })
   
   
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let park = false;
            if (park) {
                resolve("i am playing")
            } else {
                reject("am not play")
            }
        },500)
    })     
}

async function result() {
    try{
       const retsult1 = await task1();
       console.log(retsult1);
       const retsult2 = await task2();
       console.log(retsult2);
       const retsult3 = await task3();
       console.log(retsult3);
       
    }catch(err){
        console.log(err);
        
    }
}
result()

// function task4() {
//     setTimeout(()=>{
//         console.log("Task 4 completed")
//     },500)
    
// }

// callback hell
// task1(()=>{

//     task2(()=>{
//         task3(task4)
//     })
// })


// task1(()=>{
//     task2(()=>{
//         task3(task4)
//     })
// })

