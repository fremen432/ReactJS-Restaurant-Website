import { Link } from 'react-router-dom';
export default function Logo(props) {

    const { position } = props;
    const aTagClasses = 'Logo_Header '

    return(
        <>
        { position == 'header' ?

            <div className={"Logo Logo_Header  " }>
                <Link className={ aTagClasses } to="/">
                    <img src="assets/Simply-Pho-House.png" alt="restaurant Logo" /> 
                </Link> 
            </div> :

            <img className="Logo Logo_Home box " src="assets/Simply-Pho-House.png" alt="restaurant Logo" />
        }
        </> 
    )
}