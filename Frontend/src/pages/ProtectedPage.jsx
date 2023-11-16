import { UserButton } from "@clerk/clerk-react";

export default function ProtectedPage() {
    return (
        <>
            <h1>Protected page</h1>
            <UserButton />
        </>
    );
}
