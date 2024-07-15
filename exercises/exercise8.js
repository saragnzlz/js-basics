const movie = {
    title: 'a',
    length: 45,
    genre: 'psychological',
    releaseYear: 2024,
    director: 'Sara'
}

showProperties(movie);

function showProperties(obj){
    for(let key in obj){
        console.log(key,obj[key])
    }
}