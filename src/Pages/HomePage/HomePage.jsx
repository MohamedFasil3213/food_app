import { motion } from "framer-motion";
import useFarmerMotion from "../../Hooks/useFarmerMotion";
import Layout from "../../Components/Layout/Layout";
import { CategoryData, FoodData, RestaurantData } from "../../Assets/Data";
import banner from "../../Assets/banner.jpg";
import Header from "../../Components/Sections/Header/Header";
import SearchBox from "../../Components/Sections/SearchBox/SearchBox";
import CatogeryList from "../../Components/Sections/CatogeryList/CatogeryList";
import Banner from "../../Components/Sections/Banner/Banner";
import SuggestedFood from "../../Components/Sections/SuggestedFood/SuggestedFood";
import RestaurentList from "../../Components/Sections/RestaurentList/RestaurentList";
import { useSelector } from "react-redux";
import HeaderNotLoggedIn from "../../Components/Sections/Header/HeaderNotLoggedIn";

const HomePage = () => {
  const { topSideVariants } = useFarmerMotion();
  const auth = useSelector(state => state.auth)

  return (
    <Layout title={"Home"}>
      <div className="HomePage p-2 lg:w-4/5 lg:mx-auto">
        {/* ===== Header section =====  */}
        {auth.isAuth?(
          <Header />

        ):(
          <HeaderNotLoggedIn />
        )}
        <motion.div
          variants={topSideVariants}
          initial="initial"
          animate="animate"
          className="px-3"
        >
          {/* ===== Search =====  */}
          <SearchBox />
          {/* ===== Banner img =====  */}
          <Banner image={banner} />
          {/* ===== Category list =====  */}
          <CatogeryList list={CategoryData} />
          {/* ===== Popular section =====  */}
          <SuggestedFood list={FoodData} />
          {/* ===== Restaurant Section =====  */}
          <RestaurentList list={RestaurantData} />
        </motion.div>
      </div>
    </Layout>
  );
};

export default HomePage;
