import { client } from "$lib/graphql-client";
import {
	navigationQuery,
} from "$lib/graphql-queries";

export const load = async ({ url }) => {
	//@ts-ignore
	const { navigations } = await client.request(navigationQuery);
	const {pathname} = url

	return {
		navigations: navigations[0].navigation,
		pathname
	};
};
