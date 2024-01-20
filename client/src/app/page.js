'use client';
import styles from "./page.module.css";
import Image from "next/image";
import gsap from 'gsap';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animate);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",


    })

  }, [])

  const animate = () => {

    if(xPercent < -100){

      xPercent = 0;

    }

    else if(xPercent > 0){

      xPercent = -100;

    }

    gsap.set(firstText.current, {xPercent: xPercent})

    gsap.set(secondText.current, {xPercent: xPercent})

    requestAnimationFrame(animate);

    xPercent += 0.1 * direction;

  }
  return (
    <main className={styles.main}>
      <Image
      fill ={true}
      src="/images/background.jpg"
      alt="image"
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}> Software Developer - </p>
          <p ref={secondText}> Software Developer - </p>
        </div>
      </div>
    </main>
  );
}
