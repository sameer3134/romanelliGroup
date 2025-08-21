import React from 'react'
import Pag2 from "../component/page/home/pag2";
import FirstPageBuy from "../component/page/buy/firstPageBuy";
import FirstPageSell from "../component/page/sell/firstPageSell";
import FirstPageContact from "../component/page/contactUs/firstPageContact";
import FirstPageProperties from "../component/page/properties/firstPageProperties";
import FirstPageResource from "../component/page/resources/firstPageResource";

const Pages = ({page}) => {
  return (
    <div>
         {page == "Home" &&
            <Pag2 />
          }
          {page == "Buy" &&
          <FirstPageBuy/>}
            {page == "Sell" &&
          <FirstPageSell/>}
           {page == "Contact Us" &&
          <FirstPageContact/>}
          {page == "Properties" &&
          <FirstPageProperties/>}
           {page == "Resources" &&
          <FirstPageResource/>}
    </div>
  )
}

export default Pages