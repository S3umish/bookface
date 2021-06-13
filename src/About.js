import React from "react";
import styles from './styles/styles.module.css';
import "bootstrap/dist/css/bootstrap.min.css"


const About = () => {

    // const titleText = 'Social Media App'
    const titleText = {text: 'Social Media App BooKFace'}

    return(
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
                {/*<h1>{titleText}</h1>*/}
                <h1>{titleText.text}</h1>
                <p>
                    <span>BookFace is the space to hangout !!  built to create connections. This app offers an opportunity for folks from around the world, discover new trends, new talents and simply enjoy each others company, we are making an exciting, welcoming experience that connects.</span>
                </p>
                <h3><a href={`/profiles`}>Explore Profiles</a></h3>
            </div>
        </div>
    )
}


export default About;




