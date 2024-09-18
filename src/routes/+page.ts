
import { client } from "$lib/graphql-client";
import {
	homeQuery,
} from "$lib/graphql-queries";

export const load = async ({ params }) => {
	// @ts-ignore
	const { homePages } = await client.request(homeQuery);

	return {
		homePage: homePages[0]
	};
};
