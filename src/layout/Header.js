function Header() {
    // Un composant doit renvoyer une structure HTML (JSX en réalité) pour afficher quelque chose
    return (
        <header className="text-center text-white py-5" >
            <section className="container">
                <h1 className="text-danger">Star Wars fan site</h1>
                <p className="lead">Tout savoir sur les fondamentaux de Star Wars</p>
            </section>
        </header>
    );
}

// On exporte notre fonction Header afin de pouvoir charger ce composant dans d'autres composants comme App
export default Header;
