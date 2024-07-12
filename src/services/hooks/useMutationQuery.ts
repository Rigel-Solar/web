/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation } from "react-query";
import { api } from "../api";

type methods = "post" | "put" | "patch" | "delete";

export const useMutationQuery = <T = any>(
	url: string,
	method: methods = "post"
) => {
	const prepareMutation = <T>(data: T) => {
		return api[method]<T>(url, data);
	};

	return useMutation(prepareMutation<T>, {
		retry: false,
	});
};
