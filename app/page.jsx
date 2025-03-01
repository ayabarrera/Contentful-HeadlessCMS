"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import HeaderFooter from "./HeaderFooter";

export default function Home() {
  const [trinkets, setTrinkets] = useState([]); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/contentful");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Fetched Data:", data);

        if (data) {
          setTrinkets(data); 
        } else {
          console.error("Data is undefined:", data);
          setTrinkets([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setTrinkets([]);
      }
    }

    fetchData();
  }, []);

  return (
    <HeaderFooter>
      <div>
        <h1 className={styles.h1Header}>Aya's Collection</h1>
        <div className={styles.gridContainer}>
          {trinkets.map((trinket) => ( 
            <div key={trinket.sys.id} className={styles.itemContainer}>
              <h2 className={styles.itemName}>"{trinket.fields.name}"</h2>
              {trinket.fields.image && (
                <img
                  src={trinket.fields.image.fields.file.url}
                  alt={trinket.fields.name}
                  className={styles.itemImage}
                />
              )}
              {trinket.fields.brand && <p><i>Brand: </i> {trinket.fields.brand}</p>}
              {trinket.fields.model && <p><i>Model: </i> {trinket.fields.model}</p>}
              {trinket.fields.kind && <p><i>Kind: </i> {trinket.fields.kind}</p>}
            </div>
          ))}
        </div>
      </div>
    </HeaderFooter>
  );
}