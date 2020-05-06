import {request} from "./request";

export function login(user){
	return request({
		url:'/User/login',
		method:"post",
		params:{
			user
		}
	})
}