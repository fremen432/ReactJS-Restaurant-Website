import Header from '../components/HomePage/HP_Header';
import Body from '../components/HomePage/HP_Body';
import Footer from '../components/Footer';

export default function HomePage(props){

    const { setIsOpen, isOpen } = props

    return (
        <div className="app">
            <Header setIsOpen={ setIsOpen } isOpen={ isOpen } />
            <div className="body_footer_wrapper ">
                <Body />
                <Footer />
            </div>
        </div>
    )
}