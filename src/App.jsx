import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Dashboard from "./pages/dashboard.jsx";
import FirstYear from "./pages/first_year.jsx";
import SecondYear from "./pages/second_year.jsx";
import ThirdYear from "./pages/third_year.jsx";
import FourthYear from "./pages/fourth_year.jsx";
import Profile from "./pages/profile.jsx";
import Content from "./components/content.jsx";

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route
                        path="/"
                        element={ <Dashboard/> }/>
                    <Route
                        path="/first_year"
                        element={ <FirstYear/> }/>
                    <Route
                        path="/second_year"
                        element={ <SecondYear/> }/>
                    <Route
                        path="/third_year"
                        element={ <ThirdYear/> }/>
                    <Route
                        path="/fourth_year"
                        element={ <FourthYear/> }/>
                    <Route
                        path="/profile"
                        element={ <Profile/> }/>/
                </Routes>
            </Router>
        </>
    )
}

export default App
