import { Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

//pages for each route
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import PokemonDisplay from "./pages/PokemonDisplay";
import NotFound from "./pages/NotFound";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="register" element={<Register />} />
                    <Route path="pokemon" element={<PokemonDisplay />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </ClerkProvider>
    );
}

export default App;
