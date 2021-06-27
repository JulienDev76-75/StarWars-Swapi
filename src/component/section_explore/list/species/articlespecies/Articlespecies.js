import React from "react";


function Articlespecies(props) {
    return (
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-danger">{props.article.name}</h3>
                <p>Classification : {props.article.classification}</p>
                <p>Désignation : {props.article.designation}</p>
                <p>Taille moyenne : {props.article.average_height}</p>
                <p>Couleur de peau : {props.article.skin_colors}</p>
                <p>Couleur de cheveux : {props.article.hair_colors}</p>
                <p>Couleur des yeux : {props.article.eye_colors}</p>
                <p>Durée de vie : {props.article.average_lifespan}</p>
                <p>Habitat : {props.article.homeworld}</p>
                <p>Langage : {props.article.language}</p>
            </article>
        </div>
    )
}

export default Articlespecies;