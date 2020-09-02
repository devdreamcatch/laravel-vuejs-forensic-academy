<template>
	<vx-card no-shadow>
		<vs-input
			name="facebook"
			class="w-full"
			v-model="facebook"
			icon-pack="feather"
			icon="icon-facebook"
			v-bind:label="$t('my_data.social_network.facebook')"
			v-bind:placeholder="$t('my_data.social_network.facebook_place')"
			v-validate="'url'"
			data-vv-validate-on="blur"
			icon-no-border />
		<span class="text-danger text-sm">{{ errors.first('facebook') }}</span>

		<vs-input
			name="instagram"
			class="w-full mt-base"
			v-model="instagram"
			icon-pack="feather"
			icon="icon-instagram"
			v-bind:label="$t('my_data.social_network.instagram')"
			v-bind:placeholder="$t('my_data.social_network.instagram_place')"
			v-validate="'url'"
			data-vv-validate-on="blur"
			icon-no-border />
		<span class="text-danger text-sm">{{ errors.first('instagram') }}</span>

		<vs-input
			name="linkedin"
			class="w-full mt-base"
			v-model="linkedin"
			icon-pack="feather"
			icon="icon-linkedin"
			v-bind:label="$t('my_data.social_network.linkedin')"
			v-bind:placeholder="$t('my_data.social_network.linkedin_place')"
			v-validate="'url'"
			data-vv-validate-on="blur"
			icon-no-border />
		<span class="text-danger text-sm">{{ errors.first('linkedin') }}</span>

		<vs-input
			name="twitter"
			class="w-full mt-base"
			v-model="twitter"
			icon-pack="feather"
			icon="icon-twitter"
			v-bind:label="$t('my_data.social_network.twitter')"
			v-bind:placeholder="$t('my_data.social_network.twitter_place')"
			v-validate="'url'"
			data-vv-validate-on="blur"
			icon-no-border />
		<span class="text-danger text-sm">{{ errors.first('twitter') }}</span>

		<!-- Save & Reset Button -->
		<div class="flex flex-wrap items-center justify-end">
			<vs-button
				class="ml-auto mt-base"
				@click="saveSocial"
				:disabled="!validateForm">
				{{ $t('global.button.save_change') }}
			</vs-button>
		</div>
  </vx-card>
</template>

<script>
export default {
	data () {
		return {
			facebook: this.$store.state.AppActiveUser.facebook,
			instagram: this.$store.state.AppActiveUser.instagram,
			linkedin: this.$store.state.AppActiveUser.linkedin,
			twitter: this.$store.state.AppActiveUser.twitter
		}
	},
	methods: {
		saveSocial () {
			if (!this.validateForm) return

			this.$vs.loading()
			const payload = {
				userDetails: {
					facebook: this.facebook,
					instagram: this.instagram,
					linkedin: this.linkedin,
					twitter: this.twitter,
				}
			}

			this.$store.dispatch('mydata/saveSocial', payload)
            .then(() => {
					this.$vs.loading.close()
					this.$vs.notify({
						title: this.$t('global.Success'),
						text: this.$t('my_data.social_network.message_save_success'),
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
					}
            })
		}
	},

	computed: {
		validateForm () {
			return !this.errors.any()
		},
	}
}
</script>