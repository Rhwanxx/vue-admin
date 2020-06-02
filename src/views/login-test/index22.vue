<template>
	<div class="login">
		<div class="account__container">
			<div class="account__container__left">
				<div class="login_box">
					<div v-show="showQrCode" class="login-qrcode">
						<p>二维码登录</p>
						<img src="qrCodeUrl" />
					</div>
					<div v-show="!showQrCode" class="login-container__header">
						<p class="login-text">登录</p>
						<div class="login-pass">
							<span class="active" @click.stop="isMobile = true">密码</span>
							<span @click.stop="isMobile = false">验证码</span>
						</div>
						<el-form :model="mobileForm" ref="mobileForm" size="size" auto-complete="off">
							<el-form-item prop="loginName" :rules="loginNameRules">
								<el-input v-model="mobileForm.loginName" placeholder="请输入你的手机号">
									<span slot="prepend">中国+86</span>
								</el-input>
							</el-form-item>
							<el-form-item v-if="isMobile" prop="password">
								<el-input v-model="mobileForm.password" placeholder="请输入你的密码">
								</el-input>
							</el-form-item>
							<el-form-item v-else prop="yzm">
								<el-input v-model="mobileForm.yzm" placeholder="请输入你的验证码">
								</el-input>
							</el-form-item>
						</el-form>
					</div>
					<div class="qrcode" @click.stop="showQrcodeFn">

					</div>
				</div>
			</div>
			<div class="account__container__right">
				<img src="../../assets/bglogin2.jpg" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			const validatorMobile = (rules, value, callback) => {
				if (value) {
					if (/^[1-9]\d{10}$/.test(value)) {
						return callback();
					}
					return callback(new Error('手机号'))

				}
			}
			return {
				showQrCode: false,
				qrCodeUrl: '',
				isMobile: true,
				mobileForm: {
					loginName: '',
					password: '',
					yzm: '',
				},
				loginNameRules: [{
						requred: true,
						message: '请输入名称',
						trigger: 'blur'
					},
					{
						validator: validatorMobile,
						trigger: 'blur'
					}
				],
			};
		},
		methods: {
			showQrcodeFn() {
				this.showQrCode = !this.showQrCode
			}
		}
	};
</script>

<style>
	.login {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	.account__container {
		display: flex;
		width: 840px;
		margin-top: 251px;
	}

	.account__container__left {
		width: 535px;
		padding-right: 15px;
		box-sizing: border-box;

	}

	.account__container__left .login_box {
		position: relative;
		padding: 15px;
	}

	.account__container__left .qrcode {
		position: absolute;
		right: 0;
		top: 0;
		width: 64px;
		height: 64px;
		overflow: hidden;
		background-color: yellow;
	}

	.account__container__right {
		width: 305px;
	}

	.login-text {
		font-size: 24px;
		color: #000;
	}

	.login-pass span {
		display: inline-block;
		padding: 4px;
		margin-left: 20px;
	}

	.login-pass span:active {
		color: blue;
	}

	.login-pass span:first-child {
		margin-left: 0;
	}
</style>
