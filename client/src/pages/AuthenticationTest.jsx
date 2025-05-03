import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";



const AuthTest = () => {
    
    const [data, setData] = useState("")


    useEffect(() => getData(), [])


    const getData = () => {

        try {

            const response = axios.get("http://localhost:5000/protected", 
                { 
                headers: {
                    "Authorization": localStorage.getItem("token")
                        }

                }
            ).then(res => {setData(res.data); console.log(res.data)})
            .catch(error => console.error("Error fetching:", error));;

            console.log(response);

        } catch (err) {
            console.error("API Request Failed:", err);        }
    }

    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const [show, setShow] = useState(false)

    const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    
    document.body.setAttribute("data-bs-theme", theme === "light" ? "dark" : "light");
    };

    useEffect(()=>{localStorage.setItem('theme', theme)}, [theme])
    const navigate = useNavigate()


    return(
        <div>
            <h1>{data.message}</h1>
            
            <button type="button" class="nes-btn is-primary" onClick={() => {setShow(!show); }}>Toggle navigation</button>
            <button type="button" class="nes-btn is-primary" onClick={toggleTheme} >change theme</button>
            {show && 
            <div className="d-flex flex-column">
                <button type="button" class="nes-btn is-primary" onClick={() => {navigate("/login")}}>Go to Login</button>
                <button type="button" class="nes-btn is-primary" onClick={() => {navigate("/login")}}>Go to register</button>
            </div>}
        </div>
    )


}


export default AuthTest