import { SignInButton } from "@clerk/clerk-react";
import { Button } from "@nextui-org/react";

export default function PublicPage() {
    return (
        <>
            <h1>Public page</h1>
            <SignInButton>
                <Button>Sign In with Clark</Button>
            </SignInButton>
            <a href="/clerk/protected">Go to protected page</a>
        </>
    );
}
