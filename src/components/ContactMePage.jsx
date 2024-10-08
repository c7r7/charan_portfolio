import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Divider from '@mui/material/Divider';
import locationLogo from '../resources/location.svg';
import mailLogo from '../resources/mail.svg';

const ContactMePage = () => {
    return (
        <motion.section
            id="contact-me"
            className="main-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
        >
            <div style={{height:"70px"}}></div>
            <h3 className="heading">Get in Touch</h3>
            <div className="top-container">
                <div className="item">
                    <div className="icon">
                        <img src={mailLogo} alt="mail" />
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className="text">
                        <a href="mailto:charansomalraju@gmail.com">charansomalraju@gmail.com</a>
                    </div>
                </div>

                <div className="item">
                    <div className="icon">
                        <img src={locationLogo} alt="location" />
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className="text">Buffalo, New York</div>
                </div>
            </div>
            <div className="bottom-container">
                <a href="https://github.com/c7r7" target="_blank" rel="noreferrer" className="github">
                    <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/charan-somalraju-72b868206/" target="_blank" rel="noreferrer" className="linkedin">
                    <LinkedInIcon />
                </a>
                <a href="https://c7r7.github.io/charan_portfolio/" target="_blank" rel="noreferrer" className="website">
                    <LanguageIcon />
                </a>
            </div>
            <div style={{height:"70px"}}></div>
        </motion.section>
    );
};

export default ContactMePage;