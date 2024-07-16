import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#160530] px-16 pt-[70px] mt-[138px] pb-[50px]">
      <div className="title">
        <h2 className="font-semibold text-[58px] text-white">
          Let’s start working to build a brighter future.
        </h2>
      </div>
      <div className="mailbox flex justify-end bg-inherit mt-[11px]">
        <div className="mail border-[1px] border-solid border-[#E0CFFC] bg-inherit">
          <input type="text" className="bg-inherit text-white border-none outline-none p-[25px] placeholder:text-white mr-[228px] placeholder:text-[21px] placeholder:font-normal" placeholder="Join our mailing list "  />
          <button className="text-white p-[25px] border-none outline-none text-[21px] font-normal">Submit</button>
        </div>
      </div>
      <div className="blabla flex flex-col gap-8 mt-[67px]">
        <p className="text-white max-w-[450px] text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum posuere eget elementum vulputate elementum viverra sapien tellus aenean.</p>
        <ul className="flex text-white gap-8">
            <li>Fb</li>
            <li>In</li>
            <li>Tw</li>
            <li>Ln</li>
        </ul>
      </div>
      <div className="foot mt-[120px] flex justify-around items-center">
        <div className="right flex  items-center gap-2 flex-1">
            <img src="/src/assets/image 50.svg" alt="" />
            <p className="font-bold text-[21px] text-white">New Business</p>
        </div>
        <p className="font-normal text-sm text-white">Copyright 2021. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
