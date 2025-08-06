// function fetchData() {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching data...");

//         setTimeout(() => {
//             let success = false; // Change this to false to simulate an error
            
//             if (success) {
//                 resolve("Data fetched successfully!");
//             } else {
//                 reject("Error: Failed to fetch data.");
//             }
//         }, 2000);
//     });
// }

// // // Using the promise
// fetchData()
//     .then(response => {
//         console.log("Stage1");
        
//         console.log(response);
//     })
//     .catch(error => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("Process completed.");
//     });
``

// function a(){
//     return new Promise((resolve, reject) => {
//          console.log("fetching data");
//          setTimeout(() => {
//             let praveen = true;    //if there is an false 
//             if (praveen) {
//                 resolve("Data fetched successfully ");
                
//             } else {
//                 reject("It is an error");
                
//             }
//          }, 3000);
//     });
// }

// a()
// .then(response => {
//     console.log(response);
//     console.log("hiueih");
    
    
// })
// .catch((error)=> {
//     console.log(error);
//     console.log("hdheyhf");
// });

// async function name1(praveen) {
//     try {
//         const b = await a(praveen);
//         console.log(b);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// name1();

 
// async (praveen) => {
//     try {
//         const c = fetchdata(praveen);
//         console.log(c);
//         console.log("success");
        
        
//     } catch (error) {
//         console.log("failed");
        
//         console.log(error);
        
//     }
// }
// gh();







// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('First promise resolved after 1 second');
//     }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Second promise resolved after 2 seconds');
//     }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Third promise resolved after 3 seconds');
//     }, 3000);
// });

// // Use Promise.all to run the promises in parallel
// Promise.any([promise2, promise3])
//     .then((messages) => {
//         console.log(messages);
//         // messages.forEach((message, index) => {
//         //     console.log(`Promise ${index + 1}: ${message}`); 
//         // });
//     })
//     .catch((error) => {
//         console.error('One of the promises rejected:', error);
//     });

function a(){
    return new Promise((resolve, reject) => {
         console.log("fetching data");
         setTimeout(() => {
            let praveen = true;    //if there is an false 
            if (praveen) {
                resolve("Data fetched successfully ");
                
            } else {
                reject("It is an error");
                
            }
         }, 3000);
    });
}

const d = async () => {
    try {
        const c = await a();
        console.log(c);
        console.log("loading....");
        
    } catch (error) {
        console.log(error);
        
    }
}
d();