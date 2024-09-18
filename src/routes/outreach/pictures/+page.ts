
import { client } from "$lib/graphql-client";
import {
	pictureQuery,
} from "$lib/graphql-queries";

export const load = async ({ params }) => {
	// @ts-ignore
	const { picturesPages } = await client.request(pictureQuery);
    console.log(picturesPages[0].pictures)

	return {
		pictures: picturesPages[0].pictures
	};
};
