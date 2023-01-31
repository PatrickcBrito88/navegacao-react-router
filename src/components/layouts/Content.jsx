import React from 'react'
import './Content.css'
import { Routes, Route} from 'react-router-dom'

import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";

const Content = props => (
    <main className="Content">
        <Routes>
                <Route path="/about" element={<About />}/> {/*Definição das rotas dentro do componente Content - Quando o path for /about, traga o componente <About>*/}
                <Route path="/param/:id" element={<Param />}/>{/* dois pontos significa que não é um valor literal e sim variável */}
                <Route exact path="/" element={<Home />}/>{/*o exact significa que só vai entrar no home se a rota for exatamente a que possui barra(/). Sem
                o exact tudo que possuir barra vai direcionar para o home */}
                <Route path="*" element={<NotFound />}/>
        </Routes>
    </main>
)

export default Content