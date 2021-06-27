function Articlefilm(props) {
    return (
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-danger">{props.article.title}</h3>
                <p>Episode n° : {props.article.episode_id}</p>
                <p>Réalisateur : {props.article.director}</p>
                <p>Producteur : {props.article.producer}</p>
                <p>Date de parution : {props.article.release_date}</p>
            </article>
        </div>
    )
}

export default Articlefilm;