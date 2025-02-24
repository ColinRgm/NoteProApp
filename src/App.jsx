import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import FirstYear from "./pages/first_year.jsx";
import SecondYear from "./pages/second_year.jsx";
import ThirdYear from "./pages/third_year.jsx";
import FourthYear from "./pages/fourth_year.jsx";
import Profile from "./pages/profile.jsx";
import Content from "./components/global/content.jsx";
import Login from "./pages/login.jsx";
import ProtectedRoute from "./components/global/protectedRoute.jsx";

function App() {

    return (
        <>
            <Router>
                <Content>
                    <Routes>
                        <Route path="/" element={ <Login/> }/>

                        <Route element={ <ProtectedRoute/> }>
                            <Route path="/dashboard" element={ <Dashboard/> }/>
                        </Route>

                        <Route element={ <ProtectedRoute/> }>
                            <Route
                                path="/first_year"
                                element={ <FirstYear/> }/>
                        </Route>

                        <Route element={ <ProtectedRoute/> }>
                            <Route
                                path="/second_year"
                                element={ <SecondYear/> }/>
                        </Route>

                        <Route element={ <ProtectedRoute/> }>
                            <Route
                                path="/third_year"
                                element={ <ThirdYear/> }/>
                        </Route>

                        <Route element={ <ProtectedRoute/> }> {/* Seulement si apprenti DEV */}
                            <Route
                                path="/fourth_year"
                                element={ <FourthYear/> }/>
                        </Route>

                        <Route element={ <ProtectedRoute/> }>
                            <Route
                                path="/profile"
                                element={ <Profile/> }/>
                        </Route>
                    </Routes>
                </Content>
            </Router>
        </>
    )
}

export default App
