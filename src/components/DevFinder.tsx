import "./devFinder.scss";
import Search from "./search/Search";
import Title from "./title/Title";
const moonIcon = require("../assets/icon/Path.png");

const DevFinder = () => {
    return (
        <div className="devFinder">
            <div className={"pageTitle_DarkTheme"}>
                <Title text={"devfinder"} />
                <div className="darkModeButton">
                    <Title text={"dark"} />
                    <button>
                        <img src={moonIcon} alt="" />
                    </button>
                </div>
            </div>
            <Search />
        </div>
    );
};

export default DevFinder;
