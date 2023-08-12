let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating() {
    return <h3>{stars[props.rating - 1]}</h3>;
  }
  const isValid = props.rating > 0 && props.rating < 6;
  // return stars; // only one return per function? 
  return isValid ? <GiveRating /> : null; // () go on separate lines // this is a ternary 
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
