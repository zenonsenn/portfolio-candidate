import React, { useState, useEffect } from "react";

export default function Home() {
    const [backendData, setBackendData] = useState("");
    const backendUrl = process.env.BACKEND_URL;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(backendUrl); // Change to your backend URL
                const data = await response.json();
                setBackendData(data.message);
            } catch (error) {
                console.error("Error fetching data from backend:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>hello website!</h1>
            <p>test paragraph</p>
            <p>and a message from our backend: "{backendData}"</p>
        </div>
    );
}
