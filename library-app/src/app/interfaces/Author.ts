
export interface IAuthor {
    data: {
        [key: string]: AuthorData;
    }
    status: string,
    message: string
}

export interface IAuthors {
    data: {
        [key: string]: AuthorData[];
    }
    status: string,
    message: string
}







interface AuthorData {
    id?         : number,
    name?       : string,
    email?      : string,
    phone?      : string,
    role?       : string,
    status?     : string,
    registered? : string
}