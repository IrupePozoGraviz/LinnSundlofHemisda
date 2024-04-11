import ImageOne from './ImageOne';
import Text1Component from './FetchStart';
import { ContactButton } from '../contactButton'
import styles from '@/styles/HappierSoul.module.css';

const SectionOne = () => {
  return (
    <div className={styles.HappierSoulMain} >
      <ImageOne/>
      <Text1Component />
      <div>
        <ContactButton />
      </div>
    </div>
  );
};

export default SectionOne;
