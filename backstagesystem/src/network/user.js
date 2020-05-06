import {request} from "./request";

export function getUserdata(){
	return request({
		url:'/User/findall'
	})
}