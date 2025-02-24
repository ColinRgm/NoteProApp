import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérification des identifiants en dur
        if (email === "admin@admin.ch" && password === "admin") {
            localStorage.setItem("token", "fake-jwt-token");
            navigate("/dashboard");
        } else {
            setError("Identifiants incorrects");
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto w-50 h-auto"
                     src="../../public/logo/jobtrek-black.svg"
                     alt="Jobtrek" />
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Connectez-vous à votre compte
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                            Adresse mail
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                id="email"
                                autoComplete="email"
                                required
                                className="block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#141e66] sm:text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                                Mot de passe
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-[#141e66] hover:text-[#141e66ba]">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                required
                                className="block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#141e66] sm:text-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-[#141e66] px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-[#141e66ba] focus-visible:outline-2 focus-visible:outline-[#141e66]">
                            Se connecter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
