const Recipe = ({cakeName, ingredients, price, rating}) => {

    // const calculateAverageRating = () => {
    //     onButtonClick(count + 1);
    // }

    return(
        <>
            <h3>{cakeName} Sign-Ups</h3>
            <p>List of Ingredients: {ingredients}</p>
            <p>Price: {price}</p>
            <p>rating: {rating}</p>
            <hr/>
        </>
    )

}

export default Recipe