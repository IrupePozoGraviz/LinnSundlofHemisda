// components/OmMigComponent.js
import React, { useEffect, useState } from 'react';
import createClient from '@/client.js';
import Image from 'next/image';
import styles from '@/styles/omMig.module.css';


const OmMigBildComponent = () => {
  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "pictureOfMe"]{
            _id,
            image {
                asset-> {
                    url
                }
            }
        }`
      )
      .then((data) => {
        setImageData(data);
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching image data:', error);
        setIsLoading(false); // Set loading state to false in case of error
      });
  }, []);

  return (
    <div className={styles.OmMigMainBild}>
      <div aria-busy={isLoading} aria-live="polite">
        {imageData && (
          <div className={styles.LinnImage}>
            {imageData.map((item) => (
              <div key={item._id}>
                {/* Check if image is available before rendering */}
                {item.image && item.image.asset && (
                  <Image
                    src={item.image.asset.url}
                    alt="A personal portrait of me"
                    width={600} // Set the intrinsic size of the image
                    height={600}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OmMigBildComponent;