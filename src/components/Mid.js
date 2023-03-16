
import './Mid.css'
import girlpic from './girlpic.jpg'


function Mid(){

    return(
        <div class="maindiv">
            <div class="firstcontainer">
                <h1 class="firstcontainerh">Header <br /> Footer</h1>
             <p>Lorem ipsum dolor sit amet. At velit vitae ut consequatur aliquam vem inciduntllam error qui sunt numquam non error neque.


             </p>
             <div id ="dotdiv">
             <div class="dotfirst"></div>
             <div class="dotsecond"></div>
             <div class="dotthird"></div>
             </div>
             </div>

               <div class="secondcontainer">
                <img clas="girlimg" src={girlpic} />
            
              </div>  

        </div>
    );
}

export default Mid;



