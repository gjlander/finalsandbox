import { Button } from "@nextui-org/react";

const btnColor = (type) => {
    if (type === "Normal") {
        return "bg-slate-500";
    }
    if (type === "Fire") {
        return "bg-orange-500";
    }
    if (type === "Fighting") {
        return "bg-red-700";
    }
    if (type === "Water") {
        return "bg-blue-500";
    }
    if (type === "Flying") {
        return "bg-violet-400";
    }
    if (type === "Grass") {
        return "bg-lime-500";
    }
    if (type === "Poison") {
        return "bg-fuchsia-700";
    }
    if (type === "Electric") {
        return "bg-yellow-400";
    }
    if (type === "Ground") {
        return "bg-amber-700";
    }
    if (type === "Psychic") {
        return "bg-pink-600";
    }
    if (type === "Rock") {
        return "bg-yellow-900";
    }
    if (type === "Ice") {
        return "bg-cyan-200";
    }
    if (type === "Bug") {
        return "bg-lime-700";
    }
    if (type === "Dragon") {
        return "bg-violet-800";
    }
    if (type === "Ghost") {
        return "bg-violet-950";
    }
    if (type === "Dark") {
        return "bg-amber-900";
    }
    if (type === "Steel") {
        return "bg-stone-400";
    }
    if (type === "Fairy") {
        return "bg-pink-400";
    } else {
        return "bg-slate-700";
    }
};

export default function AttackBtn({ type }) {
    return <Button className={btnColor(type)}>{type}</Button>;
}
