import { client } from "$lib/graphql-client";
import {
	homeQuery,navigationQuery
} from "$lib/graphql-queries";

export const load = async ({ url }) => {
	// @ts-ignore
	const { homePages } = await client.request(homeQuery);
	// @ts-ignore
	const { navigations } = await client.request(navigationQuery);

	return {
		homePage: homePages[0],
		navigations: navigations[0].navigation,
		url: url.pathname
	};
};
