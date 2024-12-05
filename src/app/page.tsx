"use client";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const antonMono = localFont({
  src: "./fonts/AntonSC-Regular.ttf",
  variable: "--font-anton-mono",
});

import Image1 from "./images/1.jpeg";
import Image2 from "./images/2.jpeg";
import Image3 from "./images/3.jpeg";
import Image4 from "./images/4.jpeg";
import Image5 from "./images/5.jpeg";
import Image6 from "./images/6.jpeg";
import Image7 from "./images/7.jpeg";
import Image8 from "./images/8.jpeg";
import Image9 from "./images/9.jpeg";
import Image10 from "./images/10.jpeg";
import Image11 from "./images/11.jpeg";
import Image12 from "./images/12.jpeg";
import { dot } from "node:test/reporters";
import localFont from "next/font/local";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [days, setDays] = useState(0);
  let interval;

  const startTime = () => {
    const initialDate = new Date("jul 06, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = initialDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      setDays(Math.abs(days));
    }, 1000);
  };

  useEffect(() => {
    setIsClient(true);
    startTime();
  }, []);

  const settings = {
    speed: 2000,
    fade: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
        fontFamily: "fantasy",
      }}
    >
      {isClient && (
        <Slider {...settings} key={"slider"}>
          {images?.map((image, index) => (
            <div
              key={index}
              suppressHydrationWarning
              style={{
                width: "100%",
                maxHeight: 600,
                maxWidth: 400,
              }}
            >
              <Image
                src={image}
                height={600}
                width={400}
                key={index}
                alt={`${index}-image`}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  maxHeight: 600,
                  maxWidth: 400,
                  border: "3px solid",
                  borderRadius: 8,
                  borderImage:
                    "linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%) 1",
                }}
              />
            </div>
          ))}
        </Slider>
      )}
      <div
        style={{
          marginTop: 25,
          flexDirection: "column",
          fontSize: 25,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LinearGradient
          gradient={["to right", "#267cc1 ,#1bb558"]}
          style={{ marginBottom: 25 }}
        >
          Nanda & Leo
        </LinearGradient>
        <LinearGradient
          gradient={["to right", "#267cc1 ,#1bb558"]}
          style={{ textAlign: "center" }}
        >
          Hoje é nosso dia, e eu não poderia estar mais feliz por ter você ao
          meu lado. Cada momento, cada sorriso, cada desafio juntos só fortalece
          o que sentimos um pelo outro. Sou grato por todo amor, cumplicidade e
          felicidade que você traz à minha vida. Que possamos continuar
          caminhando juntos, superando tudo com o coração cheio de amor. Te amo
          hoje, amanhã e sempre!
        </LinearGradient>
      </div>
      <div
        style={{
          marginTop: 50,
          marginBottom: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LinearGradient
          gradient={["to right", "#267cc1 ,#1bb558"]}
          style={{ textAlign: "center", fontSize: 50 }}
        >
          {`${days} Dias <3`}
        </LinearGradient>
      </div>
    </div>
  );
}
