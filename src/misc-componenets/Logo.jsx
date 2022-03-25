export default function Logo(props) {
    return(
        <div className={"logo " + props.classes}>
            <a href="/">
                <img className="" src="assets/Simply-Pho-House.png" alt="restaurant logo" />
            </a>
        </div>
    )
}