import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState("");
   

    const handleUserChange = (e) => {
        setUser(e.target.value);
        if (e.target.value.includes("O") || e.target.value.includes("o")) {
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }
    }

    const handleButtonChange = () => {
        if (!user || user.includes("O") || user.includes("o")) {
            alert("Usuario inválido para registrarse");
        } else {
            alert("¡Usuario registrado correctamente!");
        }
    }

    return (
        <div>
            <input type="text" onChange={handleUserChange} value={user} />
            <button onClick={handleButtonChange}>Registrarse</button>
            <p>{user}</p>
        </div>
    )
}

export default Login;