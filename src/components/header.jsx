const Header = () => {
  return (
    <header className="flex justify-around items-center pt-5 bg-white   ">
      <div className="logo flex justify-center items-center gap-2">
        <img src="/src/assets/image 48.svg" alt="" />
        <div className="text-[22px]  font-[700] text-black"><span className="text-[#8540F5]">Talk </span> Business</div>
      </div>

      <nav className="flex gap-14 justify-center items-center">
        <a href="#" className="text-black text-base font-semibold">
          Home
        </a>
        <a href="#" className="text-black text-base font-semibold ">
          About
        </a>
        <a href="#" className="text-black text-base font-semibold">
          Services
        </a>
        <a href="#" className="text-black text-base font-semibold">
          Systems
        </a>
        <a
        href="#"
        className="px-8 py-4 border-2 text-base font-semibold border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white"
      >
        Contact us
      </a>
      </nav>
     
    </header>
  );
};
export default Header;
