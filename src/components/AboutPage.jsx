import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImage from '../resources/profile.jpg';

const AboutPage = () => {
    const elementRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["0 1", "1.25 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1],[0.75,1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1],[0.75,1]);
    
    return (
        <section id="about">
            <motion.div
                className="about-me"
                ref={elementRef}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress,
                }}
                viewport={{
                    once:true,
                }}
                >
                <div className="photo">
                    <img src={profileImage} alt="profile" className="profile-img" />
                </div>

                <div className="content">
                    <span className="heading">
                        About Me
                    </span>
                    Hey there! I’m Charan Somalraju! I am currently pursuing a Master’s in Artificial Intelligence at the University at Buffalo, following my B.Tech in Computer Science with a specialization in AI & ML from VIT University. My professional experience includes roles as a Data Scientist Intern at AB-InBev and as an Associate Consultant at Oracle, where I worked on projects involving data analytics, forecasting, and product development. I have a solid background in Python, SQL, and various machine learning frameworks like TensorFlow and Keras. My expertise is focused on leveraging AI to enhance operational efficiency and accuracy, backed by practical experience and a strong academic foundation.
                    <br /><br />
                    I’m a creative and ambitious individual with a knack for thinking outside the box. I bring fresh, innovative ideas to every project and excel in harnessing these ideas to drive success. My strong team spirit and excellent communication skills enable me to connect effectively with a diverse range of people, fostering collaboration and achieving impactful results.
                </div>
            </motion.div>
        </section>
    );
}

export default AboutPage;