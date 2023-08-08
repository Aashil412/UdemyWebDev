const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs, 'Speedy'];

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Canine' };

const catDog = { ...feline, ...canine };

const dataFromForm = {
    email: 'blueman@gmail.com', 
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };