import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    Spinner,
} from "@nextui-org/react";
import { SearchIcon } from "../assets/SearchIcon";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { editHeader } from "../lib/dbClient";
import { useUser } from "../lib/swr";

export default function Nav() {
    // const { /*isAuth, setToken, setIsAuth,*/ setUser, user } = useAppContext();
    const { globalUsername } = useAppContext();
    const { user, isLoading } = useUser(globalUsername);
    const [localValue, setLocalValue] = useState("");
    const id = "654e77b79b55c78e142a345d";

    const navigate = useNavigate();

    const handleSearchSubmit = () => {
        // e.preventDefault();
        editHeader(id, localValue);
        setLocalValue("");
    };

    const handleSignIn = () => {
        navigate("/signin");
    };

    const handleSignOut = () => {
        navigate("/");
        // setToken(null);
        // setIsAuth(false);
        // setUser(null);
        // localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("chosenPokemon");
    };
    if (isLoading) return <Spinner />;
    return (
        <Navbar isBordered>
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4">
                    <p className="hidden sm:block font-bold text-inherit">
                        PokeFight
                    </p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-3">
                    <NavbarItem>
                        <Link color="foreground" href="/">
                            Home
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link
                            href="/pokemon"
                            aria-current="page"
                            color="foreground"
                        >
                            Pokemon
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/leaderboard">
                            Leaderboard
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
                <form onSubmit={handleSearchSubmit}>
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[10rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper:
                                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        startContent={<SearchIcon size={18} />}
                        type="search"
                        value={localValue}
                        onValueChange={setLocalValue}
                    />
                </form>
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="pokefight"
                            size="sm"
                            src="https://fontmeme.com/permalink/231107/b36df41834b00ed3ae7baba47847a7a6.png"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        {
                            /*isAuth*/ user && (
                                <DropdownItem
                                    key="profile"
                                    className="h-14 gap-2"
                                >
                                    <p className="font-semibold">
                                        Signed in as
                                    </p>
                                    <p className="font-semibold">
                                        {user.username}
                                    </p>
                                </DropdownItem>
                            )
                        }
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">
                            Team Settings
                        </DropdownItem>
                        {
                            /*!isAuth*/ !user && (
                                <DropdownItem
                                    onClick={() => navigate("/register")}
                                    key="register"
                                >
                                    Register
                                </DropdownItem>
                            )
                        }
                        {!user ? (
                            <DropdownItem
                                onClick={handleSignIn}
                                key="signin"
                                color="success"
                            >
                                Sign In
                            </DropdownItem>
                        ) : (
                            <DropdownItem
                                onClick={handleSignOut}
                                key="signout"
                                color="danger"
                            >
                                Sign Out
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}
