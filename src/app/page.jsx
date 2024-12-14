import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center lg:items-end justify-between h-screen pb-5">
          <div className="flex-col lg:justify-start h-full lg:h-auto  justify-center lg:items-start inline-flex items-center">
            <div className="self-stretch text-white text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider">
              <span>
                Where True{" "}
              </span>
              <span className="text-[#f85a23] ">
                Creativity{" "}
              </span>
              <br />
              <span>
                Bridges{" "}
              </span>
              <span className="text-[#f85a23] ">
                Performance
              </span>
            </div>
            <div className="max-w-3xl text-center text-xs lg:text-left text-white/60 lg:text-lg font-normal tracking-wider">
              <span>
                We’re not just a media agency, we’re{" "}
              </span>
              <span className="text-white ">
                storytellers
              </span>
              <span>
                ,{" "}
              </span>
              <span>
                strategists
              </span>
              <span>
                , and{" "}
              </span>
              <span className="text-white ">
                innovators
              </span>
              <span>
                . Backed by{" "}
              </span>
              <span className="text-white ">
                insights
              </span>
              <span>
                {" "}
                and fueled by{" "}
              </span>
              <span className="text-white ">
                passion
              </span>
              <span>
                .
              </span>
            </div>
          </div>
          <img className="h-10 max-w-min" src="/logo_full.png" alt="" />
        </div>
      </section>




      <section className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-screen pb-5 gap-5">
          <div className="w-full text-white text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider">
              <span>
              how we make a 
              {" "}
              </span>
              <span className="text-[#f85a23] ">
              difference
              </span>
              <br />
            </div>
          <div className="w-full text-center text-xs lg:text-justify text-white/60 lg:text-lg font-normal tracking-wider">
              <span>
              We strategize and craft the <span className="text-white ">
                perfect ads
              </span> tailored to every stage of the marketing funnel.
              <br /><br />

Our approach is <span className="text-white ">
                data-driven
              </span> and backed by <span className="text-white ">
                insights
                </span>.
<br /><br />  
This enables us to optimize <span className="text-white ">
                performance marketing
                </span> efforts for maximum impact, resulting in <span className="text-white ">
                higher conversions
                </span> and <span className="text-white ">
                sales
                </span>.
              </span>
              
            </div>
        </section>


        <Footer/>
    </>
  );
}
