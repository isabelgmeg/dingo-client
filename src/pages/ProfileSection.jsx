import LinkProfileButton from "../components/LinkProfileButton/LinkProfileButton"
import weightIllustration from "../assets/weight.png"

export default function ProfileSection (){
    return(
        <div className="profilePage_linkButtons">
        <LinkProfileButton
        section={"weightProgress"} image={weightIllustration} sectionText={"Weight Progress"}
        />
      </div>
    )
}