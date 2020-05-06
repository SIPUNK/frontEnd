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
export function regist(user){
	return request({
		url:'/User/regist',
		method:"post",
		params:{
			user
		}
	})
}