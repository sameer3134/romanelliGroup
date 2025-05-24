import React from 'react'
import { icon1_url, icon2_url, icon3_url, image1_url, image2_url } from '../../../assets/allImg'

const Succeed = () => {

     return (
    <div>
        <section class=" body-font text-backgroundColor">
        <div class="container px-5 lg:px-24 pt-8 mx-auto ">
          <div class="flex flex-wrap w-full">
            <div class="lg:w-1/2 w-full   font-bold lg:mb-0 text-left ml-4 lg:ml-8">
              <h1 class="sm:text-5xl text-2xl title-font mb-2">How We Can Help </h1>
              <h1 class="sm:text-5xl text-2xl title-font mb-2">You <span className='font-playfair italic'>Succeed</span></h1>
            </div>
            </div></div></section>
            <section class="text-gray-600 body-font  lg:px-24 px-5">
  <div class="container flex flex-wrap px-5 mx-auto ">
    <div class="md:w-1/2  md:py-8  mb-10 md:mb-0 pb-10">
      <p class="leading-relaxed xl:px-4 text-lg text-left xl:pr-6 pb-4">Whether you're buying, selling, or growing your career, we’re here to guide you every step of the way.</p>
      <div class="container flex flex-wrap  mx-auto ">
      <div class="md:w-1/2 w-full  md:py-8 mb-10 md:mb-0 pb-10 ">
      <img src={image1_url} alt="ss"/></div>
      <div class="md:w-1/2 w-full md:pt-40 md:py-8 mb-10 md:mb-0 pb-10 ">
      <img src={image2_url} alt="ss"/></div>
      </div>
    </div>
    <div class="flex flex-col md:w-1/2 md:pl-12">
    <section class="text-gray-600 body-font">
  <div class="container px-5 mx-auto md:mb-4 xl:mb-0">
    <div class="flex flex-wrap sm:-m-4 -mx-4  -mt-4 md:space-y-0 space-y-6 text-left">
      <div class="p-4 flex bg-gray-100">
        <div class="w-12 h-12 inline-flex items-center justify-center  bg-red-800 text-indigo-500 mb-4 flex-shrink-0">
         <img src={icon1_url}/>
        </div>
        <div class="flex-grow pl-6 ">
          <h2 class="text-gray-900 text-xl title-font font-semibold mb-2">Buy Your New Home</h2>
          <p class="leading-relaxed text-base text-black">On the hunt for your dream family home or the perfect investment property in Central Ohio? We've got the keys to your next big win!</p>
          <button onClick={() => window.location.href = "/buy"}  className='bg-black text-white text-xs md:text-sm px-5 py-2 my-1 rounded-md'>Buy a Property</button>
        </div>
      </div>
      <div class="p-4 flex bg-gray-100">
        <div class="w-12 h-12 inline-flex items-center justify-center  bg-red-800 text-indigo-500 mb-4 flex-shrink-0">
         <img src={icon2_url}/>
        </div>
        <div class="flex-grow pl-6 ">
          <h2 class="text-gray-900 text-xl title-font font-semibold mb-2">Sell Your Home Faster</h2>
          <p class="leading-relaxed text-base text-black">In a market that's moving at warp speed, how do you crack the best deal? Let us help your property steal the spotlight and get you top dollar!</p>
          <button  onClick={() => window.location.href = "/sell"} className='bg-black text-white text-xs md:text-sm px-5 py-2 my-1 rounded-md'>Get a Free Valuation</button>
        </div>
      </div>
      <div class="p-4 flex bg-gray-100">
        <div class="w-12 h-12 inline-flex items-center justify-center  bg-red-800 text-indigo-500 mb-4 flex-shrink-0">
         <img src={icon3_url}/>
        </div>
        <div class="flex-grow pl-6 mb-0">
          <h2 class="text-gray-900 text-xl title-font font-semibold mb-2">Grow Your Career</h2>
          <p class="leading-relaxed text-base text-black">After almost 10 years of selling real estate, I’ve figured out how to create extraordinary experiences for agents without running yourself ragged, having to sacrifice your family or struggle to grow your business.</p>
          <button className='bg-black text-white text-xs md:text-sm px-5 py-2 my-1 rounded-md'>Join Our Team</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  </div>
</section>
    </div>
  )
}

export default Succeed