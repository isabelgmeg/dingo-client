import LinkProfileButton from "../components/LinkProfileButton/LinkProfileButton";
import weightIllustration from "../assets/weight.png";
import recipeIllustration from "../assets/recipes.png";
import groceryIllustration from "../assets/grocery.png";


export default function ProfileSection() {
  return (
    <div className="profilePage_linkButtons">
      <LinkProfileButton
        section={"weightProgress"}
        image={weightIllustration}
        sectionText={"Weight Progress"}
      />

      <LinkProfileButton
        section={"recipes"}
        image={recipeIllustration}
        sectionText={"Saved Recipes"}
      />

      <LinkProfileButton
        section={"grocery"}
        image={groceryIllustration}
        sectionText={"Grocery List"}
      />
    </div>
  );
}
