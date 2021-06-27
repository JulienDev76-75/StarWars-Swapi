
import React from "react";


function Articlepeople(props) {
    return (
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-danger">{props.article.name}</h3>
                <p>Taille : {props.article.height}</p>
                <p>Poids : {props.article.mass}</p>
                <p>Couleur des cheveux : {props.article.hair_color}</p>
                <p>Couleur de peau : {props.article.skin_color}</p>
                <p>Couleur des yeux : {props.article.eye_color}</p>
                <p>Date d'anniversaire : {props.article.birth_year}</p>
                <p>Genre : {props.article.gender}</p>
            </article>
        </div>
    )
}

export default Articlepeople;