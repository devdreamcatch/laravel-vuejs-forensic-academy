<template>
  <vx-card no-shadow>

    <vs-input class="w-full" name="old password" v-bind:label="$t('my_data.change_password.old_password')" v-model="old_password" v-validate="'required'"
              data-vv-validate-on="blur" />
      <span class="text-danger text-sm">{{ errors.first('old password') }}</span>
    <vs-input class="w-full mt-base" name="new password" v-bind:label="$t('my_data.change_password.new_password')" v-model="new_password" v-validate="'required'"
              data-vv-validate-on="blur" />
      <span class="text-danger text-sm">{{ errors.first('new password') }}</span>
    <vs-input class="w-full mt-base" name="confirm password" v-bind:label="$t('my_data.change_password.confirm_password')" v-model="confirm_password" v-validate="'required'"
              data-vv-validate-on="blur" />
      <span class="text-danger text-sm">{{ errors.first('confirm password') }}</span>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2">{{ $t("my_data.change_password.title") }}</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  data () {
    return {
        old_password: '',
        new_password: '',
        confirm_password: ''
    }
  },
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  }
}
</script>
