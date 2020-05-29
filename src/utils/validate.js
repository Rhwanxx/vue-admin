/**
 * @param {Object} str
 * 过滤特殊字符
 */
export function stripscript(str) {
	console.log(str);
	var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]");
	var rs = "";
	for (var i = 0; i < str.length; i++) {
		rs = rs + str.substr(i, 1).replace(pattern, '');
	}
	console.log(rs);
	return rs;
}


/**
 * 验证邮箱
 */
export function validateEmail(value) {
	let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	if (!reg.test(value)) {
		return false;
	} else {
		return true;
	}
}

/**
 * 验证密码6-20字母+数字
 */
export function validatePassword(value){
	let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
	return !reg.test(value) ? true : false;
}