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
 
  );
}