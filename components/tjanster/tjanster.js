//här ska sen bild och text in

import ImageTwoComponent from './imageTwo';
import Text2Component from './fetchJobbaMedMig';
import SectionThree from './Webbinarie';
import PaketEtt from './paketEtt';
import PaketTva from './paketTva';
import PaketTre from './paketTre'
import PaketFyra from './paketFyra'
import { ContactButton } from '../contactButton'
import styles from '@/styles/tjanster.module.css';
import style from '@/styles/paket.module.css'

const SectionFive = () => {
    return (
        <div className={styles.tjanstermain}>
           <section className={styles.sectionEtt} >
           <div>
            <ImageTwoComponent />
            </div>
            <div>
            <Text2Component />
            </div>
            <div className={styles.bokningsknapp}>
            <ContactButton />
            </div>
            </section>
            <div>
            <SectionThree />
            </div>
            <div className= {style.paketMain}>
            <PaketEtt />
            <PaketTva />
            <PaketTre />
            <PaketFyra />
           
            </div>

            
        </div>
    );
}

export default SectionFive;