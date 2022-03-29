export default function Logo(props) {
    
    const { classes, position } = props;
    const aTagClasses = 'logo_HP_Header box'

    return(
        <div className={"logo " + classes}>
            {
                position == 'header' ?
                <a className={aTagClasses} href="/">
                    <img src="assets/Simply-Pho-House.png" alt="restaurant logo" /> 
                </a> :
                <img src="assets/Simply-Pho-House.png" alt="restaurant logo" />
            }
        </div>
    )
}