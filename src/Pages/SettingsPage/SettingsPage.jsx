import { useEffect } from "react";
import Layout from "../../Components/Layout/Layout"
import useFarmerMotion from "../../Hooks/useFarmerMotion";
import { motion } from 'framer-motion';
import { BsChevronRight } from "react-icons/bs";

const SettingsPage = () => {
    const { topSideVariants } = useFarmerMotion();

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const signOut =( ) => {
        localStorage.removeItem('user')
        
        window.location.href = '/'
    }
    return (
        <Layout title={'Settings'}>
            <div className="Settings_Page p-2 lg:w-1/3 lg:mx-auto">
                <motion.div variants={topSideVariants} initial='initial' animate='animate'>
                    <div className="p-3">
                        <div className="pt-20 grid justify-center">
                            <img className="rounded-full w-28" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg" alt="" />
                            <div className="text-center py-3">
                                <h1 className="text-base font-medium">Jack Sparrow</h1>
                                <p className="text-xs text-slate-600">+91 9876543210</p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <ul className="grid gap-2 items-center">
                                <li className="flex items-center justify-between py-2 px-3 text-base">My Profile<BsChevronRight /></li>
                                <li className="flex items-center justify-between py-2 px-3 text-base">My Location<BsChevronRight /></li>
                                <li className="flex items-center justify-between py-2 px-3 text-base">Change Password<BsChevronRight /></li>
                                <li className="flex items-center justify-between py-2 px-3 text-base">Payment Settings<BsChevronRight /></li>
                                <li className="flex items-center justify-between py-2 px-3 text-base">My Voucher<BsChevronRight /></li>
                                <li className="flex items-center justify-between py-2 px-3 text-base">Notification<BsChevronRight /></li>
                                <li className="flex items-center justify-between py-2 px-3 text-base">About Us<BsChevronRight /></li>
                                <li className="flex items-center justify-between py-2 px-3 text-base">Contact Us<BsChevronRight /></li>
                            </ul>
                        </div>
                        <div className="py-8">
                            <button className="p-2 w-full bg-blue-800 text-white font-semibold rounded-3xl transition-all hover:bg-blue-700" onClick={signOut}>Sign Out</button>
                        </div>
                        <div className="p-6"></div>
                    </div>
                </motion.div>
            </div>
        </Layout>
    )
}

export default SettingsPage
