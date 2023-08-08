const add = function (x, y) {
    return x + y;
}

const add1 = (x, y) => {
    return x + y;
}

const square = num => {
    return num * num;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1; 
}

const rollDie1 = () => (
     Math.floor(Math.random() * 6) + 1
)

const add2 = (a, b) => a + b;

const movies = [
    {
        title: 'Stand by Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]
movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
})


const movieTitle = movies.map(function (movie) {
    return `${movie.title} - ${movie.score/10}`;
})

const movieTitle2 = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`)
)

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function(){
        return `${this.firstName}, ${this.lastName}`;
    },
    shoutName: function () {
        setTimeout(() =>{
            console.log(this.fullName());
    }),3000 }

}