import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function useUser(username) {
    const { data, error, isLoading } = useSWR(
        `${backend}/users/${username}`,
        fetcher
    );

    return {
        user: data,
        isLoading,
        isError: error,
    };
}

let backend;
backend = import.meta.env.DEV
    ? import.meta.env.VITE_BACKEND_DEV
    : import.meta.env.VITE_BACKEND_DEPLOY;

const getAllPokemon = async () => {
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

export {
    useUser,
    getAllPokemon,
    getSinglePokemon,
    getPokemonById,
    signInUser,
    makeNewUser,
};
