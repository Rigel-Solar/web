import {
	QueryKey,
	useQuery,
	UseQueryOptions,
	UseQueryResult,
} from "react-query";
import { useAppSelector } from "../../redux/hooks/useApp";
import { api } from "../api";

const get = async (url: string, token: string | null) => {
	const { data } = await api.get(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return data;
};

export const useFetch = <
	TQueryFnData = unknown,
	TError = unknown,
	TData = TQueryFnData,
	TQueryKey extends QueryKey = QueryKey,
>(
	url: string,
	actions: TQueryKey,
	options?: Omit<
		UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
		"queryKey" | ("queryFn" & { enabled: boolean })
	>
): UseQueryResult<TData, TError> => {
	const token = useAppSelector((state) => state.user.token);

	return useQuery(actions, () => get(url, token), {
		refetchOnWindowFocus: false,
		keepPreviousData: true,
		...options,
	});
};
