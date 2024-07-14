import React from "react";

const Section3 = () => {
  return (
    <div className="Section3">
      <section className="pb-36 pt-24 px-11 bg-orange-950 w-full">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full xs:w-[100%] sm:w-[100%] md:w-1/3 lg:w-1/3 xl:w-1/3 px-7 h-96">
              <div className="rounded-2xl bg-red-200 p-5 h-full text-center">
                <div className="-mt-36 inline-block">
                  <img
                    src="public/coco-cola.png"
                    alt="coco-cola"
                    className="h-80 w-96"
                  />
                </div>
                <div>
                  <h4 className="text-dark font-bold text-3xl uppercase text-center">
                    Coco-cola
                  </h4>
                  <button className="rounded-3xl bg-orange-400 w-48 py-4 font-bold mt-7">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full xs:w-[100%] sm:w-[100%] md:w-1/3 lg:w-1/3 xl:w-1/3 px-7 h-96 grid ">
              <div className="rounded-2xl bg-orange-100 w-full p-5 h-full text-center place-content-around">
                <div className="-mt-36 inline-block w-full"></div>
                <div>
                  <h4 className="text-dark font-bold text-3xl uppercase text-center">
                    fanta
                  </h4>
                  <button className="rounded-3xl bg-orange-400 w-48 py-4 font-bold mt-7">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full xs:w-[100%] sm:w-[100%] md:w-1/3 lg:w-1/3 xl:w-1/3 px-7 h-96">
              <div className="rounded-2xl bg-lime-100 p-5 h-full text-center">
                <div className="-mt-36 inline-block">
                  <img
                    src="public/sprite.png"
                    alt="coco-cola"
                    className="h-80 w-96"
                  />
                </div>
                <div>
                  <h4 className="text-dark font-bold text-3xl uppercase text-center">
                    sprite
                  </h4>
                  <button className="rounded-3xl bg-orange-400 w-48 py-4 font-bold mt-7">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
