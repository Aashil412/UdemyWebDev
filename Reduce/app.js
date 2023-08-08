const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
const total = prices.reduce((total, price) => total + price);

const min = prices.reduce((min, price) => {
    if (min > price) {
        return price;
    }
    return min;
})

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

const highestRated = moveies.reduce((max, curr) => {
    if (curr.score > max.score) {
        return curr;
    }
    return max;
})

const evens = [2, 4, 6, 8];

const sum = evens.reduce((start, curr) => start + curr, 100);