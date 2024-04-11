import { useEffect, useState } from 'react';
import createClient from '@/client';
import Image from 'next/image';
import styles from '@/styles/HappySoulImage.module.css'

const ImageOne = () => {
    const [imageData, setImageData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await createClient.fetch(
                    `*[_type == "StartBild"]{
                        image {
                            asset-> {
                                url
                            }
                        }
                    }`
                );
                setImageData(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsError(true);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.LinnEttBild}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}
            {imageData && (
                <div >
                    {imageData[0]?.image?.asset?.url && (
                        <Image
                            src={imageData[0].image.asset.url}
                            alt="Bild"
                            className={styles.LinnEttBild}
                            width={600} // Set the intrinsic size of the image
                            height={600}
                            
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageOne;
