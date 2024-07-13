import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="container p-[40px]">
    <div className="flex flex-col gap-2 h-[250px] w-[250px] border-2 items-center p-3 font-mono rounded-md bg-white" >
      <div className="circle w-[50px] h-[50px] rounded-full bg-gray-500 text-center"></div>
      <h1 className="text-base text-center">Headline</h1>
      <p className="text-xs text-center text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
        architecto! Quos amet impedit facere debitis animi numquam vel dolores
        consequatur perspiciatis, nostrum laborum, aut voluptatibus dicta, optio
        voluptas laudantium consequuntur.
      </p>
    </div>
    </div>
  );
}

export default App;
