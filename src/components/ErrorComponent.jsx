import Footer from "./Footer"
 import PopCornColor from "../assets/PopCornColor.png"
 import styles from "./ErrorComponent.module.css"

export default function ErrorComponent (){
 return(
  <>
   <div className={ styles.errorContainer }>
    <h1 className={ styles.errorTitle }>Error: Page not found! </h1>
    <img className={ styles.heartbeat } src={PopCornColor} alt="" width="200px" height="200px" />
   </div>
 <Footer/>
 </> 
 )
}