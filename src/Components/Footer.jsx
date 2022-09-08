import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';

import "./footer.css"

const Footer = () => {

    return (

        <div className='footer-father'>

            <div className="footer">

                <div className="first-column">
                    <h4 className='first-column-header'>contact us</h4>
                    <h4 className='first-column-header'>terms of use</h4>
                    <h4 className='first-column-header'>FAQ <LiveHelpIcon fontSize='small'/></h4>
                    <h4 className='first-column-header'>join us</h4>
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
                        <InstagramIcon></InstagramIcon>
                        <FacebookIcon></FacebookIcon>
                    </div>

                    <div>
                        <TwitterIcon></TwitterIcon>
                        <LinkedInIcon></LinkedInIcon>
                    </div>

                </div>

            </div>

            <hr />

            <div className='foot-footer'>
                <p className='foot-footer-txt'>this site is poewred by the illuminati comapny <RemoveRedEyeIcon className='footer-icon'/> </p>
            </div>

        </div>
    )
}

export default Footer;