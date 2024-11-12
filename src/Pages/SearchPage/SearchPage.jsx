
import { CiSearch } from 'react-icons/ci';
import Layout from './../../Components/Layout/Layout';
import { motion } from 'framer-motion';
import useFarmerMotion from '../../Hooks/useFarmerMotion';
import { CategoryData } from './../../Assets/Data';
const SearchPage = () => {
    const { topSideVariants } = useFarmerMotion();
    return (
        <Layout title={'Find Food'}>
            <motion.div variants={topSideVariants} initial='initial' animate='animate'
                className="SearchPage p-2 lg:w-3/5 lg:mx-auto">
                <div className="p-3">
                    <div className='p-3 border border-slate-400 grid grid-cols-[1fr,max-content] rounded-lg items-center'>
                        <input className='p-1 text-sm text-slate-800 bg-transparent outline-none placeholder:text-slate-500' placeholder='Search for restaurants and food' type="text" />
                        <CiSearch className='text-2xl text-slate-700' />
                    </div>
                </div>
                <div className='p-3'>
                    <h1 className="text-lg font-semibold">Popular Cuisines</h1>
                    <ul className="flex gap-3 overflow-scroll pt-2 transition-all">
                        {
                            CategoryData.map((item, i) => (
                                <li className="block" key={i} >
                                    <img className="min-w-20 mix-blend-multiply"
                                        src={item.image} alt="" />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </motion.div>
        </Layout>
    )
}

export default SearchPage
