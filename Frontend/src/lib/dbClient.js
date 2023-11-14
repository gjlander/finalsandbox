import axios from "axios";

// const backend = "http://localhost:7000"; //temp, will go back and configure properly for front and backend later
let backend;
backend = import.meta.env.DEV
    ? import.meta.env.VITE_BACKEND_DEV
    : import.meta.env.VITE_BACKEND_DEPLOY;

const getHeader = async () => {
    try {
        const { data } = await axios.get(`${backend}/display`);
        // console.log(allPokemons);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const editHeader = async (id, header) => {
    try {
        const { data } = await axios.put(`${backend}/display`, {
            id,
            header,
        });
        // console.log(allPokemons);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const getPokemons = async () => {
    try {
        const allPokemons = await axios.get(`${backend}/pokemon`);
        // console.log(allPokemons);
        return allPokemons.data;
    } catch (error) {
        console.error(error);
    }
};

const getSinglePokemon = async (pokeName) => {
    try {
        const pokeData = await axios.get(`${backend}/pokemon/${pokeName}`);
        // console.log(pokeData.data);
        return pokeData.data;
    } catch (error) {
        console.error(error);
    }
};

const getPokemonById = async (pokeId) => {
    try {
        const pokeData = await axios.get(`${backend}/pokemon/withid/${pokeId}`);
        // console.log(pokeData.data);
        return pokeData.data;
    } catch (error) {
        console.error(error);
    }
};

//auth paths
const authSignInUser = async (form) => {
    try {
        if (!form.username || !form.password)
            throw new Error(
                alert("Please enter a valid username and password!")
            );
        const { headers } = await axios.post(`${backend}/auth/login`, form);
        return headers;
    } catch (error) {
        console.error(error);
    }
};

const authMakeNewUser = async (form) => {
    try {
        const { headers } = await axios.post(`${backend}/auth/register`, form);
        return headers;
    } catch (error) {
        console.error(error);
    }
};

//original user paths
const signInUser = async (form) => {
    try {
        if (!form.username || !form.password)
            throw new Error(
                alert("Please enter a valid username and password!")
            );
        const userData = await axios.get(`${backend}/users/${form.username}`);
        console.log(userData.data);
        return userData.data;
    } catch (error) {
        console.error(error);
    }
};

const makeNewUser = (newUser) => {
    axios
        .post(`${backend}/users`, {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            username: newUser.username,
            password: newUser.password,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

const editBattles = (username, myCurrentHP) => {
    let wonBattle;
    wonBattle = myCurrentHP > 0 ? true : false;

    axios
        .patch(`${backend}/users`, {
            username,
            wonBattle,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

const getLeaderboard = async () => {
    try {
        const usersData = await axios.get(`${backend}/users`);
        // console.log(pokeData.data);
        return usersData.data;
    } catch (error) {
        console.error(error);
    }
};

export {
    getHeader,
    editHeader,
    getPokemons,
    getSinglePokemon,
    getPokemonById,
    signInUser,
    makeNewUser,
    editBattles,
    getLeaderboard,
    authSignInUser,
    authMakeNewUser,
};
