import * as gracely from "gracely"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import * as model from "../model"

export class Booking extends rest.Collection<gracely.Error> {
	fetch(
		reference: string
	): Promise<Readonly<model.Booking & { options: model.Booking.Options; order: string }> | gracely.Error> {
		return this.client.get<model.Booking & { options: model.Booking.Options; order: string }>(`/booking/${reference}`)
	}
	update(order: model.Order, reference: string): Promise<http.Response.Like | any> {
		return this.client.put<model.Order>(`/booking/${reference}`, order)
	}
}
