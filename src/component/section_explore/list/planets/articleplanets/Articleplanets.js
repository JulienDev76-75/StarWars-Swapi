import React from "react";


function Articleplanets(props) {
    return (
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-danger">{props.article.name}</h3>
                <p>Période de rotation : {props.article.rotation_period}</p>
                <p>Période orbitale : {props.article.orbital_period}</p>
                <p>Diamètre : {props.article.diameter}</p>
                <p>Climat : {props.article.climate}</p>
                <p>Gravité : {props.article.gravity}</p>
                <p>Surface du terrain : {props.article.terrain}</p>
                <p>Eaux en surface : {props.article.surface_water}</p>
                <p>Population : {props.article.population}</p>
            </article>
        </div>
    )
}

export default Articleplanets;