import Footer from "./Footer"
 import PopCornColor from "../assets/PopCornColor.png"

export default function ErrorComponent (){
 return(
  <>
   <div className='errorContainer'>
    <h1 className="errorTitle">Error: Page not found! </h1>
    <img className='heartbeat' src={PopCornColor} alt="" width="200px" height="200px" />
  
   </div>
 <Footer/>
 </> 
 )
}