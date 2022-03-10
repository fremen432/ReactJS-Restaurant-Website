// Components imports
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

const OrderHomepage = () => {

    return (
        <div className="app">
            <Header />
            <div className="body_footer_wrapper ">
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default OrderHomepage;