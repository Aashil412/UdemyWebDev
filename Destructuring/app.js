const scores = [2532354, 3342, 2424, 243, 100, 42, 41, 23];

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyone] = scores;

const user = {
    email: 'hi@gmail.com',
    password: 'dsfsdfg',
    firstName: 'asd',
    lastName: 'dfsdf'
}

const { email, firstName, lastName } = user;

const { born: birthYear } = user;

function fullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function fullName1(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}

function fullName2({ firstName, lastName}) {
    return `${firstName} ${lastName}`;
}

const movies = [
    {
        title: 'Stand by Me',
        score: 85,
        year: 1984
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2013

    },
    {
        title: 'Alien',
        score: 90,
        year: 1986

    }
]
movies.filter(movie => movie.score >= 90)
movies.filter(({ score }) => score >= 90) 

movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`;
})

movies.map(({title, year, score}) => {
    return `${title} (${year}) is rated ${score}`;
})