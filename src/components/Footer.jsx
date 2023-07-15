import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { BiSolidMessageRounded } from 'react-icons/bi'
import { BiLogoTwitter } from 'react-icons/bi'
import { BiLogoYoutube } from 'react-icons/bi'

export const Footer = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 800);

    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth >= 800);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <footer style={{marginBottom:120}}>
            {
                isLargeScreen 
                ? 
                <div className="section">
                <div className="foot-section">
                    <a className='linkLogo' href="" style={{textDecoration: 'none', justifyContent: 'center', marginBottom: '15px'}}>
                        <h1 className='h1Logo' style={{fontSize:'25px'}}>lobe</h1>
                        <img className='logo' style={{width:'20px', height: '20px'}} src={logo} alt="" />
                    </a>
            
                    <p>A product by Microsoft.</p>
                    <p>All rights reserved</p>
                    <p>© Microsoft 2021</p>
                </div>
            
                <div className='foot-section'>
                    <p className='title-foot-section spacing'>About</p>
                    <p className='spacing'>Download</p>
                    <p className='spacing'>Overview</p>
                    <p className='spacing'>Examples</p>
                    <p className='spacing'>Blog</p>
                </div>
            
                <div className='foot-section'>
                    <p className='title-foot-section spacing'>General</p>
                    <p className='spacing'>Notice</p>
                    <p className='spacing'>License</p>
                    <p className='spacing'>Press Inquiry</p>
                    <p className='spacing'>Press Images</p>
                </div>
            
                <div className='foot-section'>
                    <p className='title-foot-section spacing'>Resources</p>
                    <p className='spacing'>Help</p>
                    <p className='spacing'>Tour</p>
                    <p className='spacing'>Contact</p>
                    <p className='spacing'>Privacy</p>
                </div>
            
                <div className='foot-section'>
                    <p className='icon-container' style={{marginTop:'20px'}}>
                        <BiSolidMessageRounded fill='white' />
                    </p>
                    <p className='icon-container'>
                        <BiLogoTwitter fill='white' />
                    </p>
                    <p className='icon-container'>
                        <BiLogoYoutube fill='white' />
                    </p>
                </div>
            
                
                </div> 
                : 
                <div>
                <div className="section">
                    <div className='foot-section'>
                    <p className='title-foot-section spacing'>About</p>
                    <p className='spacing'>Download</p>
                    <p className='spacing'>Overview</p>
                    <p className='spacing'>Examples</p>
                    <p className='spacing'>Blog</p>
                    </div>

                    <div className='foot-section'>
                    <p className='title-foot-section spacing'>General</p>
                    <p className='spacing'>Notice</p>
                    <p className='spacing'>License</p>
                    <p className='spacing'>Press Inquiry</p>
                    <p className='spacing'>Press Images</p>
                    </div>
                </div>

                <div className="section">
                    <div className='foot-section'>
                    <p className='title-foot-section spacing'>Resources</p>
                    <p className='spacing'>Help</p>
                    <p className='spacing'>Tour</p>
                    <p className='spacing'>Contact</p>
                    <p className='spacing'>Privacy</p>
                    </div>

                    <div className='foot-section'>
                    <p className='icon-container' style={{marginTop:'20px'}}>
                        <BiSolidMessageRounded fill='white' />
                    </p>
                    <p className='icon-container'>
                        <BiLogoTwitter fill='white' />
                    </p>
                    <p className='icon-container'>
                        <BiLogoYoutube fill='white' />
                    </p>
                    </div>
                </div>

                <div className="foot-section" style={{marginBottom:'80px'}}>
                    <a className='linkLogo' href="" style={{textDecoration: 'none', justifyContent: 'center', marginBottom: '15px'}}>
                    <h1 className='h1Logo' style={{fontSize:'25px'}}>lobe</h1>
                    <img className='logo' style={{width:'20px', height: '20px'}} src={logo} alt="" />
                    </a>

                    <p>A product by Microsoft.</p>
                    <p>All rights reserved</p>
                    <p>© Microsoft 2021</p>
                </div>
                </div>
            }
        </footer>
    )
}
