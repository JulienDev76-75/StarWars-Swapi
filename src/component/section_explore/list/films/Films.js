import React from "react";
import Axios from "axios";

import Articlefilm from "./articlefilm/Articlefilm";


class Films extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: false,
            data: null,
            articles: null
        }
    }

    componentDidMount() {
        Axios.get("https://swapi.dev/api/films/")
            .then((response) => {
                console.log(response);
                let articles = response.data.results.map(article => {
                    return <Articlefilm article={article} />
                });

                this.setState({
                    loaded: true,
                    data: response.data,
                    articles: articles
                })

            })

            .catch((error) => {
                this.setState({
                    loaded: true,
                    error: error
                })
            })
    }

    render() {
        if (this.state.loaded) {
            if (this.state.error) {
                return (
                    <p className="text-white">une erreur est survenue. Erreur : {this.state.error.message}</p>
                );
            }

            return (
                <section>
                    <h2 className="text-white">La liste des films :</h2>
                    <div className="row">
                        {this.state.articles}
                    </div>
                </section>
            );
        }
        return (
            <p className="text-white">Vos données sont en cours de chargement</p>
        );
    }
}

export default Films;