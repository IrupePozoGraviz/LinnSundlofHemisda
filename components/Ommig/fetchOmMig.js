// components/Text4Component.js
import React, { useEffect, useState } from 'react';
import createClient from '@/client';
import BlockContent from '@sanity/block-content-to-react';
import { useModal } from '@/components/modalContext'; // Se till att denna hook är korrekt importerad
import style from  '@/styles/button.module.css';
import styles from '@/styles/omMig.module.css';

const Text4Component = () => {
  const [OmmigData, setOmMigData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "Ommig"]{
            _id,
            title,
            body,
        }`
      )
      .then((data) => {
        setOmMigData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className={styles.omMigBody} aria-busy={isLoading}>
      {isLoading && <p>Loading...</p>}
      {isError && <p role="alert">Error fetching data</p>}
      {OmmigData && (
        <div>
          {OmmigData.map((item) => (
            <section key={item._id}>
              <h1>{item.title}</h1>
              <BlockContent blocks={item.body} />
            </section>
          ))}
        </div>
        
      )}
    </div>
  );
};

export default Text4Component;
