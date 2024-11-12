// import { Helmet } from "react-helmet";
import FooterMenu from "./FooterMenu";
import { Helmet } from "react-helmet-async";

// eslint-disable-next-line react/prop-types
const Layout = ({ children, title, description, keywords, author }) => {
    


    return (
        <div className="Layout">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                {/* <link rel="icon" href="https://png.pngtree.com/png-vector/20191116/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_1992804.jpg" type="image/gif" sizes="16x16"></link> */}
                <title>{title}</title>
            </Helmet>
            <div className="Pages">
                {/* <div id="map"></div> */}
                {children}
                <FooterMenu />
            </div>
        </div>
    )
}

// Layout.defaultProps = {
//     title: "Food Delivery App",
//     description:"Order food online from restaurants and get it delivered.",
//     keywords: "restaurant, online food",
//     author: "Developer Name",
// };

export default Layout
