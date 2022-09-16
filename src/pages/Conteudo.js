import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Components/AppContext";

const Conteudo = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    // A partir daqui, o ESTADO MUDA para VERDADEIRO
    const { login } = useContext(AppContext)
    console.log(login)

    if (!login) {
        navigate('/')
    }

    return (
        <div className="container p-2 mt-5">

            <p>Perfil com id: {id}</p>
        </div>
    )
}

export default Conteudo;