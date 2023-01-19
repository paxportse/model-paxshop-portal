import * as gracely from "gracely"
import * as isoly from "isoly"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import { Booking } from "./Booking"
import { Order } from "./Order"

export class Client extends rest.Client<gracely.Error> {
	locales: isoly.Locale[]
	readonly booking = new Booking(this.client)
	readonly order = new Order(this.client)
	static create<T = Record<string, any>>(
		server: string,
		referer?: string,
		load?: (client: http.Client) => T
	): Client & T {
		const httpClient = new http.Client<gracely.Error>(server, undefined, {
			appendHeader: () => ({
				referer,
				authorization: "Something",
			}),
		})
		const result = new Client(httpClient)
		if (load)
			Object.assign(result, load(httpClient))
		return result as Client & T
	}
}
