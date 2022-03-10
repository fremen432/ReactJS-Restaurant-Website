import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

const HomePage = () => {
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

export default HomePage;