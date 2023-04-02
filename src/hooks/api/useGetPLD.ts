import { useEffect } from "react";

import { useRouter } from "next/router";

import { checkError } from "./utils/checkError";

import { useListPLDQuery } from "store/api/pldAPI";
import { useAppSelector } from "store/hooks/hooks";

export const useGetPLDs = () => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    const { data, error, refetch } = useListPLDQuery(undefined, { skip: !isLoggedIn });

    const router = useRouter();

    useEffect(() => {
        if (error)
            checkError(error, router);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return { data, error, refetch };
};
