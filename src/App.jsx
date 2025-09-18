import { Outlet } from "react-router-dom"
import "./index.css"

function App() {
    return (
        <main>
            <div className="app-content">
                <Outlet />
            </div>
        </main>
    )
}

export default App