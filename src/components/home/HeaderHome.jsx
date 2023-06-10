import { useState, useEffect, useCallback } from "react";
import ImgHeroDesktop1 from "../../assets/desktop-image-hero-1.jpg";
import ImgHeroDesktop2 from "../../assets/desktop-image-hero-2.jpg";
import ImgHeroDesktop3 from "../../assets/desktop-image-hero-3.jpg";
import ImgHeroMobile1 from "../../assets/mobile-image-hero-1.jpg";
import ImgHeroMobile2 from "../../assets/mobile-image-hero-2.jpg";
import ImgHeroMobile3 from "../../assets/mobile-image-hero-3.jpg";
import IconArrowLeft from "../icons/IconArrowLeft";
import IconArrowRight from "../icons/IconArrowRight";
import ArticleHome from "./ArticleHome";

const ARTICLESHERO = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    imgDesktop: ImgHeroDesktop1,
    imgMobile: ImgHeroMobile1,
  },
  {
    id: 2,
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    imgDesktop: ImgHeroDesktop2,
    imgMobile: ImgHeroMobile2,
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    imgDesktop: ImgHeroDesktop3,
    imgMobile: ImgHeroMobile3,
  },
];

const HeaderHome = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = useCallback(() => {
    if (index === 0) {
      setIndex(ARTICLESHERO.length - 1);
    } else {
      setIndex(index - 1);
    }
  }, [index]);

  const handleNext = useCallback(() => {
    if (index === ARTICLESHERO.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, [index]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handlePrev, handleNext]);

  return (
    <header className="grid grid-cols-[10fr_10fr_8.5fr] grid-rows-[10fr_1.7fr_10fr] lg:grid-cols-[1fr_1fr_1fr_1fr_0.7fr_1fr_1fr] lg:grid-rows-[10fr_1.5fr]">
      <ArticleHome hero={ARTICLESHERO[index]} />
      <div className="flex bg-black text-white col-start-3 col-end-4 row-start-2 row-end-3 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3">
        <button className="w-full hover:bg-veryDarkGray" onClick={handlePrev}>
          <IconArrowLeft className="mx-auto" />
        </button>
        <button className="w-full hover:bg-veryDarkGray" onClick={handleNext}>
          <IconArrowRight className="mx-auto" />
        </button>
      </div>
    </header>
  );
};

export default HeaderHome;
