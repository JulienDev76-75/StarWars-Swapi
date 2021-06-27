
import React from "react";


function Articlevehicles(props) {
    return(
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-danger">{props.article.name}</h3>
                <p>Modèle : {props.article.model}</p>
                <p>Fabricant : {props.article.manufacturer}</p>
                <p>Prix en crédits : {props.article.cost_in_credits}</p>
                <p>Longueur : {props.article.length}</p>
                <p>Vitesse max : {props.article.max_atmosphering_speed}</p>
                <p>Equipage : {props.article.crew}</p>
                <p>Passager : {props.article.passengers}</p>
                <p>Capacité de chargement : {props.article.cargo_capacity}</p>
                <p>Consommables : {props.article.consumables}</p>
                <p>Classe de véhicule : {props.article.vehicle_class}</p>
            </article>
        </div>
    )
}

export default Articlevehicles;