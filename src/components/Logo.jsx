import { Link } from 'react-router-dom';
export default function Logo(props) {

    const { position, classes } = props;
    const aTagClasses = 'Logo_Header '

    return(


        <>
            <img className={"Logo box " + classes} src="assets/Simply-Pho-House.png" alt="restaurant Logo" />

        {/* { position == 'header' ?

            <div className={"Logo Logo_Header " }>
                <Link className={ aTagClasses } to="/">
                    <img src="assets/Simply-Pho-House.png" alt="restaurant Logo" /> 
                </Link> 
            </div> :

            <img className="Logo Logo_Home box " src="assets/Simply-Pho-House.png" alt="restaurant Logo" />
        } */}
        </> 
    )
}