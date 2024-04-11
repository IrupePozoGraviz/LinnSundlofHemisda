import React, { useEffect, useState } from 'react';
import createClient from '@/client';
import BlockContent from '@sanity/block-content-to-react';
import style from '@/styles/HappierSoul.module.css'
const Text1Component = () => {
  const [HappyData, setHappyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log('Initiating fetch operation');  // Loggar när hämtningen börjar
    createClient
      .fetch(
        `*[_type == "Happy"]{
          _id,
          title,
          body,
        }`
      )
      .then((data) => {
        console.log('Fetched data:', data);  // Loggar de hämtade datan
        setHappyData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);  // Redan existerande felloggning
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className={style.HappierSoulBody} aria-busy={isLoading}>
      {isLoading && <p>Loading...</p>}
      {isError && <p role="alert">Error fetching data</p>}
      {HappyData && (
        <div>
          {HappyData.map((item) => (
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

export default Text1Component;
