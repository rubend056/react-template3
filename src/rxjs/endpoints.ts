/**
 * Endpoint definitions using the rxjs library
 */
import { createAPIFetchEvent, createAPIFetchStatic, ResponseFetch } from "@common/rxjs/rxjs_utils";

type DetailQuery = { id: string };

// * ENDPOINT_NAME **********
interface QueryType {
	hello_count?: string;
}
interface ReturnType {
	hello: string;
}

export const [useApi_Name, name$] = createAPIFetchStatic(
	{ endpoint: `/Hello_World` },
	{ responseType: {} as ResponseFetch<ReturnType> }
);
// export const [setApi_NamePostQuery, useApi_NamePostQuery, useApi_NamePost, namePost$] = createAPIFetchEvent();
// ----------------------
