import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { SectionTitle } from "../sectionTitle/section-title";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <>
            <SectionTitle text="Social Media"/>
        <div className="social">
            <a href="https://www.instagram.com/jefersonwfc/" target="blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/jefferson-frutuoso-269089323/" target="blank">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/jeffersonfrutuoso" target="blank">
                <GitHubIcon/>
            </a>
        </div>
        </>
    )
}