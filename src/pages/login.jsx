import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });

            if (!response.ok) {
                throw new Error("Identifiants incorrects");
            }

            const data = await response.json();
            localStorage.setItem("token", data.token); // Stockage du token
            navigate("/dashboard"); // Redirection vers dashboard si la connexion a réussi !
        } catch (err) {
            setError(err.message);
        }
    };


    return (

        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto w-50 h-auto"
                         src="../../public/logo/jobtrek-black.svg"
                         alt="Jobtrek"/>
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Connectez-vous à votre compte
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label type="email"
                                   className="block text-sm/6 font-medium text-gray-900">
                                Adresse mail
                            </label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#141e66] sm:text-sm/6"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                       className="block text-sm/6 font-medium text-gray-900">Mot de passe</label>
                                <div className="text-sm">
                                    <a href="#"
                                       className="font-semibold text-[#141e66] hover:text-[#141e66ba]">
                                        Mot de passe oublié ?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full  bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#141e66] sm:text-sm/6"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#141e66] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#141e66ba] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141e66]"
                                    onSubmit={(e) => e.preventDefault()}
                            >
                                Se connecter
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>

    )

}

export default Login;