import styles from './Description.module.css';
import React from 'react';

const RecipeAuthor = () => {
    let authorName = "Beth - Budget Bytes";
    let authorPhoto = "https://www.budgetbytes.com/wp-content/uploads/2022/07/Beth-2022-3-268x268.jpg";
    let authorLink = "https://www.budgetbytes.com/author/beth/"; 
    
    
    return (
        <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = {authorName} className={styles.imageUpdates} />
        <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Budget Bytes</a> 
        </div>
        </div>
    );
};

class RecipeDescription extends React.Component {
    render () {
        return (
            <div> 
                <div>
                    <h1>Easy American Goulash</h1>
                    <p>This easy one pot version of American Goulash cooks the pasta and beef in the same pot with a homemade red wine tomato sauce for extra flavor. </p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription; 