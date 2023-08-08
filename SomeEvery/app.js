const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];
exams.some(m => m >= 75);

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

movies.some(m => m.year > 2015);