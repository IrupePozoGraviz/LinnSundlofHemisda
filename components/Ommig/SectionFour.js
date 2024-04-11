import OmMigBildComponent from './OmMig';
import Text4Component from './fetchOmMig';
import { ContactButton } from '../contactButton'
import styles from '@/styles/omMig.module.css';

const SectionFour = () => {
    return (
        <main className={styles.OmMigMain}>
            <OmMigBildComponent />
            <Text4Component />
            <div>
        <ContactButton />
      </div>
        </main>
    );
}

export default SectionFour;