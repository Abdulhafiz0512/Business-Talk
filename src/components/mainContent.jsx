import Pagination from "./pagination";

const MainContent = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-4 mt-[143px]">
      <h2 className="font-bold text-[64px] leading-[74px] text-black text-center max-w-[608px]">Become a better business with us.</h2>
      <p className="font-normal text-[21px] leading-9 text-black text-center max-w-[608px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis
        tortor, ultricies ut justo eu.
      </p>
      <button className="bg-[#8540F5] text-white text-5 font-semibold py-4 px-[67px] rounded-[150px] mt-[31px] hover:bg-white hover:border-[#8540F5] hover:border-2 hover:text-[#8540F5]">Our Business</button>
    </div>
    <img src="/src/assets/brooke-cagle-uWVWQ8gF8PE-unsplash 1.png" alt="" className="w-full mt-[182px] mb-[190px]"/>
    <div className="flex justify-center items-center flex-col" >
        <h3 className="font-bold text-[58px] leading-[70px] text-black max-w-[850px]">Here is what’s happening in the world of talk business.</h3>
        <div className="cards flex flex-col gap-[68px] mt-[197px]">
            <div className="card flex gap-12">
                <div className="textcon max-w-[230px] flex flex-col gap-6">
                    <p className="text-[#6610F2] font-bold text-base leading-5 tracking-[17%]">MAY 2021</p>
                    <h4 className="text-black font-bold text-2xl ">Agile focused business services and more.</h4>
                </div>
                <img src="/src/assets/bench-accounting-C3V88BOoRoM-unsplash 1.png" alt="" />

            </div>
            <div className="card flex gap-12">
                <div className="textcon max-w-[230px] flex flex-col gap-6">
                    <p className="text-[#6610F2] font-bold text-base leading-5 tracking-[17%]">JUN 2021</p>
                    <h4 className="text-black font-bold text-2xl ">Agile focused business services and more.</h4>
                </div>
                <img src="/src/assets/andrew-neel-cckf4TsHAuw-unsplash.png" alt="" />

            </div>
            <div className="card flex gap-12">
                <div className="textcon max-w-[230px] flex flex-col gap-6">
                    <p className="text-[#6610F2] font-bold text-base leading-5 tracking-[17%]">JUL 2021</p>
                    <h4 className="text-black font-bold text-2xl ">Agile focused business services and more.</h4>
                </div>
                <img src="/src/assets/jonathan-francisca-YHbcum51JB0-unsplash.png" alt="" />

            </div>
        </div>
    </div> 
    <div className="mt-[38px]  flex flex-col items-center justify-center">
      <Pagination totalPages={3} />
    </div>
    </>
    
  );
};
export default MainContent
