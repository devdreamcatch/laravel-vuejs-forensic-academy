<template>
    <vx-card no-shadow>
        <vs-input
            class="w-full"
            name="old_password"
            type="password"
            v-bind:label="$t('my_data.change_password.old_password')"
            v-model="old_password"
            v-validate="'required|min:6'"
            data-vv-validate-on="blur" />
        <span class="text-danger text-sm">{{ errors.first('old_password') }}</span>

        <vs-input
            class="w-full mt-base"
            name="new_password"
            type="password"
            v-bind:label="$t('my_data.change_password.new_password')"
            v-model="new_password"
            v-validate="'required|min:6'"
            data-vv-validate-on="blur" />
        <span class="text-danger text-sm">{{ errors.first('new_password') }}</span>

        <vs-input
            class="w-full mt-base"
            name="confirm_password"
            type="password"
            v-bind:label="$t('my_data.change_password.confirm_password')"
            v-model="confirm_password"
            v-validate="'required|min:6'"
            data-vv-validate-on="blur" />
        <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>
        <div class="flex flex-wrap items-center justify-end mt-4">
            <vs-button
                class="ml-auto mt-2"
                @click="resetPassword"
                :disabled="!validateForm">
                {{ $t("my_data.change_password.title") }}
            </vs-button>
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
        validateForm () {
            return !this.errors.any()
        }
    },
    methods: {
        // Reset password
        resetPassword () {
            if (!this.validateForm) return
            this.$vs.loading()
            const payload = {
                old_password: this.old_password,
                new_password: this.new_password,
                confirm_password: this.confirm_password,
            }
            this.$store.dispatch('mydata/resetPassword', payload)
                .then(() => {
                    this.$vs.loading.close()
                    this.$vs.notify({
                        title: this.$t('global.Success'),
                        text: this.$t('my_data.change_password.message_save_success'),
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position: 'top-right',
                        color: 'success'
                    })
                })
                .catch(error => {
                    this.$vs.loading.close()
                    if (error.response.status === 422) {
                        for (let item in error.response.data) {
                            this.errors.add({
                                scope: null,
                                field: item,
                                rule: 'required',
                                msg: error.response.data[item][0]
                            })
                        }
                        console.log(this.errors);
                    }
                })
        }
    }
}
</script>
