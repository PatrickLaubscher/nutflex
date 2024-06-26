export interface Auth {
    success: boolean;
    status_message: string;
}


export interface Movie {
    id:number;
    title: string;
    backdrop_path: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
};


export interface MoviesList {
    page: number;
    results: Movie[];
}



export interface Tvshow {
    id:number;
    name: string;
    backdrop_path: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    number_of_seasons: number;
};


export interface TvshowsList {
    page: number;
    results: Tvshow[];
}






