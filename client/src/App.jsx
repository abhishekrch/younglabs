import { useState } from "react";
import axios from "axios";

function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const fetchGreeting = async () => {
        if (!name.trim()) {
            setMessage("Name is required.");
            return;
        }
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/greet?name=${name}`);
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error fetching greeting.");
        }
    };

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "100vh", 
            backgroundColor: "#f4f4f4", 
            fontFamily: "Arial, sans-serif" 
        }}>
            <h1 style={{ color: "#333" }}>Greeting App Younglabs</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
            />
            <button 
                onClick={fetchGreeting} 
                style={{ 
                    padding: "10px 20px", 
                    border: "none", 
                    borderRadius: "5px", 
                    backgroundColor: "#007bff", 
                    color: "white", 
                    cursor: "pointer" 
                }}
            >
                Get Greeting
            </button>
            <p style={{ marginTop: "20px", color: "#555" }}>{message}</p>
        </div>
    );
}

export default App;
