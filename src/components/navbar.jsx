// import dependencies
import { Link } from 'react-router-dom';

import '../style/style.css'

function Navbar() {

    return (

        <nav className="container-fluid h-screen w-[225px] bg-[#141e66] text-white fixed top-0 left-0">
            <div className="flex flex-col justify-between h-full">
                <div>

                    {/* Top links */ }
                    <ul>
                        <li>
                            <Link
                                to="/"
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

                {/* Bottom links */}
                <div>
                    <ul>
                        <li>
                            <Link
                                to="/profil"
                                className="block py-5 px-8 hover:bg-[#8fc62e] text-center text-m font-semibold hover:text-[#141e66]"
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