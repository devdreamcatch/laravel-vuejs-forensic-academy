<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
	<div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center">
		<div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
			<vx-card>
				<div slot="no-body" class="full-page-bg-color">
					<div class="vx-row no-gutter">
						<div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
							<img src="@assets/images/pages/login.png" alt="register" class="mx-auto">
						</div>
						<div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg">
							<div class="px-8 pt-8 register-tabs-container">
								<div class="vx-card__title mb-4">
									<h4 class="mb-4">Create Account</h4>
									<p>Fill the below form to create a new account.</p>
								</div>
								<div class="clearfix">
									<vs-input
										label-placeholder="Name"
										name="displayName"
										placeholder="Name"
										class="w-full" />
									<span class="text-danger text-sm"></span>

									<vs-input
										name="email"
										type="email"
										label-placeholder="Email"
										placeholder="Email"
										class="w-full mt-6" />
									<span class="text-danger text-sm"></span>

									<vs-input
										ref="password"
										type="password"
										name="password"
										label-placeholder="Password"
										placeholder="Password"
										class="w-full mt-6" />
									<span class="text-danger text-sm"></span>

									<vs-input
										type="password"
										data-vv-as="password"
										name="confirm_password"
										label-placeholder="Confirm Password"
										placeholder="Confirm Password"
										class="w-full mt-6" />
									<span class="text-danger text-sm"></span>

									<vs-checkbox class="mt-6">I accept the terms & conditions.</vs-checkbox>
									<vs-button  type="border" to="/login" class="mt-6">Login</vs-button>
									<vs-button class="float-right mt-6">Register</vs-button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</vx-card>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">
.register-tabs-container {
  	min-height: 517px;

  	.con-tab {
   	padding-bottom: 23px;
  	}
}
</style>
