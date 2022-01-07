
export interface IBook {
    data: {
        [key: string]: BookData;
    }
    status: string,
    message: string
}


export interface IBooks {
    data: {
        [key: string]: BookData[];
    }
    status: string,
    message: string
}






interface BookData {
    id?          : number,
    title?       : string,
    description? : string,
    image?       : string,
    author?      : string,
    posted?      : string
}