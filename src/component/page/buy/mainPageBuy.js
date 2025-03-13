import { useEffect } from "react";
import FeaureListing from "../Default Pages/feaureListing";
import NumberSpeak from "../Default Pages/numberSpeak";
import ClientSay from "../Default Pages/clientSay";
import RoadMap from "./roadMap";

const MainPageBuy = () => {


  return (
    <div>
      <FeaureListing />
      <NumberSpeak />
      <ClientSay />
      <RoadMap />
    </div>
  );
};

export default MainPageBuy;

// style.innerHTML = `
// .__hblgw--button-container-light-mode-theme {
//     box-sizing: inherit;
//     position: absolute;
//     z-index: 102;
//     right: 0px;
//     top: 0px;
//     bottom: 0px;
//     height: 5px;
//     cursor: pointer;
//     color: rgb(255, 255, 255);
//     background-color: rgb(46, 44, 50);
//     border: none;
//     font-size: 0.75rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     margin: 5px 5px 5px 5px;
//     width: 84px;
//     border-radius: 0px 0px -10px 0px;
//     appearance: none;
//     transition: 0.2s cubic-bezier(0.05, 0.69, 0.14, 1);
// }
// `;
