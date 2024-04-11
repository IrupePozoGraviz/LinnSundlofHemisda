import React, { useEffect, useState } from "react";
import createClient from '@/client.js'; // Säkerställ att detta är din Sanity-klientkonfiguration
//import '../../css/nav.css';

const EttMeny = () => {
  const [menyEttData, setMenyEttData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "menyEtt"]{
          _id,
          title,
        }`
      )
      .then((data) => {
        setMenyEttData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Det gick inte att ladda menyn, försök igen senare.</p>;

  return (
    <main ="menyEtt-main" aria-labelledby="menyEttTitle">
     {menyEttData.map((item) => (
        <div key={item._id} ="meny">
          <h2>{item.title}</h2>
        </div>
      ))}
    </main>
  );
}

export default EttMeny;
