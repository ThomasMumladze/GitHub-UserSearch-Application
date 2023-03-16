import ErrorMessage from "../errorMessage/ErrorMessage";
import "./search.scss";
import { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const [userSearchByName, setUserSearchByName] = useState<object>([]);
    useEffect(() => {
        try {
            axios
                .get(`https://api.github.com/users/${searchValue}`)
                .then((res) => setUserSearchByName(res.data));
        } catch (error) {
            throw new Error();
        }
    }, [searchValue]);

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
            <ErrorMessage />
            <button>Search</button>
        </div>
    );
};

export default Search;
