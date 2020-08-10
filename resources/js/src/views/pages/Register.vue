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
						<div class="vx-col sm:w-full md:w-full lg:w-full mx-auto self-center  d-theme-dark-bg">
							<div class="px-8 pt-8 register-tabs-container">
								<div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
									<img class="mx-auto" src="@assets/images/pages/logo.png" alt="branding logo">
								</div>
								<div class="vx-card__title mb-4">
									<h4 class="mb-4">{{ $t('register.create') }}</h4>
								</div>
								<vs-alert active="true" color="danger">
									{{ $t('register.fill') }} <b>{{ $t('register.invices') }}</b> {{ $t('register.and') }}<b>{{ $t('register.certificaters') }}</b>.
								</vs-alert>
								<div class="clearfix">
									<vs-row vs-w="12">
										<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12" >
											vs-lg="2" vs-sm="4" vs-xs="12"
										</vs-col>
										<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">
											vs-lg="8" vs-sm="4" vs-xs="12"
										</vs-col>
										<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">
											vs-lg="2" vs-sm="4" vs-xs="12"
										</vs-col>
									</vs-row>
									<vs-input
										label-placeholder="Name"
										name="displayName"
										placeholder="Name"
										class="" />
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
