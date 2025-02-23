import { Link } from "react-router-dom";

import '../../style/style.css'

function Content({ children }) {
    return (
        <div className="flex">

            {/* Sidebar */ }
            <nav className="h-screen w-[225px] bg-[#141e66] text-white fixed top-0 left-0 flex flex-col">

                {/* Logo */ }
                <div className="flex items-center justify-center p-4">
                    <a href="/dashboard">
                        <img src="/logo/jobtrek-white.svg" alt="Jobtrek"/>
                    </a>
                </div>

                {/* Navigation */ }
                <div className="flex flex-col h-full justify-between">


                    <div className="flex-1 overflow-auto">
                        <ul>
                            <li>
                                <Link
                                    to="/dashboard"
                                    className="block py-5 px-8 hover:bg-[#8fc62e] text-center text-m font-semibold hover:text-[#141e66]"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/first_year"
                                    className="block py-5 px-8 hover:bg-[#8fc62e] text-center text-m font-semibold hover:text-[#141e66]"
                                >
                                    1<sup>ère</sup> année
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/second_year"
                                    className="block py-5 px-8 hover:bg-[#8fc62e] text-center text-m font-semibold hover:text-[#141e66]"
                                >
                                    2<sup>ème</sup> année
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/third_year"
                                    className="block py-5 px-8 hover:bg-[#8fc62e] text-center text-m font-semibold hover:text-[#141e66]"
                                >
                                    3<sup>ème</sup> année
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/fourth_year"
                                    className="block py-5 px-8 hover:bg-[#8fc62e] text-center text-m font-semibold hover:text-[#141e66]"
                                >
                                    4<sup>ème</sup> année
                                </Link>
                            </li>
                        </ul>
                    </div>

                    
                    <div>
                        <ul>
                            <li>
                                <Link
                                    to="/profile"
                                    className="block py-5 px-8 hover:bg-[#8fc62e] text-center text-m font-semibold hover:text-[#141e66]"
                                >
                                    Profil {/* Récupérer le nom de la personne connectée */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Contenu principal */ }
            <main className="flex-1 ml-[225px] flex items-center justify-center h-screen bg-white">
                { children }
            </main>
        </div>
    );
}

export default Content;