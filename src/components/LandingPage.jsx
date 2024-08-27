import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiDownload } from "react-icons/fi";
import { IoLogoLinkedin, IoMdMail, IoLogoGithub } from "react-icons/io";



const LandingPage = () => {
    const [text] = useTypewriter({
        words: ['AI Graduate', 'Data Scientist', 'Data Analyst','Forecasting Expert','Deep Learning Engineer' ],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 70,
    });

    return (
        <>
            <section id="home">
                <div className="home-container">
                    <div className="intro">
                        Hey! <br />
                        I'm Charan Somalraju <br />
                    </div>
                    <div className="typing-effect">
                        I'm a {' '}
                        <span className="typing-result">
                            {text}
                        </span>
                        <Cursor cursorStyle="|" />
                    </div>
                    <div className="download-cv">
                        <a href="https://drive.google.com/file/d/1jB9GbnB03kBiXKf1uvmRRN2REwVH_0C5/view?usp=drive_link" className="button" download="Charan Resume.pdf">
                            <FiDownload className="icon" />
                            {' '}Download CV
                        </a>
                    </div>
                    <div className="social-buttons">
                    <a href="https://github.com/c7r7" target="_blank" rel="noreferrer" className="github">
                        < IoLogoGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/charan-somalraju-72b868206/
" target="_blank" rel="noreferrer" className="linkedin">
                        <IoLogoLinkedin />
                    </a>
                    <a href="mailto:charansomalraju@gmail.com" className="gmail">
                        <IoMdMail />
                    </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingPage;
