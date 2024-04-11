import OmMigBildComponent from './OmMig';
import Text4Component from './fetchOmMig';
import styles from '@/styles/omMig.module.css';

const SectionFour = () => {
    return (
        <main className={styles.OmMigMain}>
            <OmMigBildComponent />
            <Text4Component />
           
        </main>
    );
}

export default SectionFour;