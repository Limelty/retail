import './Navbar.css'
import logo from './image/Logo3.svg'

const Navbar = () =>{
    return(
        <nav>
           <div className="logo">
                <img src={logo} alt="Company Logo"/>
                <h1>Artisan Denish Co.</h1>
           </div>
           <div className="navigation">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About Us">About Us</a></li>
                    <li><a href="#Catalogue">Catalogue</a></li>
                    <li><a href="#News">News</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
           </div>
        </nav>
    )
}

export default Navbar