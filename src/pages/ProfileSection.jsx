
import NavBar from "../components/NavBar/NavBar"
import LinkProfileButton from "../components/LinkProfileButton/LinkProfileButton";

import weightIllustration from "../assets/weight.png";
import recipeIllustration from "../assets/recipes.png";
import groceryIllustration from "../assets/grocery.png";

import "../styles/profileSection.scss"

export default function ProfileSection() {
  return (
    <div className="profileSection">
      <NavBar />

      <div className="profileSection_container">

      <LinkProfileButton
        section={"weightProgress"}
        image={weightIllustration}
        sectionText={"Weight Progress"}
      />

      <LinkProfileButton
        section={"savedRecipes"}
        image={recipeIllustration}
        sectionText={"Saved Recipes"}
      />

      <LinkProfileButton
        section={"groceryList"}
        image={groceryIllustration}
        sectionText={"Grocery List"}
      />
      </div>
    </div>
  );
}
