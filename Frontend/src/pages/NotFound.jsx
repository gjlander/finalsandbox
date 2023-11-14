import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <main className="flex flex-col items-center h-screen px-6">
            <h1 className="text-7xl font-black mb-10">404</h1>
            <p className="text-xl text-center">
                You`ve strayed too far into the tall grass!
            </p>
            <Button
                onPress={() => navigate(-1)}
                color="secondary"
                className="mt-10"
            >
                Go back
            </Button>
        </main>
    );
}
