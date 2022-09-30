const user = { name: "Abhi" ,
        lastActivity :new Date().getTime()
}
console.log(`Before creating post, user last activity time : ${user.lastActivity}`);
const post = [{title:'post1', body: 'This is post one' }]

 function createPost(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            post.push(data)  
            resolve(
                `post>> ${post}`             
            )
            reject('Error: Something went wrong');
        },2000)
    })
}
 function updateLastActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            user.lastActivity=new Date().getTime();
            console.log(`After creating post`);
            resolve(`User Last activity time: ${user.lastActivity}`);
        },1000)
    })
}
createPost({title: 'post2', body: 'This is post two'})  
Promise.all([createPost(), updateLastActivityTime()]).then(([a,b])=> {console.log(a);
console.log(b)
});