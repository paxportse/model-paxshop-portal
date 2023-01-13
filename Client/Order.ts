import * as gracely from "gracely"
import * as isoly from "isoly"
import * as http from "cloudly-http"
import * as rest from "cloudly-rest"
import * as model from "../model"

type ListOptions =
	| {
			range: isoly.TimeRange
	  }
	| {
			cursor: string
	  }

export class Order extends rest.Collection<gracely.Error> {
	update(order: model.Order, reference: string): Promise<http.Response.Like | any> {
		return this.client.put<model.Order>(`order/${order.id}`, order)
	}
	list(options?: ListOptions): Promise<http.Response.Like | any> {
		return this.client.get<model.Order[]>(`order`)
	}
}
