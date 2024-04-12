import style from '@/styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={style.footerGrid}>
            
            <div>
                <h3>Linn Sundlöf</h3>
                <h4>Kontakt</h4>
                <h4>Nyhetsbrev</h4>

            </div>
            <section className={style.Socials}>
            <div className={style.instagram}>
                {/* Instagram Icon */}
                <a href="https://instagram.com/linn_sundlof" target="_blank" rel="noopener noreferrer" aria-label="Follow me on Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
                </div>
               <div className={style.facebook}>
                {/* Facebook Icon */}
                <a href="https://facebook.com/linn.sundlof" target="_blank" rel="noopener noreferrer" aria-label="Follow me on Facebook">
                <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                </svg>
                </a>
                </div>
                <div className={style.youtube}>
                  {/* Youtube */}
                  <a href="https://www.youtube.com/@linnsundlof7463" target="_blank" rel="noopener noreferrer" aria-label="Follow me on Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 576 512" fill="#FF0000">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                    </a>
            </div>
        
            </section>
            <div className={style.svgs}>
     <svg width="100%" height="100%" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <path d="M 0,400 L 0,75 C 205.71428571428572,96.42857142857143 822.8571428571429,85.71428571428572 1440,75 L 1440,400 L 0,400 Z" 
        stroke="none" stroke-width="0" fill="#237c91" fill-opacity="0.4">
  </path>
  <path d="M 0,400 L 0,175 C 205.71428571428572,225 822.8571428571429,200 1440,175 L 1440,400 L 0,400 Z" 
        stroke="none" stroke-width="0" fill="#237c91" fill-opacity="0.53">
  </path>
  <path d="M 0,400 L 0,275 C 205.71428571428572,353.57142857142856 822.8571428571429,314.2857142857143 1440,275 L 1440,400 L 0,400 Z" 
        stroke="none" stroke-width="0" fill="#237c91" fill-opacity="1">
  </path>
</svg>

     </div>
        </footer>
    );
}

