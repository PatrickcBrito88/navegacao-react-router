import React from "react";

import {useParams} from "react-router-dom";

const Param = props => {
    const { id } = useParams() // o hook useParams pega o valor do parametro . O nome da const tem que ser o mesmo nome que está mapeado no dois pontos do mapeamento
        //No caso lá está :id
        return (
        <div className="Param">
            <h1>Param</h1>
            <h2>Valor {id}</h2>
        </div>
    )
}

export default Param