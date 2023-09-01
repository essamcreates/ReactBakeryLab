import { useState } from "react";
import Recipe from "../components/Recipe";

const CakeContainer = () => {
    
    const [victoriaSpongeRating, setVictoriaSpongeRating] = useState(0);
    const [teaLoafRating, setTeaLoafRating] = useState(0);
    const [carrotCakeRating, setCarrotCakeRating] = useState(0);



    return(
        <>
            <h2>Cakes</h2>
            <Recipe cakeName={"Victoria Sponge"}
            ingredients={["eggs",
            "butter",
            "sugar",
            "self-raising flour",
            "baking powder",
            "milk"]}
            price={5}
            rating={5}
            />
            <Recipe cakeName={"Tea Loaf"}
            ingredients={["eggs",
            "oil",
            "dried fruit",
            "sugar",
            "self-raising flour",
            "strong tea",]}
            price={2}
            rating={3}
            />
            <Recipe cakeName={"Carot Cake"}
            ingredients={["carrots",
            "walnuts",
            "oil",
            "cream cheese",
            "flour",
            "sugar",]}
            price={8}
            rating={5}
            />
            <p>The average rating of all cakes: {(victoriaSpongeRating + teaLoafRating + carrotCakeRating)/3 }</p>
        </>
    )
}

export default CakeContainer;