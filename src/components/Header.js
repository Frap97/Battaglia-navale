import ToggleMenu from './toggleMenu';
const Header = ({title}) => {
return (
    <>
    <div className="welcome"></div>
    <div className="header-firstPage">
        <h1>
            <b>{ title }</b>
        </h1>
    </div>
    </>
)
}

export default Header;