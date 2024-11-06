import Place from "./Place";
import Search from "./Search";
import Settings from "./Settings";


function Header () {
    return (
        <div>

            <h1>Hello from Header</h1>
            <Place></Place>
            <Search></Search>
            <Settings></Settings>

        </div>
    );
}


export default Header;