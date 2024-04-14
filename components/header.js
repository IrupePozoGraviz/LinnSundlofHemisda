// components/header.js
import  styles from '../styles/header.module.css'; // Antag att dina stilar ligger här


export const Header = () => {
  return (
    <header className={styles.mainHeader}>
        
     <h1>Linn Sundlöf Coach</h1> 
     <div className={styles.svgs}>
     <svg width="100%" height="100%" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <path d="M 0,400 L 0,75 C 205.71428571428572,96.42857142857143 822.8571428571429,85.71428571428572 1440,75 L 1440,400 L 0,400 Z" 
        stroke="none" stroke-width="0" fill="#237c91" fillOpacity="0.4">
  </path>
  <path d="M 0,400 L 0,175 C 205.71428571428572,225 822.8571428571429,200 1440,175 L 1440,400 L 0,400 Z" 
        stroke="none" stroke-width="0" fill="#237c91" fillOpacity="0.53">
  </path>
  <path d="M 0,400 L 0,275 C 205.71428571428572,353.57142857142856 822.8571428571429,314.2857142857143 1440,275 L 1440,400 L 0,400 Z" 
        stroke="none" stroke-width="0" fill="#237c91" fillOpacity="1">
  </path>
</svg>

     </div>
    
    </header>
  );
}

export default Header; // Exportera som default om du använder den som en default import någon annanstans
