import Sidebar from "./components/sidebar.jsx";
import Main_content from "./components/main_content.jsx";

function App() {

    return (
        <>
            <div className="flex flex-row">

                <Sidebar/>

                <Main_content/>

            </div>
        </>
    )
}

export default App
