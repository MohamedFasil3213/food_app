import { LuDot } from 'react-icons/lu';
import useFarmerMotion from '../../Hooks/useFarmerMotion';
import Layout from './../../Components/Layout/Layout';
import { motion } from 'framer-motion';
import { MdOutlineStar } from 'react-icons/md';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { useEffect } from 'react';
import { CartData } from '../../Assets/Data';

const CartPage = () => {
    const { topSideVariants } = useFarmerMotion();

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <Layout title={'Cart'}>
            <div className="Cart_Page p-2 md:w-2/3 lg:w-1/3 md:mx-auto">
                <h1 className="text-xl font-bold text-center p-2">My Cart</h1>
                <motion.div variants={topSideVariants} initial='initial' animate='animate'>
                    <div className="p-3">
                        <div className="grid gap-3">
                            {
                                CartData.map((item, i) => (
                                    <div key={i} className="border rounded-lg shadow-md p-3 grid grid-cols-4 gap-1 items-center hover:bg-green-100">
                                        <img className='col-span-1 mix-blend-multiply aspect-square object-cover rounded-lg' src={item.image} alt="" />
                                        <div className='p-2 col-span-3 relative'>
                                            <h1 className="text-base font-semibold">{item.name}</h1>
                                            <p className="text-xs font-medium text-slate-500 flex items-center gap-1 justify-between">
                                                <span className="flex items-center gap-0.5"><MdOutlineStar className="text-xs" /> {item.rating} </span>
                                                <LuDot className="text-lg" /> 35-40 mins <LuDot className="text-lg" /> ${item.price}
                                            </p>
                                            <p className="text-xs font-medium text-slate-400">Malabar Hotel</p>
                                            <div className='absolute right-0 bottom-0'><RiDeleteBin7Line className='text-2xl text-slate-600 p-1' /></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="pt-5">
                            <div className="border rounded-lg shadow-md p-5">
                                <h1 className="text-sm font-medium">Bill Details</h1>
                                <div className='text-xs pt-2 grid gap-1'>
                                    <p>Items Total <span className='float-end text-sm'>$6.99</span></p>
                                    <p>Delivery Fee | 6.3 kms <span className='float-end text-sm'>$0.99</span></p>
                                    <hr className='my-1.5 border-slate-300' />
                                    <p>Delivery Tip <span className='float-end text-green-800'>Add tip</span></p>
                                    <p  className='pt-1'>Platform fee <span className='float-end'>$0.12</span></p>
                                    <p  className='pt-1'>GST and Restaurant Charges <span className='float-end'>$0.99</span></p>
                                    <hr className='my-1.5 border-slate-300' />
                                    <h1 className='text-base font-semibold'>To Pay <span className='float-end'>$8.86</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className="py-7">
                            <button className='w-full py-2 px-3 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-700'>Pay $8.86</button>
                        </div>
                    </div>
                    <div className='py-8'></div>
                </motion.div>
            </div>
        </Layout>
    )
}

export default CartPage
