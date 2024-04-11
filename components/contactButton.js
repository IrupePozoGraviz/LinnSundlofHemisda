// components/ContactButton.js
import { useModal } from '@/components/modalContext'; // Se till att sökvägen till din kontextfil är korrekt
import styles from '@/styles/button.module.css';

export const ContactButton = ({ style, children }) => {
  const { openModal } = useModal();

  return (
    <button
    className={styles.contactButton}
      type="button" // Bra att specificera button typen för att undvika oönskat beteende i formulär
      style={style}
      onClick={openModal} // Du kan direkt anropa openModal utan extra funktion om du inte loggar något
      aria-label={children ? undefined : 'Kontakta SeparationsCoach'}>
      {children || 'Kontakta mig'}
    </button>
  );
};

export default ContactButton; // Om du föredrar default export
