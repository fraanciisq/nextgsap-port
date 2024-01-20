'use client';
import styles from "./page.module.css";
import Image from "next/image";
import gsap from 'gsap';
import { useEffect, useRef } from "react";

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    requestAnimationFrame(animation);
  }, [])

  const animation = () => {
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }   
  
  return (
    <main className={styles.main}>
      <Image
      fill ={true}
      src="/images/background.jpg"
      alt="image"
      />
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <p ref={firstText}> Software Engineer - </p>
          <p ref={secondText}> Software Engineer - </p>
        </div>
      </div>
    </main>
  );
}
