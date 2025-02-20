import Sidebar from "./components/sidebar.jsx";
import Content from "./components/content.jsx";

function App() {

    return (
        <>
            <div className="flex h-screen">
                {/* Left side */}
                <div className="w-[225px]">
                    <Sidebar />
                </div>

                {/* Right side */}
                <div className="flex-1">
                    <Content />
                </div>
            </div>
        </>
    )
}

export default App
