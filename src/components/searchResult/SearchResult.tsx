import "./searchResult.scss";

interface Props {
    userSearchByName: object | any;
}
const SearchResult = (props: Props) => {
    const { userSearchByName } = props;

    return (
        <div className="searchResult">
            <div className="leftContainer">
                <div className="imgWrapper">
                    <img src={userSearchByName.avatar_url} alt="" />
                </div>
            </div>
            <div className="rightContainer">
                <div className="userInfo">
                    <div className="userProfile">
                        <h1>{userSearchByName.name}</h1>
                        <p>@{userSearchByName.login}</p>
                        <p className="bio">
                            {userSearchByName.bio == null
                                ? "This profile has no bio"
                                : userSearchByName.bio}
                        </p>
                    </div>
                    <div className="joinedDate">
                        <p>{userSearchByName.created_at}</p>
                    </div>
                </div>
                <div className="audience">
                    <div>
                        <h3>Repos</h3>
                        {userSearchByName.public_repos}
                    </div>
                    <div>
                        <h3>Followers</h3>
                        {userSearchByName.followers}
                    </div>
                    <div>
                        <h3>Following</h3>
                        {userSearchByName.following}
                    </div>
                </div>
                <div className="sources">
                    <div>
                        <div className="location">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                fill="currentColor"
                                className={
                                    userSearchByName.location === null
                                        ? "notAvailable"
                                        : "bi bi-link-45deg"
                                }
                                viewBox="0 0 16 16"
                            >
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <p>
                                {userSearchByName.location === null
                                    ? "Not Available"
                                    : userSearchByName.location}
                            </p>
                        </div>
                        <div className="blog">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                fill="currentColor"
                                className={
                                    userSearchByName.blog === ""
                                        ? "notAvailable"
                                        : "bi bi-link-45deg"
                                }
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                            </svg>
                            <div className="blotgitle">
                                <a
                                    target={"_blank"}
                                    href={userSearchByName.blog}
                                    className={
                                        userSearchByName.blog === ""
                                            ? "notAvailable"
                                            : ""
                                    }
                                    rel="noreferrer"
                                >
                                    {userSearchByName.blog === ""
                                        ? "Not Available"
                                        : userSearchByName.blog}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="socialMedia">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className={
                                    userSearchByName.twitter_username === null
                                        ? "notAvailable"
                                        : "bi bi-link-45deg"
                                }
                                viewBox="0 0 16 16"
                            >
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                            <p
                                className={
                                    userSearchByName.twitter_username === null
                                        ? "notAvailable"
                                        : ""
                                }
                            >
                                {userSearchByName.twitter_username === null
                                    ? "Not Available"
                                    : userSearchByName.blog}
                            </p>
                        </div>

                        <div className="company">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className={
                                    userSearchByName.company === null
                                        ? "notAvailable"
                                        : "bi bi-link-45deg"
                                }
                                viewBox="0 0 16 16"
                            >
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
                                <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
                            </svg>
                            <div className="companyTitle">
                                <p>Company</p>
                                <div className="companiInfo">
                                    <p
                                        className={
                                            userSearchByName.company === null
                                                ? "notAvailable"
                                                : ""
                                        }
                                    >
                                        {userSearchByName.company === null
                                            ? "Not Available"
                                            : userSearchByName.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
