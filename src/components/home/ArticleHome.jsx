import { useEffect, useState } from "react";

import IconArrowShop from "../icons/IconArrowShop";

const ArticleHome = ({ hero }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    handleMediaQueryChange(mediaQuery); 

    mediaQuery.addEventListener("change", handleMediaQueryChange); 

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange); 
    };
  }, []);
  return (
    <>
      <img
        src={isMobile ? hero.imgMobile : hero.imgDesktop}
        alt={hero.title}
        className="w-full h-full col-start-1 col-end-4 row-start-1 row-end-3 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3"
      />
      <article className="col-start-1 col-end-4 row-start-3 row-end-4 flex flex-col items-start justify-center px-8 py-16 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 lg:px-16 ">
        <h1 className="font-bold text-4xl mb-4">{hero.title}</h1>
        <p className="text-darkGray mb-8">{hero.description}</p>
        <button className="flex items-center hover:text-gray-500 hover:fill-darkGray fill-black">
          <span className="font-bold mt-1 text-base uppercase tracking-[1rem] hover:darkGray">
            Shop now
          </span>
          <IconArrowShop />
        </button>
      </article>
    </>
  );
};

export default ArticleHome;
