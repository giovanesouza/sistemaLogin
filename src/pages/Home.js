import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Components/AppContext";

const Home = () => {
    const [id, setId] = useState('')
    const [load, setLoad] = useState(false)
    
    const navigate = useNavigate()
    // const context = useContext(AppContext)
    
    const {setLogin} = useContext(AppContext)

    const login = async () => {
        setLoad(true)
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const dados = await resposta.json()
        .catch(error => {
            setLoad(false)
            console.log(error)
            alert("id inválido")
        })

        if(dados){
            setLogin(true)
            navigate(`perfil/${id}`)
        }
    }

    return (
        <div className="container">
            <p className="mt-5">LOGIN</p>
            <input className="p-2 me-2" value={id} onChange={event => setId(event.target.value)} />
            
            {
                load && <p>Realizando o login...</p>
            }

            <button className="p-2" onClick={login}> Entrar  </button>
        </div>
    )
}

export default Home;