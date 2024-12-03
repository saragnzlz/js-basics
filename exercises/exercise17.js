// Create a blogPost Constructor function but:
// - the user has drafted a post but did not publish it yet

function Post (title, body, author) {
    return {
        title: title,
        body: body,
        author: author,
        views: 0,
        comments: [],
        isLive: false
    }
}

let post = Post('title', 'bodybodybody', 'you')

console.log(post)