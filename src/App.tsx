import "./App.css";
import DevFinder from "./components/DevFinder";
import { useState, useEffect } from "react";

function App() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={
                darkMode ? "gitHubUserSearcher" : "gitHubUserSearcher_DARK"
            }
        >
            <div className="App">
                <DevFinder
                    handleDarkMode={handleDarkMode}
                    darkMode={darkMode}
                />
            </div>
        </div>
    );
}

export default App;
