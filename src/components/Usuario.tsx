import { useState } from "react"

interface User {
    uid: string;
    name: string;
}

export const Usuario = () => {
    const [user, setUser] = useState<User>();
    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Johan David'
        });
    }
    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            <button
                className="btn btn-outline-light"
                onClick={ login }
            >
                Usuario
            </button>
            {
                (!user) 
                    ? <span>No hay usuario</span>
                    : <pre>{ JSON.stringify(user) }</pre>
            }
        </div>
    )
}
