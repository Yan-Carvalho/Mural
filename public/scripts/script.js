
document.addEventListener('DOMContentLoaded', ()=>{
updatePosts()
})

function updatePosts(){

    fetch("http://192.168.0.110:3000/api/all").then(res => {
        return res.json()
    }).then(json=>{
        let postElements = ''

        let posts = JSON.parse(json)
        posts.forEach((post)=>{
            let postElement = ` <div id=${post.id} class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">${post.title}</h3>
                                 </div>
                                    <div class="card-body">
                                        <div class="card-text">${post.description}</div>
                                    </div>
                                </div>`
            postElements += postElement
        })

        document.getElementById("posts").innerHTML = postElements
    })

}

function newPost(){

    let title = document.getElementById("title").value
    let description = document.getElementById("desc").value

//criar um objeto

    let post = {title, description}
//primeira coisa é  passar um método
//headers é um objeto
//body é  o post
    const options = {method: "POST",
                    headers: new Headers({'content-type': 'application/json'}),
                    body: JSON.stringify(post) 
    }

    fetch("http://192.168.0.110:3000/api/new", options).then(res=>{
        updatePosts()
        document.getElementById("title").value = ""
        document.getElementById("desc").value = ""
    })

}