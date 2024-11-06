import Place from "./Place";
import Search from "./Search";
import Settings from "./Settings";


function Header () {
    return (
        <div>

            <h1>This will become the head</h1>
            <Place></Place>
            <Search></Search>
            <Settings></Settings>

            <p>place, search, setting will be side by side</p>
        </div>
    );
}


export default Header;