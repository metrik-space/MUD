import Fade from "react-reveal/Fade";
import Slider from "react-slick";

const Network = () => {
  const settings = {
    dots: true,
    dotClass: 'dots',
    arrows: false,
    autoplay: true,
  };

  return (
    <div className=" w-full h-auto overflow-hidden flex-col justify-center">
      <div className="flex-1 lg:container my-20 px-4 mx-auto md:px-6 md:py-12 md:my-20 lg:my-20">
        <Fade>
          <h1 className="text-white text-center font-space_grotesk_bold text-4xl md:text-6xl lg:text-4xl">
            Enjoy the freedom of our network
          </h1>
        </Fade>
        <div className="hidden lg:flex lg:flex-row">
          {sellingPoints()}
        </div>
        <div className="mb-10 lg:hidden">
          <Slider {...settings}>{sellingPoints()}</Slider>
        </div>
        <div className="group flex flex-row z-20 justify-center p-3 lg:p-6 w-30 lg:h-auto relative">
          <button
            className={`transition duration-500 ease-in-out w-25 h-auto m-auto bg-yellow font-space_grotesk_bold text-m md:text-3xl lg:text-sm border-2 border-black relative px-10 md:px-10 lg:px-10  py-2 md:py-5 lg:py-5 group-hover:text-yellow group-hover:bg-dark_blue`}
          >
            <div className="transition duration-500 ease-in-out w-full h-full border-black absolute z-negative border-2 top-2.5 -left-2.5 group-hover:opacity-0"></div>
            MORE ABOUT OUR NETWORK
          </button>
        </div>
      </div>
    </div>
  );
};

const sellingPoints = () => {
  const points = [
    {
      title: "Selling Point One",
      content:
        " Sagittis nibh eu, vestibulum urna. Maecenas porttitor arcu in tellus at viverra leo semper.",
    },
    {
      title: "Selling Point Two",
      content:
        " Sagittis nibh eu, vestibulum urna. Maecenas porttitor arcu in tellus at viverra leo semper.",
    },
    {
      title: "Selling Point Three",
      content:
        " Sagittis nibh eu, vestibulum urna. Maecenas porttitor arcu in tellus at viverra leo semper.",
    },
  ];

  return points.map((p, key) => {
    return (
      <div className="flex flex-col p-10 lg:p-20" key={key}>
        <Fade delay={500}>
          <div className="rounded-full w-44 h-44 bg-white border-2 border-dark_blue m-auto md:w-80 md:h-80 lg:w-44 lg:h-44" />
          <h3 className="font-space_grotesk_bold text-center text-2xl py-3 md:text-5xl lg:text-2xl">
            {p.title}
          </h3>
          <p className="font-space_grotesk_regular text-center text-m md:text-3xl lg:text-lg">
            {p.content}
          </p>
        </Fade>
      </div>
    );
  });
};

export default Network;
