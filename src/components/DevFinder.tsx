import "./devFinder.scss";
import Title from "./title/Title";
import SubTitle from "./subTitle/SubTitle";
import Search from "./userSearch/Search";

import { AxiosInstance } from "./api/AxiosInstance";
import { useState } from "react";
import { UserConfig } from "./UserConfig";
import PersonData from "./personData/PersonData";
import Loading from "./loading/Loading";
interface Props {
    handleDarkMode: () => void;
    darkMode: boolean;
}

const DevFinder = (props: Props) => {
    const { handleDarkMode, darkMode } = props;
    const [gitHubUser, setGitHubUser] = useState<UserConfig[] | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState<boolean | null>(null);

    const handleGetUserData = async (value: string) => {
        setLoading(true);
        if (value === "") {
            setError(true);
        }
        try {
            setTimeout(async () => {
                await AxiosInstance(`/users/${value}`)
                    .then((res) => {
                        setGitHubUser([res.data]);
                        setLoading(false);
                        if (value === "") {
                            setError(true);
                            console.log(res);
                        } else {
                            setError(false);
                        }
                    })
                    .catch((err) => {
                        setLoading(false);
                        setError(true);
                        setGitHubUser(null);
                    });
            }, 550);
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <div className="devFinder" style={{ position: "relative" }}>
            <div className={"pageTitle_DarkTheme"}>
                <Title text={"devfinder"} />
                <div className="darkModeButton" onClick={handleDarkMode}>
                    {darkMode ? (
                        <SubTitle text={"dark"} />
                    ) : (
                        <SubTitle text={"light"} />
                    )}
                    {darkMode ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            className="bi bi-moon-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 
                            0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            className="bi bi-sun-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 
                            0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 
                            0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 
                            0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 
                            0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                            />{" "}
                        </svg>
                    )}
                </div>
            </div>
            <Search handleGetUserData={handleGetUserData} error={error} />

            {loading ? (
                <Loading />
            ) : (
                <>
                    {gitHubUser?.map((item: any) => {
                        return (
                            <div
                                className="SearchResult"
                                style={{ backgroundColor: "transparent" }}
                            >
                                <PersonData
                                    personData={item}
                                    key={item.id}
                                    loading={loading}
                                />
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default DevFinder;
