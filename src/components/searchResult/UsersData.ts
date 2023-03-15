export interface UserData {
    userName: string;
    userTag: string;
    joinedDay: number | null;
    joinedYear: number | null;
    userAbout: string;
    repos: {
        title: string;
        value: number | null;
    };
    follower: {
        title: string;
        value: number | null;
    };
    following: {
        title: string;
        value: number | null;
    };
    location: {
        icon: string;
        title: string;
    };
    url: {
        icon: string;
        title: string;
    };
    socialMedia: {
        icon: string;
        title: string;
    };
    socialTag: {
        icon: string;
        title: string;
    };
}