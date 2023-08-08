const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const nums = numbers.filter(num => num % 2 === 0);

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
const goodMovies = movies.filter(m => m.score > 90);
const goodTitles = goodMovies.map(m => m.title);

movies.filter(m => m.score > 90).map(m => m.title);
