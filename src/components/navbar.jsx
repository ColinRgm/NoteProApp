// import dependencies
import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <nav>
            <ul>
                <li>
                    <Link
                        to="/">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to="/first_year">
                        Première année
                    </Link>

                </li>
                <li>
                    <Link
                        to="/second_year">
                        Deuxième année
                    </Link>
                </li>
                <li>
                    <Link
                        to="/third_year">
                        Troisième année
                    </Link>

                </li>
                <li>
                    <Link
                        to="/fourth_year">
                        Quatrième année
                    </Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;