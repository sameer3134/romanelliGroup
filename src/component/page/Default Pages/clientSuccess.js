import React from 'react'

const ClientSuccess = () => {
    const image1_url = "https://media-hosting.imagekit.io//362648716d2c457f/Rectangle1.png?Expires=1834941183&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wyAXBdnajfojUHfICFNOL9rYy-4miSh6jTZL7-MoOxps4kF6pc4783-JUq3OnT2lsEDiupWpcT4lS8tTrtiuV6RaMxlMQCPWX0Raj5WoCtrO2X4VWM~8k~f8iSwIs3ownX1FvYd0F0DEPftI6z4qY945P~o7d6yVONhqZP1cALuqeOJXjgLjFgKGLxcfHrP7AIcQP8nXFZmRbZ5ygJysj~ngPTX4bV5gF55MpAOV-jtVY4rg~Ea5Xen9XlV3MXEiAdzbxAb9IKlaG32ouKPA27BC1yBm5vbgnTrdxqPvokVEMTy0A5a3XTfZOiuX0IFcTwkrSPnB2ria~wQdDd13gw__"
    const image2_url = "https://media-hosting.imagekit.io//bd4e42a44fb34c02/Rectangle2.png?Expires=1834941190&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cNaemro6OVmPjrS1yA2cUs3mMR7TBbif4NDcK5gzcKrHxlIpo5TuvkrUt7kM4m308rD7d-nepCty6O-huARkyIgNrD3bzxp3-YoKxLw56mtJ8~3EWcc6yyJ9u--TldbJfNKOLAArKyBPD7B3K2sVmMQ5BOuDwwwNC6TD-VmnsL2aQbGX5zIKWslt~OuVtX2GY1tJR6X4QzNlS34T8u~QSJZhXgdlAIyUE2NiVWDG9o4ks~qzbuS5kxd-V0OPUhDv5fX0neni4E-iIER0jocdNtuPePllOp0d4zgBXb10aXWemlpt3h-LICdQXf1ngi9Pvrq7rnbIFvNIhlmHLD6Mqw__"
    const image3_url = "https://media-hosting.imagekit.io//ca94fe00a2754de8/Rectangle3.png?Expires=1834941197&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lI9tH9RuvnpmIOwBUadfFBxtdmOVn3muGhT63Bo0JjwtWeOzN-xir3nB9HlwfIFqGBTUTVeWQjyRKVlGS~wu22xeQFT4VpTrxVIO-GA6Rt35EF5jveEoWj6qTjvCY-DFfuUg1b6mIN2TgYM4C-IYPvg2WyYyeSdcYEtNmYjWZzIIZ8joMtX8yc3mrzndLxZmnIeg~MmiHbOIU0p7pfYf70y3MLN9sZpF1ygHLnmXvBoF4GsJ6HG-HIKgNfo3u1R9AjjNC2SFv-7WgbGn-WXn~AX10NNMZY9cCLeGGQ7Gwfn~P92pM~wQQ9v9doRNEwrw582g3wLNaLgJmmiiv7SEgA__"
    const image4_url = "https://media-hosting.imagekit.io//94cf826ec6714f38/Rectangle5.png?Expires=1834941209&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HUEYfnKr0~fWE6AQTUU6h24mCrZBiHnmDZVdiQKhC595C~oPolzaAagCPol1dF8ZP~HOwz1YnOY0r7uCm8oZ0H5F8HrC-gvduDsxTBe8vXQ8mgDfOoAwv6SaayxbMyqhEk0hdc1zzgldVLldMXenanBPuZzHnkTXi9ptzaOR7mXSDjvczXgBh84ieU7WkEASWJRxJiGOfGLHFczNI0MeUwFeUgGjVH8LrqU~OnXVGcPxlxOuVxUPvTUg1ImRvflxrccbc8znvPcSjDJ2sci7YoLqiwd7RfpGqF7b0DW2GfcI4OASgYgkl92~1teib5ewI5wuM4XTodMgD391KM-T1w__"
    const image5_url = "https://media-hosting.imagekit.io//94cf826ec6714f38/Rectangle5.png?Expires=1834941209&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HUEYfnKr0~fWE6AQTUU6h24mCrZBiHnmDZVdiQKhC595C~oPolzaAagCPol1dF8ZP~HOwz1YnOY0r7uCm8oZ0H5F8HrC-gvduDsxTBe8vXQ8mgDfOoAwv6SaayxbMyqhEk0hdc1zzgldVLldMXenanBPuZzHnkTXi9ptzaOR7mXSDjvczXgBh84ieU7WkEASWJRxJiGOfGLHFczNI0MeUwFeUgGjVH8LrqU~OnXVGcPxlxOuVxUPvTUg1ImRvflxrccbc8znvPcSjDJ2sci7YoLqiwd7RfpGqF7b0DW2GfcI4OASgYgkl92~1teib5ewI5wuM4XTodMgD391KM-T1w__"
    const image6_url = "https://media-hosting.imagekit.io//f36dd4b7e3af4fda/Rectangle6.png?Expires=1834941168&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ugr4jjCQGWuwieMpvJb5snSf3cEkc~IpP0ezKayWT0MLortPXS5b0Ca-DGSFHz5V~BPXjGx1MbGx~HQ0RRM3biynCh64pjm3Lmllandoa2xMIyV-Ko6phOXPdEimXW6CbOr93VnpmfVRDvk8pKIW42A-m3SxuvDo9Uav~o6z5tb-aYMch1r2cLkYVTC0XkZ6mZPRZRyG8Ks53bbmCcgIirA6oW3-UhFq16NYGWaQ9zUtocROnSJ7uVBNuzFLk6AhqNbTWshC-OG1YVy5phq7t4SJ0nVuiMtaD1qTs0ZO0rXnnIgu--WgxqHvA7h71rSIPYxgqGgPAHEN3LBSWA~Xnw__"

    const imagecorner_url = "https://media-hosting.imagekit.io//23a5475392574722/reshot-icon-real-estate-law-TPWN63MVS2%201.png?Expires=1834943736&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GRkzLVQvahco95fjAhabSWsYIo6x4Up09DrTXEnnhVVTT6BNUYZp5cXB7s3wdmY4CCCMeEBOsMiYl6zIE40uHELjpybBiiWhsaqjHMBzgNFIMNDQYbOvIaVH36KD4TtDWkYIEttUiZpPs7WYcephBqUIm-wzJR-kqHvI1gYgrOE1696iHVt~4r3iOB9YhRJw3ZTy9BJleGl0dPCo1UDU2e3p0m5AXFrrXIAa6F--~HB0crrgre~1nBW25qohsOdyffv41kyWFDVyhuRmtfpqCnkQHQiWJYC6thusxMDwwDfqgYPBfdjbahHZgGiyN-LY5g4ZsjUzxLBNff2Hs42sFQ__"
    const imageLocation_url = "https://media-hosting.imagekit.io//f2e035b558694ede/80-Location.png?Expires=1834944138&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Q8HC9pfqEYRWhyQV9zJ53HSd2g1-ADaqhq3okY774TRFtFWlj5PijVKl3ygA2JqhuU0IhADjCMhlx-aKFPRqLg18kj7ysR8EqHTpekriQ1R4ea741PGe3Ml6qBjeoKh9l-wbeGsmum7I6W1PHy75o-QW-XMZBAzoOBKZlDDUArKWuM6vREn8zFHomSkJO~TeBJGUJxRVf8BoVlfXhZbMabSJSDYMSWDAE6DAze5COdKR1GQ3kHilFsFgJSJIuM-mWnf5o5Bl~lgSoNUoxatvHTNEhGbzZ3xJXpZJgfoHSZ4GZbJ11fVwJfvIJFDnjodzTaIs3hy6LBXAgSlowOjpJg__"
    const imageBidding_url = "https://media-hosting.imagekit.io//3f73e274d3404bbe/reshot-icon-house-QSH8J9MA53%201.png?Expires=1834944700&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jSWklo~beRQkpLDOeJpMO-H6Xm4EIsgiJHfrokYuuW6K6Iw1M1ykgOJo8xwxpNac~mzLVnKMURySoPuK-CRZjtYF72j1Hh5jP1vvTroXyYNzEiikBiyAc2YbD~aAsK~TnikV8XlpCs68rLKcvvL-4iu0B2k~dL7mqTuLOOjdCnmDoQMDQy95V8g7OzvQm4u9NWrIFVIrp2ZUl7fTnT4DYiIiue1BXgGyFJtJcpg1PV7EyFhcAWL~wZHE9j~dTPI5rSqwO5G0RsamKYYEPn~r1cmF-P73M6SqVI4m-N~I9464C3kYjPQmMl4Vk8~b6wi7~FU7xvNbd0owMmNQagfVow__"
    const imageAuction_url = "https://media-hosting.imagekit.io//7ee4727ffab9462c/reshot-icon-auction-A9X3SD6PQ2%201.png?Expires=1834944757&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vTd2ey2hL9eQETCB94hVx9AiUsf3ikIqCwT4uBGV2899EkAJR58gyKkmhHMA2hVYp1lC-ZnGS74RovGf2jCFfHETuS1m~ThhJhuoYfTuYaPL-93pPkY66zwSrY7vsYUmM2oMKzKqHByWNwgR-rXvSuYBCORt3IVFL5vWA6vTD7MIQbiYw2rEYMvbVCfB9NpA7TypHkwdC6xAgHXbs4J6GvWE59u~AcT1Gv~eK6TizCW-jph5izgR7rDjkPVksfHJO595iaPHZDayRX-e8OmEV1HqyL6Vxk5J2O2knnj4yDPj1NqXojPT~SqqBe7Mz8tYgf95jb6ix5RBtWZW3tJPcQ__"
    return (
        <div className='bg-backgroundColor text-white'>
            <div className="container px-5 pt-12 mx-auto ">
                <div className="flex flex-col text-center w-full">
                    <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 ">
                        Celebrating Our Clients  <span className="italic font-playfair">Success Stories</span>
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
                        Explore our proudest moments—because every sold home is a success story we’re honored to be part of.s just a quick sneak peak into some of the smiling faces of my happy past clients.
                    </p>
                </div>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-6 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="md:w-1/3 p-1 w-full">
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image1_url} />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={imagecorner_url} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>
  <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>
                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={imageLocation_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'> 123 Elm Street, Central Ohio</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageBidding_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'> Sold for $450,000</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageAuction_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'> Sold in 10 days!</span></h3>
                                    </div>
                                </div>
                            </a>
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image2_url} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">

                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={imagecorner_url} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>


                                    {/* Transparent Top Section */}
                                    <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>

                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={imageLocation_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'> 123 Elm Street, defCentral Ohio</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageBidding_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'> Sold for $41,000</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageAuction_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'> Sold in 6 days!</span></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="md:w-1/3 p-1 w-full">
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image3_url} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">

                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={imagecorner_url} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>


                                    {/* Transparent Top Section */}
                                    <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>

                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={imageLocation_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'> 123 Elm Street, Ohio</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageBidding_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'> Sold for $10,000</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageAuction_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'> Sold in 4 days!</span></h3>
                                    </div>
                                </div>
                            </a>
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image4_url} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">

                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={imagecorner_url} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>


                                    {/* Transparent Top Section */}
                                    <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>

                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={imageLocation_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'> 123 Elm Street, Central Ohio</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageBidding_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'> Sold for $450,000</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageAuction_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'> Sold in 10 days!</span></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="md:w-1/3 p-1 w-full">
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image5_url} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">

                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={imagecorner_url} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>


                                    {/* Transparent Top Section */}
                                    <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>

                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={imageLocation_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'> 123 Elm Street, Central Ohio</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageBidding_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'> Sold for $450,000</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageAuction_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'> Sold in 10 days!</span></h3>
                                    </div>
                                </div>
                            </a>
                            <a className="block relative p-1 rounded overflow-hidden group">
                                {/* Image */}
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image6_url} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">

                                    {/* Button in Top-Right Corner */}
                                    <button className="absolute top-5 right-5 flex items-center gap-2 bg-red-800 text-gray-200 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                        <img src={imagecorner_url} className="w-6 h-6" alt="Icon" />
                                        <span>Bidding War Winner!</span>
                                    </button>


                                    {/* Transparent Top Section */}
                                    <div className="absolute top-0 left-0 w-full h-1/5 md:1/3 lg:1/4 bg-transparent"></div>

                                    {/* Content at Bottom */}
                                    <div className="text-black absolute bottom-0 left-0 w-full 1/4 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-red-800 flex"><img src={imageLocation_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-red-800  " alt="Icon" /><span className='ml-4'> 123 Elm Street, Central Ohio</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageBidding_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-orange-400  " alt="Icon" /><span className='ml-4'> Sold for $450,000</span></h3>
                                        <h3 className="text-[12px] lg:text-xl font-semibold text-black flex mt-1"><img src={imageAuction_url} className="xl:w-8 xl:h-8 w-4 h-4 p-1 xl:p-2 bg-black  " alt="Icon" /><span className='ml-4'> Sold in 10 days!</span></h3>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ClientSuccess