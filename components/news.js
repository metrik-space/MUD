import { BsArrowRight } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const News = () => {
  return (
    <div className="bg-white w-screen h-auto">
      <div className="flex-1 lg:container mt-20 px-4 mx-auto md:px-6 md:py-12 md:mt-10 lg:mt-10 flex-col justify-center">
        <div className="block md:flex md:flex-row lg:flex lg:flex-row  justify-between">
          <Fade>
            <h3 className="font-space_grotesk_bold ml-0 lg:ml-5 text-5xl">
              Latest News
            </h3>
            <button className="transition duration-500 ease-in-out hover:bg-dark_blue hover:text-cyan mr-0 md:mr-5 lg:mr-5 my-4 md:my-0 lg:my-0 flex flex-row font-space_grotesk_bold text-base border-2 border-dark_blue h-10 p-2">
              VIEW ALL{" "}
              <BsArrowRight className="text-2xl text-cyan ml-1 -mt-1" />
            </button>
          </Fade>
        </div>
        <div className="flex flex-col lg:flex-row py-10">
          {articles.map((a, key) => {
            return (
              <div
                className="group flex-col justify-center relative p-0 py-5 md:py-10 lg:py-5 lg:px-5 w-full"
                key={key}
              >
                <Fade>
                  <div>
                    <p
                      className={`${
                        a.type === "NEWS" ? "bg-yellow" : "bg-cyan"
                      } absolute text-base lg:top-5 lg:left-5 font-space_grotesk_bold p-1 md:text-3xl lg:text-xs`}
                    >
                      {a.type}
                    </p>
                    <img src={a.image} className="w-full h-auto"></img>
                    <div className="w-11/12 h-3/6 border-2 border-dark_blue absolute z-negative top-14 left-2 opacity-0 group-hover:opacity-100" />
                  </div>
                  <p className="font-space_grotesk_regular text-base md:text-2xl lg:text-base py-3">
                    {a.date}
                  </p>
                  <h4
                    style={{
                      textUnderlinePosition: "under",
                      textDecorationColor: "#00C9FF",
                      textUnderlineOffset: "1px",
                      textDecorationThickness: "4px",
                    }}
                    className="font-space_grotesk_bold text-2xl md:text-5xl lg:text-3xl group-hover:underline"
                  >
                    {a.title}
                  </h4>
                </Fade>
              </div>
            );
          })}
        </div>
        <Fade>
        <div className="hidden lg:flex flex-col justify-center border-dark_blue border-2 p-10">
          <div className="flex flex-row justify-between">
              <div className="h-full w-auto flex-col justify-center p-6">
          <h1 className="font-space_grotesk_bold text-2xl">Interested in consuming our services?</h1>
          <p className="font-space_grotesk_regular text-xl">Get in touch and we’ll put you in touch with one of registered suppliers.</p>
              </div>
              <div className="group flex flex-row z-20 justify-center p-3 lg:p-6 w-30 lg:h-auto relative">
          <button
            className={`transition duration-500 ease-in-out w-15 h-auto m-auto bg-yellow font-space_grotesk_bold text-sm md:text-3xl lg:text-xs border-2 border-black relative px-10 md:px-10 lg:px-5  py-2 md:py-5 lg:py-3 group-hover:text-yellow group-hover:bg-dark_blue`}
          >
            <div className="transition duration-500 ease-in-out w-full h-full border-black absolute z-negative border-2 top-2.5 -left-2.5 group-hover:opacity-0"></div>
            FIND OUT MORE
          </button>
        </div>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

const articles = [
  {
    image: "/news1.png",
    title: "Where are you on the journey to safe remote work, really?",
    date: "25th November 2021",
    type: "NEWS",
  },
  {
    image: "/news2.png",
    title: "Virtual1 launches high bandwidth services nationwide",
    date: "25th November 2021",
    type: "NEWS",
  },
  {
    image: "/news3.png",
    title: "How strong is your patch-game?",
    date: "25th November 2021",
    type: "BLOG",
  },
];

export default News;
