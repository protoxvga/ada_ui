import { useEffect } from "react";

import { useRouter } from "next/router";

import { useListUsersQuery } from "store/api/usersAPI";

import { checkError } from "./utils/checkError";

export const useListUsers = () => {
    const { data, error, refetch } = useListUsersQuery();
    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
    }, [data, error])

    return { data, error, refetch };
};
