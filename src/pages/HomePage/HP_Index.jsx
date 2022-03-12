import Header from './components/Header/HP_Header';
import Body from './components/Body/HP_Body';
import Footer from './components/Footer/HP_Footer';

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