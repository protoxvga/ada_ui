export interface User {
    userId: string;
    accessToken: string;
    refreshToken: string; 
}

export interface UsersList {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
}

export interface PartsList {
    id: string;
    name: string;
}