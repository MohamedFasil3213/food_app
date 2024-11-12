import './Product.css'
import { FaPlus, FaStar } from "react-icons/fa"
import { RxDotsHorizontal } from "react-icons/rx"
import { TiArrowBackOutline } from "react-icons/ti"
import { BsPlusLg } from "react-icons/bs";
import { PiMinusLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import useFarmerMotion from "../../Hooks/useFarmerMotion";
import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useEffect } from 'react';

const PopularProduct = () => {
    const navigate = useNavigate();
    const { topSideVariants, topAnimShakeVariants } = useFarmerMotion();

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className="Popular__Product p-2 lg:w-4/5 lg:mx-auto">
            <div className="grid grid-cols-[max-content,1fr,max-content] gap-2 p-2 md:p-4 items-center">
                <TiArrowBackOutline className="text-2xl text-green-800 hover:scale-95 transition-all" onClick={() => navigate(-1)} />
                <div className="text-center text-lg flex items-center gap-1 place-content-center">Popular Food
                    <img className="h-4 aspect-square" src="https://em-content.zobj.net/source/whatsapp/396/fire_1f525.png" alt="" />
                </div>
                <RxDotsHorizontal className="text-2xl text-green-800" />
            </div>
            <motion.div variants={topSideVariants} initial='initial' animate='animate'
                className="px-3 md:px-5">
                <div className="grid p-2 gap-2">
                    <h1 className="text-xl font-bold text-center pb-2 text-green-800">Chinese Restaurant</h1>
                    <div className='block lg:grid lg:gap-10 lg:grid-cols-2 lg:items-center'>
                        <div className='pt-2'>
                            <div className="relative">
                                <img className="w-full rounded-2xl h-40 md:h-80 object-contain"
                                    src="https://static.vecteezy.com/system/resources/previews/025/067/612/non_2x/sushi-with-ai-generated-free-png.png" alt="" />
                                <button className="absolute left-1/2 bottom-0 translate-x-[-50%] p-3 bg-green-800 rounded-full hover:scale-95 transition-all">
                                    <FaPlus className="text-lg text-white" />
                                </button>
                            </div>
                            <div className="grid gap-1 items-center justify-center text-center py-3 md:py-5">
                                <h1 className="text-xl md:text-2xl font-medium">Sake Sushi</h1>
                                <div className="text-sm md:text-base font-medium">$4.99</div>
                                <div className="flex gap-1 place-items-center justify-center text-xs text-slate-600">
                                    <FaStar className="text-yellow-400" />4.9
                                    <span className="text-[10px] text-slate-500">(109 review)</span>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="p-5 md:p-7 border shadow-md rounded-lg">
                                <div className="text-xs font-medium flex gap-1 items-center">
                                    <MdStars className="text-xl rounded-full text-green-800" /><span>4.1 (124 review)</span>
                                </div>
                                <h2 className="text-[10px] text-orange-500 underline font-medium pt-1">Sushi</h2>
                                <div className="grid gap-1 grid-cols-[max-content,1fr] pt-3">
                                    <div className="relative text-green-700 grid gap-4">
                                        <GoDotFill className="text-lg" />
                                        <GoDotFill className="text-lg" />
                                        <span className="w-[1px] h-10 bg-green-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                                    </div>
                                    <div className="text-xs font-semibold grid gap-4">
                                        <h2 className="flex gap-2">Outlet<span className="font-normal text-slate-700">Kochi</span></h2>
                                        <h2>30-35 mins</h2>
                                    </div>
                                </div>
                                <p className="pt-4 text-slate-600 text-[10px]">
                                    <span className="text-xs font-semibold text-slate-800">Far (5 kms) |</span> Additional delivery free will apply
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-24"></div>
            </motion.div>
            {/* === Bottom footer ===  */}
            <motion.footer variants={topAnimShakeVariants} initial='initial' animate='animate'
                className="fixed  z-10 w-full left-0 -bottom-[4.7rem] lg:-bottom-[5.3rem] p-4 md:p-6 pb-24 md:pb-24 rounded-t-2xl bg-green-900">
                <h1 className="text-lg text-white pt-2">Order List</h1>
                <div className='block lg:grid lg:grid-cols-2 lg:items-center lg:gap-10'>
                    <div className="grid grid-cols-2 p-3">
                        <div className="grid text-white">
                            <p className="text-sm">Soke Sushi <span className="text-xs text-green-400 ms-2">x2</span></p>
                            <p className="text-[10px] flex gap-2"><span className="text-green-400 relative text-rotate-line-through">$5.16</span><span>$4.99</span></p>
                        </div>
                        <div className="flex justify-end lg:justify-normal">
                            <div className="grid grid-cols-3 place-items-center items-center gap-1">
                                <PiMinusLight className="text-3xl p-1 text-white border border-green-100 rounded-full" />
                                <span className="text-2xl p-1 text-white ">0</span>
                                <BsPlusLg className="text-3xl p-1 text-white border border-green-100 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className='block lg:flex lg:justify-end'>
                        <button
                            className="mt-3 lg:mt-0 rounded-3xl lg:rounded-lg font-medium text-green-900 bg-green-200 py-2 px-5 w-full lg:w-2/3 transition-all hover:scale-95 lg:hover:scale-100 hover:bg-green-100">
                            Pay $4.99
                        </button>
                    </div>
                </div>
            </motion.footer>
        </div>
    )
}

export default PopularProduct
