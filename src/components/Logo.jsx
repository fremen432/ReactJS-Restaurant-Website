export default function Logo(props) {

    const { position } = props;
    const aTagClasses = 'Logo_Header '

    return(
        <>
        { position == 'header' ?

            <div className={"Logo Logo_Header  " }>
                <a className={ aTagClasses } href="/">
                    <img src="assets/Simply-Pho-House.png" alt="restaurant Logo" /> 
                </a> 
            </div> :

            <img className="Logo Logo_Home box " src="assets/Simply-Pho-House.png" alt="restaurant Logo" />
        }
        </> 
    )
}