function operateFilms(commandSequence) {

    let movies = []

    let addMovieCommand = "addMovie "
    let directedByCommand = " directedBy "
    let onDateCommand = " onDate "

    commandSequence.forEach(command => {
        if (command.includes(addMovieCommand)) {
            movies.push({
                name: command.split(addMovieCommand)[1]
            })
        } else if (command.includes(directedByCommand)) {
            let tmp = command.split(directedByCommand)
            let movieIndex = getIndexAtMovies(movies, tmp[0])
            if (movieIndex!=-1) {
                movies[movieIndex].director = tmp[1]
            }
        } else if (command.includes(onDateCommand)) {
            let tmp = command.split(onDateCommand)
            let movieIndex = getIndexAtMovies(movies, tmp[0])
            if (movieIndex!=-1) {
                movies[movieIndex].date = tmp[1]
            }
        }
    });

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(movie)
        }
    })
}

// ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ
function getIndexAtMovies(list, name) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name == name) return i
    }
    return -1
}

operateFilms([ 
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);