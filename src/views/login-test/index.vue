<template>
	<div id="login">
		<div class="login-wrap">
			<div class="login-left">
				<!-- <ul class="menu-tab">
				<li v-for="item in menuTab" :key="item.id" :class="{'current': item.current }" @click="toggleMneu(item)">{{ item.txt }}</li>
			</ul> -->
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
					<!-- <el-form-item prop="passwords" class="item-form" v-show="model === 'register'">
						<label>重复密码</label>
						<el-input type="password" v-model="ruleForm.passwords" autocomplete="off" minlength="6" maxlength="20"></el-input>
					</el-form-item> -->
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
						<el-button type="primary" @click="submitForm('ruleForm')" class="login-btn block login-form">登录</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="login-right">
				<img src="../../assets/login-bg2.png" />
			</div>
		</div>
	</div>
</template>
<script>
	import {
		stripscript,
		validateEmail
	} from '@/utils/validate';
	export default {
		name: "login",
		data() {
			
			return {
				//表单数据
				ruleForm: {
					username: "",
					password: "",
					passwords: "",
					code: ""
				},
				rules: {
					
				}
			};
		},
		created() {},
		mounted() {},
		methods: {
			toggleMneu(data) {
				this.menuTab.forEach(element => {
					element.current = false;
				});
				//高光
				data.current = true;
				//修改模块
				this.model = data.type;
			},
			submitForm(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						alert("submit!");
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			}
		}
	};
</script>
<style lang="scss" scoped>
	#login {
		height: 100vh;
		background-color: #fff;
	}

	.login-wrap {
		display: flex;
		width: 840px;
		height: 540px;
		transition: 0.5s;
		position: relative;
		top: 50%;
		left: 50%;
		-webkit-transform: translateX(-50%) translateY(-50%);
	}

	.login-wrap:hover {
		box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.3);
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
			color: #000;
		}

		.item-form {
			margin-bottom: 13px;
		}

		.block {
			display: block;
			width: 100%;
		}
	}

	.login-left {
		padding: 50px;
		display: inline-block;
		width: 520px;
		height: 540px;
	}

	.login-right {
		margin-left: 20px;
		overflow: hidden;
		float: right;
		display: inline-block;
		width: 300px;
		height: 540px;
	}
	img {
		width: 300px;
	}
</style>
