// components/header.js
import  styles from '../styles/header.module.css'; // Antag att dina stilar ligger här


export const Header = () => {
  return (
    <header className={styles.mainHeader}>
        
     <h1>Linn Sundlöf Coach</h1> 
    
    </header>
  );
}

export default Header; // Exportera som default om du använder den som en default import någon annanstans
