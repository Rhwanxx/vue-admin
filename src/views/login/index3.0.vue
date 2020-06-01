<template>
	<div id="login">
		<div class="login-wrap">
			<ul class="menu-tab">
				<li v-for="item in menuTab" :key="item.id" :class="{'current': item.current }" @click="toggleMneu(item)">{{ item.txt }}</li>
			</ul>
			<!-- 表单开始 -->
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium">
				<el-form-item prop="username" class="item-form">
					<label>邮箱</label>
					<el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item prop="password" class="item-form">
					<label>密码</label>
					<el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
				</el-form-item>
				<el-form-item prop="passwords" class="item-form" v-show="model === 'register'">
					<label>重复密码</label>
					<el-input type="password" v-model="ruleForm.passwords" autocomplete="off" minlength="6" maxlength="20"></el-input>
				</el-form-item>
				<el-form-item prop="code" class="item-form">
					<label>验证码</label>

					<el-row :gutter="11">
						<el-col :span="15">
							<el-input v-model.number="ruleForm.code"></el-input>
						</el-col>
						<el-col :span="9">
							<el-button type="success" class="block">获取验证码</el-button>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item>
					<el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block login-form">提交</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	import {
		stripscript,
		validateEmail
	} from '@/utils/validate';
	import {
		reactive,
		ref,
		onMounted
	} from '@vue/composition-api'
	export default {
		name: "login",
		setup(props,{refs}) {
			//用户名
			let validateUsername = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入用户名"));
				} else if (!validateEmail(value)) {
					callback(new Error("用户名格式有误"));
				} else {
					callback();
				}
			};
			//密码
			let validatePass = (rule, value, callback) => {
				ruleForm.password = stripscript(value);
				value = ruleForm.password;
				let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
				if (value === "") {
					callback(new Error("请输入密码"));
				} else if (!reg.test(value)) {
					callback(new Error("密码为6-20位数字和字母组合!"));
				} else {
					callback();
				}
			};
			//验证重复密码
			let validatePasss = (rule, value, callback) => {
				if (model.value === 'login') {
					callback()
				};
				ruleForm.passwords = stripscript(value);
				value = ruleForm.passwords;
				let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
				if (value === "") {
					callback(new Error("请再次输入密码"));
				} else if (value != ruleForm.password) {
					callback(new Error("重复密码不正确"));
				} else {
					callback();
				}
			};
			//验证码
			let checkAge = (rule, value, callback) => {
				ruleForm.code = stripscript(value + '');
				value = ruleForm.code;
				let reg = /^[a-z0-9]{6}$/;
				if (value === '') {
					return callback(new Error("请输入验证码！"));
				} else if (!reg.test(value)) {
					return callback(new Error("请输入正确的验证码"));
				} else {
					callback();
				}
			};
			//这里放置data数据、生命周期、自定义函数等
			const menuTab = reactive([{
					txt: "登录",
					current: true,
					type: 'login'
				},
				{
					txt: "注册",
					current: false,
					type: 'register'
				}
			])

			//模块
			const model = ref('login')
			//表单
			const ruleForm = reactive({
				username: '',
				password: '',
				passwords: '',
				code: ''
			})
			
			//表单验证
			const rules = reactive({
				username: [{
					validator: validateUsername,
					trigger: "blur"
				}],
				password: [{
					validator: validatePass,
					trigger: "blur"
				}],
				passwords: [{
					validator: validatePasss,
					trigger: "blur"
				}],
				code: [{
					validator: checkAge,
					trigger: "blur"
				}]
			})
			/**
			 * 声明函数
			 */
			const toggleMneu = (data => {
				menuTab.forEach(element => {
					element.current = false;
				});
				//高光
				data.current = true;
				//修改模块
				model.value = data.type;
			})
			const submitForm = (formName => {
				refs[formName].validate(valid => {
					if (valid) {
						alert("submit!");
					} else {
						console.log("error submit!!");
						return false;
					}
				})
			})
			
			/**
			 * 生命周期
			 */
			//挂载完成后
			onMounted(()=>{
				
			})
			
			return {
				menuTab,
				model,
				ruleForm,
				rules,
				toggleMneu,
				submitForm
			}
		},
	};
</script>
<style lang="scss" scoped>
	#login {
		height: 100vh;
		background-color: #344a5f;
	}

	.login-wrap {
		width: 330px;
		margin: auto;
	}

	.menu-tab {
		text-align: center;

		li {
			display: inline-block;
			width: 88px;
			line-height: 36px;
			font-size: 14px;
			color: #fff;
			border-radius: 2px;
			cursor: pointer;
		}
	}

	.current {
		background-color: rgba(0, 0, 0, 0.1);
	}

	.login-form {
		margin-top: 29px;

		label {
			display: block;
			margin-bottom: 3px;
			font-size: 14px;
			color: #fff;
		}

		.item-form {
			margin-bottom: 13px;
		}

		.block {
			display: block;
			width: 100%;
		}
	}
</style>
