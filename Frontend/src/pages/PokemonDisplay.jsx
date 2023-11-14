import useSWR from "swr";
import DisplayCard from "../components/DisplayCard";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function PokemonDisplay() {
    const { data, error, isLoading } = useSWR(
        "http://localhost:7000/pokemon",
        fetcher
    );
    console.log(data);
    if (error) return <div className="min-h-screen"> failed to load</div>;
    if (isLoading) return <div className="min-h-screen">loading...</div>;
    return (
        <>
            <h3 className="text-4xl">Pokemon</h3>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-4">
                {/* <DisplayCard {...data[0]} /> */}
                {data.map((pokemon) => {
                    return <DisplayCard key={pokemon.id} {...pokemon} />;
                })}
            </div>
        </>
    );
}
