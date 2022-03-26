import Header from './components/Header/HP_Header';
import Body from './components/Body/HP_Body';
// import Footer from './components/Footer/HP_Footer';
import Footer from '../../misc-componenets/Footer';

const HomePage = (props) => {
    const { setIsOpen, isOpen } = props

    return (
        <div className="app">
            <Header setIsOpen={ setIsOpen } isOpen={ isOpen } />
            <div id className="body_footer_wrapper ">
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;