// import dependencies
import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <nav>
            <ul>
                <li>
                    <Link
                        to="/"
                    >
                    </Link>
                    Dashboard
                </li>
                <li>
                    <Link
                        to="/first_year"
                    >
                    </Link>
                    Première année
                </li>
                <li>
                    <Link
                        to="/second_year">
                    </Link>
                    Deuxième année
                </li>
                <li>
                    <Link
                        to="/third_year">
                    </Link>
                    Troisième année
                </li>
                <li>
                    <Link
                        to="/fourth_year">
                    </Link>
                    Quatrième année
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;