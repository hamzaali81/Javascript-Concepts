// Error Handling

// Error
// throw new Error()
// throw 'string'
// throw 

// const myErro = new Error('what??');
// myError.stack

// function a() {
//     const b = new Error('what??');
//     return b
// };

// a().stack
// new SyntaxError (Unexpected token)

// function fail() {
//     try {
//         console.log('this works');
//     }
//     catch (err) {
//     console.log(err.message);
//     console.log(err.stack);
//     } finally {
//         console.log('still good');
//         return 'fail'
//     }
// };

// fail()

// try {
//     setTimeout(() => {
//         fakevar;
//     }, 1000);
// }  catch (err) {
//     console.log('got it',);
// }

// Big Problem
// Promise.resolve('asyncfail')
// .then((response)=> {
//     throw new Error('#1 fail');
//     return response
// })
// .then((response)=> {
//     console.log(response);
// })

// Promise.resolve('asyncfail')
// .then((response)=> {
//     Promise.resolve().then(()=> {
//         throw new Error('#1 fail');

//     }).catch(console.log)
//     return 5
// })
// .then((response)=> {
//     console.log(response);
// }).catch(err=>{
//   console.log('final error',err)
// })


// (async function(){
//     try {
//     await Promise('oopsie')
//     } catch(err) {
//     console.log(err);
//     }
//     console.log('is this still good');
// })()

// class authenticationError extends Error {
//     constructor(message){
//         super(message)
//         this.name = 'authenticationError';
//         this.favouriteSnack = 'grapes'
//     }
// };

// const a = new authenticationError('oopsie');
// a.favouriteSnack
// console.log(a.favouriteSnack);

