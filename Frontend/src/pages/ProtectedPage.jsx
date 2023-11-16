import { UserButton, useUser, useAuth } from "@clerk/clerk-react";
// import { useState } from "react";

export default function ProtectedPage() {
    // const { user } = useUser();
    const { userId } = useAuth();
    console.log(userId);
    // console.log(user);
    return (
        <>
            <h1>Protected page</h1>
            <UserButton />
        </>
    );
}
