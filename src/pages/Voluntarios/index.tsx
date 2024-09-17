import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "../../components/LayoutDashboard";
import { useEffect } from "react";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";

export default function Voluntarios() {

    const navigate = useNavigate()

    useEffect(() => { 
        let lsToken = localStorage.getItem("americanos.token")
        
        let token: IToken | null = null
        
        if (typeof lsToken === 'string') { 
            token = JSON.parse(lsToken) 
        }

        if (!token || verificaTokenExpirado(token.accessToken)) {
            navigate("/")
        }

    }, [])

    return(
        <>
            <LayoutDashboard>
                <h1>TESTE</h1>
            </LayoutDashboard>
        </>
    )
}