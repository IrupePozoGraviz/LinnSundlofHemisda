// pages/pakettre.js
import React, { useEffect, useState } from 'react';
import createClient from '@/client'; // Importera client
import BlockContent from '@sanity/block-content-to-react';
import { BookingButton } from '@/components/bookingButton'
import Image from 'next/image';
import styles from '@/styles/paket.module.css'

const PaketTre = () => {
  const [PaketTreData, setPaketTreData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "paketTre"]{
            _id,
            title,
            body,
            pris,
            "mainImageUrl": mainImage.asset->url // This line fetches the main image URL
        }`
      )
      .then((data) => {
        setPaketTreData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  // Accessible loading indicator
  if (isLoading) return <p role="status" aria-live="polite">Loading...</p>;
  if (isError) return <p role="alert">Error fetching data</p>;

  return (
    <div className={styles.paketText} aria-live="polite">
      {PaketTreData && PaketTreData.map((item) => (
        <article key={item._id} className={styles.paketBox}>
          {item.mainImageUrl && (
                <Image src={item.mainImageUrl} alt={item.title} 
                width={600} // Set the intrinsic size of the image
                height={600}/> // This line displays the main image
                )}
          <h1>{item.title}</h1>
          <BlockContent blocks={item.body} />
          <p>{item.pris}</p>
          <div className={styles.paketbutton}>
            <BookingButton aria-label={`Book ${item.title}`} /> 
          </div>
        </article>
      ))}
    </div>
  );
}

export default PaketTre;