import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosTest() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1") // Sample API
            .then(response => {
                console.log("API Response:", response.data); // ✅ Check if API data appears
                setData(response.data);
            })
            .catch(error => {
                console.error("API Error:", error);
            });
    }, []);

    return (
        <div>
            <h2>Axios API Test</h2>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
        </div>
    );
}

export default AxiosTest;
