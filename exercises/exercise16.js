// Create a Blog post Object with properties:
// - title 
// - body 
// - author 
// - views 
// - comment (author,body)
// - isLive

const blogPost = {
    title: '',
    body: '',
    author: '',
    views: 0,
    comments:[
        {
            author: '',
            body: ''
        },
    ],
    isLive: false
}

console.log(blogPost)