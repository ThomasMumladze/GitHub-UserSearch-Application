import ErrorMessage from "../errorMessage/ErrorMessage";
import "./search.scss";
import { useState, useEffect } from "react";

interface Props {
    handleGetUserData: (searchValue: any, signal: any) => void;
    userSearchByName: any;
}
const Search = (props: Props) => {
    const { handleGetUserData, userSearchByName } = props;
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        handleGetUserData(searchValue, signal);

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div className="searchWrapper">
            <div className="searchInput">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type={"text"}
                    placeholder={"Search GitHub username..."}
                />
            </div>
            {searchValue !== userSearchByName}
            <button onClick={() => handleGetUserData(searchValue, AbortSignal)}>
                Search
            </button>
        </div>
    );
};

export default Search;
