

import './Main.css'

import Mid from './Mid';
import Footer from './Footer';


function Main() {
    return (
        <div class="laptopbody">
            <div class="laptopscreen">
                <div class="laptopwebpage">
                    <header>
                       <a class="logoa" href=""><h3 class="logo">logo</h3></a>
                        <nav>
                            <ul class="navbarlinks">
                        <li><a href="">Home</a></li>
                        <li><a class="aboutlink"  href="">About</a></li>
                        <li><a class="contactlink" href="">Contact</a></li>
                            </ul>
                        </nav> 
                        <div class="icons">
                       <a href=""><i class="fa-brands fa-facebook-f fa-2x"></i></a>
                       <a href=" "><i class="fa-brands fa-twitter fa-2x"></i></a>
                       <a href=""><i class="fa-brands fa-instagram fa-2x"></i></a>
                       </div>
                    </header>
                         <div class="firstpart">
                         <Mid />
                         <Footer />

                            

                         </div>
                       

        </div>
        </div>
        </div>
    
    )
}


export default Main;