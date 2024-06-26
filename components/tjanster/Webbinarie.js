import React, { useEffect, useState } from 'react';
import createClient from '@/client';
import BlockContent from '@sanity/block-content-to-react';
import styles from '@/styles/tjanster.module.css'
import button from '@/styles/button.module.css'
import Link from 'next/link'
import Image from 'next/image'

const SectionThree = () => {
  const [WebinarieData, setWebinarieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log('Initiating fetch operation');  // Loggar när hämtningen börjar
    createClient
      .fetch(
        `*[_type == "Webinarie"]{
          _id,
            title,
            body,
            pris,
            "mainImageUrl": mainImage.asset->url,
            buttonText,
            buttonUrl
        }`
      )
      .then((data) => {
        console.log('Fetched data:', data);  // Loggar de hämtade datan
        setWebinarieData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);  // Redan existerande felloggning
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className={styles.Webbinarier} aria-live="polite">
      {WebinarieData && WebinarieData.map((item) => (
        <article key={item._id} className={styles.Webbinarier}>
          {item.mainImageUrl && (
                <Image src={item.mainImageUrl} alt={item.title} 
                width={600} // Set the intrinsic size of the image
                height={600}
                /> // This line displays the main image
                )}
          <h1>{item.title}</h1>
          <BlockContent blocks={item.body} />
          <p>{item.pris}</p>
          {item.buttonText && item.buttonUrl && (
            <div className={styles.bokningsknapp}>
              <Link href={item.buttonUrl}>
                <button type='button' className={button.contactButton}>{item.buttonText}</button>
              </Link>
          </div>
          )}
        </article>
      ))}
    </div>
  );
}

export default SectionThree;