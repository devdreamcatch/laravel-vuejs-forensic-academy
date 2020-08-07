<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@assets/images/pages/login.png" alt="login" class="mx-auto">
            </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8">
                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">{{ $t('global.login') }}</h4>
                  <p class="px-2 text-center">
                    {{ $t('login.welcome') }} <b>{{ $t('global.email') }}</b> {{ $t('login.and') }} <b>{{ $t('global.password') }}</b> . <b>{{ $t('global.signup') }}</b> {{ $t('login.below') }} 
                  </p>
                </div>
                <div>
                  <vs-input
                    v-validate="'required|email|min:3'"
                    data-vv-validate-on="blur"
                    name="email"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    v-bind:label-placeholder="$t('global.email')"
                    v-model="email"
                    class="w-full"/>
                  <span class="text-danger text-sm">{{ errors.first('email') }}</span>

                  <vs-input
                    data-vv-validate-on="blur"
                    v-validate="'required|min:6'"
                    type="password"
                    name="password"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    v-bind:label-placeholder="$t('global.password')"
                    v-model="password"
                    class="w-full mt-6" />
                  <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                  <div class="flex flex-wrap justify-between my-5">
                    <vs-checkbox v-model="checkbox_remember_me" class="mb-3">{{ $t('login.remember me') }}</vs-checkbox>
                    <router-link to="">{{ $t('login.forgot password') }}</router-link>
                  </div>
                  <vs-button to="/register" type="border">{{ $t('global.register') }}</vs-button>
                  <vs-button class="float-right">{{ $t('global.login') }}</vs-button>
                  <vs-divider>{{ $t('login.bar_or') }}</vs-divider>
                  <div class="social-login-buttons flex flex-wrap items-center mt-4">
                    <!-- facebook -->
                    <div class="bg-facebook pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" class="text-white h-4 w-4 svg-inline--fa fa-facebook-f fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512"><path fill="currentColor" d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"></path></svg>
                    </div>
                    <!-- GOOGLE -->
                    <div class="bg-google pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" class="text-white h-4 w-4 svg-inline--fa fa-google fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    </div>
                  </div>
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
import i18n from '@/plugins/i18n'

export default{
  data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: false,
    }
  },
  
  computed: {

  },

  methods: {

  }
}
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook { background-color: #1551b1 }
    .bg-twitter { background-color: #00aaff }
    .bg-google { background-color: #4285F4 }
    .bg-github { background-color: #333 }
  }
}
</style>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
