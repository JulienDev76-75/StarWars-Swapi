function Article(props) {
    return(
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <span>{props.article.id}</span>
                <h3 className="text-danger">{props.article.titre}</h3>
                <p>{props.article.contenu}</p>
            </article>
        </div>
    );
}

export default Article;