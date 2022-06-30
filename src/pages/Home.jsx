import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavBar from "../components/navbar";
import Free from '../free.jpeg';
import "../App.css"


function Home() {
    let width= window.innerWidth;
    console.log(`width: ${width}`);
    return (
        <>
        <div>
       <img className="fit" src={Free} alt="image" height="700px" width="1440px" />
    </div>
        </>
    
    
  
    );
  }
  
  export default Home;