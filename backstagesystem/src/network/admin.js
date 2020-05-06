import {request} from "./request";

export function getHomeMultidata(){
	return request({
		url:'/home/multidata'
	})
}

export function addAdmin(username,password){
	return request({
		url:'/User/regist',
		params:{
			username,
			password
		}
	})
}