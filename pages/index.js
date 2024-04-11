// pages/index.js
import SectionOne from '@/components/Start/StartLandning';
import SectionFour from '@/components/Ommig/SectionFour';
import SectionFive from '@/components/tjanster/tjanster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ModalProvider } from '@/components/modalContext';
import  ContactModal  from '@/components/ContactModal'
import styles from '@/styles/landningssida.module.css'


export default function Home() {
  return (
    <ModalProvider>
      <Header />
      {/* Använd ankarlänkar i din header för att navigera till sektioner */}
      <main className={styles.landningssida}>
        <section id="section-one"><SectionOne /></section>
        <section id="tjanster"><SectionFive /></section>
        <section id="om-oss"><SectionFour /></section>
        {/* Lägg till fler sektioner här */}
      </main>
      <ContactModal />
      <Footer />
    </ModalProvider>
  );
}
