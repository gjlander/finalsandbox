import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import { /*authMakeNewUser,*/ makeNewUser, signInUser } from "../lib/dbClient";
import { useAppContext } from "../context/AppContext";

const Register = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        profilePic: "",
    });
    const [registered, setRegistered] = useState(false);
    const { /*setToken*/ setUser } = useAppContext();

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // const handleAuthRegistration = (e) => {
    //     e.preventDefault();
    //     authMakeNewUser(form)
    //         .then((headers) => {
    //             localStorage.setItem("token", headers.authorization);
    //             setToken(headers.authorization);
    //             setTimeout(() => navigate("/"), 1000);
    //         })
    //         .catch((error) => console.error(error));
    // };

    const handleHomeClick = () => {
        //imported now :)
        signInUser(form)
            .then((userData) => {
                if (!userData)
                    return alert("Sorry, an error occurred while logging in");
                userData ? setUser(userData) : setUser(false);
            })
            .catch((error) => console.error(error));
        navigate("/");
    };

    //email and  password validation
    const validateEmail = (value) =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (form.email === "") return false;

        return validateEmail(form.email) ? false : true;
    }, [form.email]);
    // console.log(form)
    //end validation section

    return (
        <div className="mt-[-1px] w-full min-h-screen flex items-center justify-center p-4">
            {registered ? (
                <div className=" flex flex-col gap-6 justify-center items-center">
                    <h3 className="text-4xl">You successfully registered!</h3>
                    <Button className="w-1/2" onClick={handleHomeClick}>
                        Return to Home
                    </Button>
                </div>
            ) : (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        // console.log(form);
                        makeNewUser(form);
                        setRegistered(true);
                    }}
                    // onSubmit={handleAuthRegistration}
                    autoComplete="off"
                    className="flex flex-col items-center justify-between bg-base-300 pt-4 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 2xl:w-1/3 transition-all"
                >
                    <h1 className="mt-2 mb-8 lg:mb-16 text-2xl font-semibold text-white">
                        Register
                    </h1>
                    <div className="flex flex-col items-center justify-around h-1/2 w-full text-white">
                        <Input
                            isRequired
                            type="text"
                            label="First Name"
                            labelPlacement="outside"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            className="w-full md:w-3/5 mb-1 sm:mb-2 lg:mb-4 p-2"
                        />
                        <Input
                            isRequired
                            type="text"
                            label="Last Name"
                            labelPlacement="outside"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            className="w-full md:w-3/5 mb-1 sm:mb-2 lg:mb-4 p-2 "
                        />
                        <Input
                            isRequired
                            type="text"
                            label="E-mail"
                            labelPlacement="outside"
                            name="email"
                            isInvalid={!form.email ? true : isInvalid}
                            color={isInvalid ? "danger" : "success"}
                            errorMessage={
                                isInvalid && "Please enter a valid email"
                            }
                            value={form.email}
                            onChange={handleChange}
                            className="w-full md:w-3/5 mb-1 sm:mb-2 lg:mb-4 p-2"
                        />
                        <Input
                            isRequired
                            type="text"
                            label="Username"
                            labelPlacement="outside"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            className="w-full md:w-3/5 mb-1 sm:mb-2 lg:mb-4 p-2 "
                        />
                        <Input
                            isRequired
                            type="password"
                            label="Password"
                            labelPlacement="outside"
                            description="Password is not secure, do not use a password used on other sites."
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full md:w-3/5 mb-1 sm:mb-2 lg:mb-4 p-2"
                        />
                    </div>
                    <br />
                    <div className="flex w-full">
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/signin");
                            }}
                            className="w-1/2 bg-accent hover:bg-info-content hover:border-info-content rounded-none text-black dark:text-white font-normal text-lg p-4 transition-none uppercase"
                        >
                            Sign In
                        </Button>
                        <Button
                            type="submit"
                            className="w-1/2 bg-success hover:bg-success-content hover:border-success-content rounded-none text-white font-normal text-lg py-4 transition-none uppercase"
                        >
                            Register
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Register;
