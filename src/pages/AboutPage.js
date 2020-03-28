import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>UCF Full-Stack Web Development Bootcamp certified graduate proficient in the MERN stack. I have hands-on coding experience in web languages such as HTML5, CSS3, JavaScript, and modern JavaScript frameworks like jQuery, Node and React. I am highly math-oriented, with an affinity and a passion for logic, algorithms, and problem solving. </p>
            </Content>
        </div>
    );

}

export default AboutPage;