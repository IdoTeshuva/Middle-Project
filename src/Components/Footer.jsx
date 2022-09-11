import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import "./footer.css"

const Footer = () => {

    return (

        <div className='footer-father'>

            <div className="footer">

                <div className="first-column">
                    <Link className='section1-link' to="./Contact"><h4 className='first-column-header'>contact us</h4></Link>
                    <Link className='section1-link' to="./TermsOfUse"><h4 className='first-column-header'>terms of use</h4></Link>
                    <Link className='section1-link' to="./FAQ"><h4 className='first-column-header'>FAQ <LiveHelpIcon fontSize='small'/></h4></Link>
                    <Link className='section1-link' to="./JoinUs"><h4 className='first-column-header'>join us</h4></Link>
                </div>

                <div className="second-column">
                   <Link className='snifiim-header-link' to="./MapRamatGan"><h4 className='snifim-header'>PAZA RAMAT GAN</h4></Link>
                   <Link className='snifiim-header-link' to="./MapTlv"><h4 className='snifim-header'>PAZA TLV</h4></Link>
                   <Link className='snifiim-header-link' to="./MapBeerTuvia"><h4 className='snifim-header'>PAZA BEER-TUVIA</h4></Link>
                   <Link className='snifiim-header-link' to="./MapRishonLezion"><h4 className='snifim-header'>PAZA Rishon-Lezion</h4></Link>
                </div>

                <div className="third-column">

                    <h4 className='footer-icon-header'>@PazaLive</h4>   

                    <div> 
                        <a className='icon-link' target="blank" href="https://www.instagram.com/instagram/"><InstagramIcon></InstagramIcon></a>
                        <a className='icon-link' target="blank" href="https://www.facebook.com/ZappaClub"><FacebookIcon></FacebookIcon></a>
                    </div>

                    <div>
                    <a className='icon-link' target="blank" href="https://twitter.com/supersimpledev"><TwitterIcon></TwitterIcon></a>
                    <a className='icon-link' target="blank" href="https://www.linkedin.com/company/linkedin/"><LinkedInIcon></LinkedInIcon></a>
                    </div>

                </div>

            </div>

            <hr />

            <div className='foot-footer'>
                <p className='foot-footer-txt'>this site is poewred by the illuminati comapny  </p>
                <motion.div
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 2}}>
                    <RemoveRedEyeIcon className='footer-icon'/>
                </motion.div>
            </div>

        </div>
    )
}

export default Footer;