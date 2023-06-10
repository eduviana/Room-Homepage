import ImgAboutDark from "../../assets/image-about-dark.jpg";
import ImgAboutLight from "../../assets/image-about-light.jpg";
const MainHome = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_1fr_0.7fr_1fr_1fr]">
        <img
          src={ImgAboutDark}
          alt=""
          className="lg:col-span-2 w-full h-full"
        />
        <section className="px-8 py-10 lg:col-span-3 lg:px-12 lg:py-16 flex flex-col justify-center">
          <h2 className="font-bold text-base uppercase tracking-[0.3rem] mb-4">
            About our furniture
          </h2>
          <p className="text-darkGray">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </section>
        <img
          src={ImgAboutLight}
          alt=""
          className="lg:col-span-2 w-full h-full"
        />
      </main>
  )
}

export default MainHome