// 'https://jsonplaceholder.typicode.com/todos/1'
let userContent = document.querySelector('.users')
let postsContent = document.querySelector('.posts')



async function users(){
    let getUsers = await fetch('https://jsonplaceholder.typicode.com/users')
    let result = await getUsers.json()
        
    for(let i=0 ;i< result.length ;i++){
        // print in the page 
       
        let userName = document.createElement('h3')
        userName.textContent=result[i].name
        if(i == 0){
            userName.classList.add('active')
        }
        userName.setAttribute('data-id',result[i].id)
        userContent.appendChild(userName)
        }

        // click event on user
        let userNames = document.querySelectorAll("h3")
        userNames.forEach((e)=>{
            e.addEventListener('click',function(){
                for(let i =0 ; i< userNames.length ;i++){
                userNames[i].classList.remove('active')
                }
                postsContent.classList.toggle('scale')
                e.classList.add('active')
                // Empty the posts container
                postsContent.innerHTML = ""
                // Calling Function which getting the posts
                getPosts(e.getAttribute('data-id'))
            })
        })

    
//    await console.log('#'.repeat(100))
}
users()
// make a new fetch to get the the posts when we clicked on users

    async function getPosts(e){
        let  getPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
            let postsResult = await getPosts.json();
            for(let i=0; i < postsResult.length ; i++){
                if(postsResult[i].userId == e ){
                    let div = document.createElement('div')
                    let h4 = document.createElement('h4')
                    let p = document.createElement('p')
                    h4.textContent = postsResult[i].title
                    p.textContent = postsResult[i].body
                    div.appendChild(h4)
                    div.appendChild(p)
                    postsContent.appendChild(div)
                }
                }   
               }





// conection between users & posts is (userID in posts = id in users)