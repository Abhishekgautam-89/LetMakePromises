const posts =[
    {title: 'Post1' ,body: 'This is post one'},
    {title: 'Post2' ,body: 'This is post two'}
];

function getPosts(){
    
    setTimeout(()=>{        
        let output = '';
        posts.forEach((post) => {
            output+=`<li>${post.title} => ${post.body}</li>`;
        });
        document.body.innerHTML=output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
             
            const error = false;
            if(!error){ 
            
            resolve(posts.push(post));
            }
            else{ 
            reject('Error: Something went wrong');
            }
        },1000);    
    });    
}


function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{            
            if(posts.length>0){
                resolve(posts.pop());
            }
            else
            reject('Inside catch bolck array is empty now');
        }, 1500);
    })    
}
// deletePost().then(getPosts).catch(error=>console.log(error));

createPost({title: 'Post3', body: 'This is post three'})
.then(()=>{
    getPosts()
    deletePost().then(()=>{
        getPosts()
        deletePost().then(()=>{
            getPosts()
            deletePost().then(()=>{
                getPosts()
                deletePost().then()
                    .catch((error)=>{
                        console.log(error)
                    })                
            })
        })
    })
});
// createPost({title: 'Post3', body: 'This is post three'}).then(()=>{
//     createPost({title: 'Post4', body: 'This is post four'}).then(()=>{ 
//         getPosts()
//         deletePost()
//             .then(()=>{
//                 getPosts()
//                 deletePost().then(()=>{
//                     getPosts()
//                     deletePost().then(()=>{
//                         getPosts()
//                         deletePost().then(()=>{
//                             getPosts()
//                             deletePost().then()
//                             .catch((error)=>{
//                             console.log(error)
//                         })                
//                     })
//                  })
//             })
//         })
//     })
// })


const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>setTimeout(resolve,2000,'Good-Bye'));

Promise.all([promise1, promise2, promise3]).then(values=>console.log(values));

// function updateLastUserActivityTime(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const date=(new Date().getTime())
//         }, 1000)
//         document.getElementById('date').innerHTML=`Last visited at ${date}`
//     })
// }