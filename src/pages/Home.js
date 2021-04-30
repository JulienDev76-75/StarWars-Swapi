function Home() {
    // let items = ["peuples", "planètes", "films", "espèces", "véhicules", "vaisseaux"];
    // for(let item of props.items) {
    //     items.push(<li className="list-group-item">{item}</li>)
    // }
    // return(
    //     <ul className="list-group">
    //         {items}
    //     </ul>
    // );
    return(
    <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    </div>
    // <Starwars/>
    );
}


export default Home;