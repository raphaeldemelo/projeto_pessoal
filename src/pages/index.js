import React from 'react';
import './styles.css';
import perfil from './img/fotoperfil.jpg';


export default function Main() {
    return (
        <div className="site">
            <div className="container">
                <div className="perfil">
                    <img src={perfil} alt="foto de perfil" width="200" />
                    <h1>Raphael de Melo</h1>
                </div>
            </div>

            <div className="descricao">
                <h1>
                    Olá, sou estudante de Sistema de Informação e esse é meu projeto pessoal
                    e aqui irei adicionar conteúdos que aprendo.
                </h1>
            </div>
        </div>
    )
}