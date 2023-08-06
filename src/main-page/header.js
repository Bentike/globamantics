
const Header = ({subtitle}) => {
    return(
        <header className="row">
            <div className="col-md-5 mt-3">
                Globamantics
            </div>
            <div className="col-md-7 mt-5 subtitle">
                {subtitle}
            </div>
        </header>
    );
}

export default Header;