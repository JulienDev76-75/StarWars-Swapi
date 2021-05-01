// // Ce composant représente le bloc constitué de la liste et du formulaire d'ajout
// // On charge donc ces deux composants
// import List from './list/List';
// import Additem from './additem/Additem';

// import React from "react";

// // Ici on choisit une classe car notre composant va supporter des intéractions avec l'utilisateur
// class Shoppinglist extends React.Component {
//     // Les données qui changent selon l'utilisateur sont appelées états et sont définies dans le constructeur
//     constructor(props) {
//         // Le constructeur attend forcément les propriétés (props) qui sont également passées au parent
//         super(props);
//         // Ici on définit un état avec une entrée composée d'un tableau qui est pour l'instant statique
//         // Attention les états sont toujours dans un objet
//         this.state = {
//             items: []
//         }
//     }

//     // Fonction qui permet d'ajouter une valeur dans le tableau avec la liste des éléments
//     // Elle n'est pas déclarée dans l'enfant car elle doit accéder à l'état de Shoppinglist
//     // Elle attend en argument un élément à ajouter qui lui sera fourni plus tard par l'enfant
//     addItem = (item) => {
//         // On ne peut pas modifier l'état sans passer par setState, donc on ne peut pas utiliser push directement sur le tableau items
//         // On crée donc une copie temporaire sur laquelle on appelle push pour mettre à jour le tableau
//         let tempArray = this.state.items;
//         tempArray.push(item);
//         // On remplace items par la copie
//         this.setState({
//             items: tempArray
//         })
//     }

//     // On affiche nos deux composants
//     // remarquez qu'on injecte en props dans List le tableau items stocké dans les états du composant Shoppinglist
//     // C'est sur la base de ce tableau que List va créer les li de la liste
//     // On injecte en props dans Additem la fonction addItem qui permet la remontée d'information au parent
//     render() {
//         return(
//             <div>
//                 <Additem addItem={this.addItem}/>
//                 <List items={this.state.items}/>
//             </div>
//         );
//     }
// }

// export default Shoppinglist;