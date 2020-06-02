import service from "@/utils/reuqest"
/**
 * 获取验证码
 */
export function getSmsCode(){
	service.request({
		method: "post",
		url: "/getSms",
		data:{}
	})
}
/**
 * 获取用户角色
 */

/**
 * 登录
 */

/**
 * 注册
 */