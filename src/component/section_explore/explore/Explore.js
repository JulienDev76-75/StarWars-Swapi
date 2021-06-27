import React from "react";

import Elements from "./Elements";


function Explore() {
    const items = [
        "films",
        "people",
        "planets",
        "species",
        "starships",
        "vehicles"
    ];

    let itemsList = items.map((item) =>
        <Elements content={item} />
    );

    return (
        <section className="mt-4">
            <p className="text-center fs-6 fw-bolder text-white">
                Laisse toi guider par la force pour cliquer là où tu veux aller.<br></br>
                Il est recommandé aux initiés de ne pas se servir de la souris au profit de la force uniquement.
            </p>
            <div className="row m-3">
                {itemsList}
            </div>
        </section>
    );
}

export default Explore;