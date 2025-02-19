// import dependencies
import { Link } from 'react-router-dom';

import '../style/style.css'

function Navbar() {

    return (

        <nav className="w-[225px] h-screen bg-gray-800 text-white fixed top-0 left-0">
            <div className="flex flex-col justify-between h-full">
                <div>
                    {/* Liens en haut */ }
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="block py-5 px-8 hover:bg-gray-700 text-center text-m font-semibold"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/first_year"
                                className="block py-5 px-8 hover:bg-gray-700 text-center text-m font-semibold"
                            >
                                1<sup>ère</sup> année
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/second_year"
                                className="block py-5 px-8 hover:bg-gray-700 text-center text-m font-semibold"
                            >
                                2<sup>ème</sup> année
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/third_year"
                                className="block py-5 px-8 hover:bg-gray-700 text-center text-m font-semibold"
                            >
                                3<sup>ème</sup> année
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/fourth_year"
                                className="block py-5 px-8 hover:bg-gray-700 text-center text-m font-semibold"
                            >
                                4<sup>ème</sup> année
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Bouton Profil en bas */ }
                <div>
                    <ul>
                        <li>
                            <Link
                                to="/profil"
                                className="block py-5 px-8 hover:bg-gray-700 text-center text-m font-semibold"
                            >
                                Profil
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;