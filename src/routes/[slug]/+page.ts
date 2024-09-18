export const prerender = "auto";
import { client } from "$lib/graphql-client";
import {
	navigationQuery,
} from "$lib/graphql-queries";

export const load = async ({ params }) => {
	//@ts-ignore
	const { navigations } = await client.request(navigationQuery);

	return {
		navigations: navigations[0].navigation
	};
};
