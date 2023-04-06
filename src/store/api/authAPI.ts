import { adaAPI } from "./adaAPI";

import { User } from "./types/fetchedData";

import { Login } from "./types/queryParams";

const authApi = adaAPI.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation<User, Login>({
            query: ({email, password}) => ({
                url: "auth/login",
                method: 'POST',
                body: {
                    email: email,
                    password: password,
                }
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const {
    useUserLoginMutation
} = authApi;