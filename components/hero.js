import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="bg-white w-screen z-background h-auto lg:rounded-b-curved_bottom pb-20">
    <div className="flex-1 lg:container mt-16 px-4 mx-auto md:px-6 md:py-12 md:mt-10 lg:mt-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 grid-cols-1 ">
        <div className="flex flex-col justify-center order-2 lg:order-1 m-auto">
          <Fade up delay={500}>
            <h1 className="text-dark_blue  text-xs_heading md:text-8xl lg:text-l_heading font-space_grotesk_bold">
              Bye Bye Legacy.
            </h1>
            <h1 className="text-cyan text-xs_heading md:text-8xl  lg:text-l_heading leading-8 font-space_grotesk_bold">
              Hello legendary.
            </h1>
          </Fade>

          <Fade up delay={1000}>
            <p className="text-dark_blue pt-10 font-space_grotesk_regular text-2xl md:text-4xl lg:text-xl lg:pt-10">
              Why make do with so-so network solutions, when you can make an
              impact with us. We challenge conventions of network normality to
              deliver connectivity that’s better, simpler and more enjoyable to
              use.
            </p>
            <p className="text-dark_blue pt-8 font-space_grotesk_bold text-2xl md:text-4xl lg:text-2xl md:pb-6">
              Our mission? To help power your business forward - towards
              tomorrow.
            </p>
          </Fade>
        </div>
        <img
          src="/heroimg.png"
          className="object-contain w-full h-auto order-1 lg:order-2"
        />
      </div>
      <div  className="flex flex-col justify-center relative lg:flex-row mt-10 md:mt-10 lg:mt-0 z-10">
        <div className="group p-4 lg:p-6 w-30 h-auto relative">
          <button
            className={`transition duration-500 ease-in-out w-full h-auto bg-cyan font-space_grotesk_bold text-m md:text-3xl lg:text-xl border-2 border-black relative px-10 md:px-20 lg:px-20  py-2 md:py-5 lg:py-5 group-hover:text-cyan group-hover:bg-dark_blue`}
          >
            <div className="transition duration-500 ease-in-out  w-full h-full border-black absolute z-negative border-2 top-2.5 -left-2.5 group-hover:opacity-0"></div>
            VIRTUAL1 FOR RESELLERS
          </button>
        </div>
        <div className="group p-3 lg:p-6 w-30 lg:h-auto relative">
          <button
            className={`transition duration-500 ease-in-out w-full h-auto bg-yellow font-space_grotesk_bold text-m md:text-3xl lg:text-xl border-2 border-black relative px-10 md:px-20 lg:px-20  py-2 md:py-5 lg:py-5 group-hover:text-yellow group-hover:bg-dark_blue`}
          >
            <div className="transition duration-500 ease-in-out w-full h-full border-black absolute z-negative border-2 top-2.5 -left-2.5 group-hover:opacity-0"></div>
            VIRTUAL1 FOR CARRIERS
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
