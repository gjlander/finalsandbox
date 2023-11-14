import { Routes, Route } from "react-router-dom";

//pages for each route
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import PokemonDisplay from "./pages/PokemonDisplay";
import NotFound from "./pages/NotFound";
import FirebaseSignIn from "./pages/FirebaseSignIn";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="firebasesignin" element={<FirebaseSignIn />} />
                    <Route path="register" element={<Register />} />
                    <Route path="pokemon" element={<PokemonDisplay />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
