/**
 * Endpoint definitions using the rxjs library
 */
import { createAPIFetchEvent, createAPIFetchStatic } from "@common/rxjs/rxjs_utils";

type DetailQuery = { id: string };

// * ENDPOINT_NAME **********
interface QueryType {
	hello_count?: string;
}
interface ReturnType {
	hello: string;
}

export const [useApi_Name, name$] = createAPIFetchStatic<ReturnType>({ endpoint: `/Hello_World` });
export const [setApi_NamePostQuery, useApi_NamePostQuery, useApi_NamePost, namePost$] = createAPIFetchEvent();
// ----------------------
