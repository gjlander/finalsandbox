import { Routes, Route, useNavigate } from "react-router-dom";

//pages for each route
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import MySignIn from "./pages/MySignIn";
import Register from "./pages/Register";
import PokemonDisplay from "./pages/PokemonDisplay";
import NotFound from "./pages/NotFound";

//clerk pages
import PublicPage from "./pages/PublicPage";
import ProtectedPage from "./pages/ProtectedPage";

import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp,
} from "@clerk/clerk-react";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
    const navigate = useNavigate();
    return (
        <ClerkProvider
            navigate={(to) => navigate(to)}
            publishableKey={clerkPubKey}
        >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="signin" element={<MySignIn />} />
                    <Route path="register" element={<Register />} />
                    <Route path="pokemon" element={<PokemonDisplay />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/clerk/">
                    <Route index element={<PublicPage />} />
                    <Route
                        path="/clerk/sign-in/*"
                        element={
                            <SignIn routing="path" path="/clerk/sign-in" />
                        }
                    />
                    <Route
                        path="/clerk/sign-up/*"
                        element={
                            <SignUp routing="path" path="/clerk/sign-up" />
                        }
                    />
                    <Route
                        path="/clerk/protected"
                        element={
                            <>
                                <SignedIn>
                                    <ProtectedPage />
                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn />
                                </SignedOut>
                            </>
                        }
                    />
                </Route>
            </Routes>
        </ClerkProvider>
    );
}

export default App;
