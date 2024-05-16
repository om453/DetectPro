'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
    return (
        <div className='flex flex-row gap-4'>
            <a href="https://github.com/om453" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://twitter.com/_Om_1111" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/om-patel-176983230/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
    );
};

export default SocialMediaLinks;