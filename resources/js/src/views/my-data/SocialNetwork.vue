<template>
	<vx-card no-shadow>
		<vs-input
			name="facebook"
			class="w-full mb-base"
			v-model="facebook"
			icon-pack="feather"
			icon="icon-facebook"
			v-bind:label="$t('my_data.social_network.facebook')"
			v-bind:placeholder="$t('my_data.social_network.facebook_place')"
			icon-no-border />
		<span class="text-danger text-sm">{{ errors.first('facebook') }}</span>

		<vs-input
			name="instagram"
			class="w-full mb-base"
			v-model="instagram"
			icon-pack="feather"
			icon="icon-instagram"
			v-bind:label="$t('my_data.social_network.instagram')"
			v-bind:placeholder="$t('my_data.social_network.instagram_place')"
			icon-no-border />
		<span class="text-danger text-sm">{{ errors.first('instagram') }}</span>

		<vs-input
			name="linkedin"
			class="w-full mb-base"
			v-model="linkedin"
			icon-pack="feather"
			icon="icon-linkedin"
			v-bind:label="$t('my_data.social_network.linkedin')"
			v-bind:placeholder="$t('my_data.social_network.linkedin_place')"
			icon-no-border />
		<span class="text-danger text-sm">{{ errors.first('linkedin') }}</span>

		<vs-input
			name="twitter"
			class="w-full mb-base"
			v-model="twitter"
			icon-pack="feather"
			icon="icon-twitter"
			v-bind:label="$t('my_data.social_network.twitter')"
			v-bind:placeholder="$t('my_data.social_network.twitter_place')"
			icon-no-border />
		<span class="text-danger text-sm">{{ errors.first('twitter') }}</span>

		<!-- Save & Reset Button -->
		<div class="flex flex-wrap items-center justify-end">
			<vs-button
				class="ml-auto mt-2"
				@click="saveSocial">
				{{ $t('global.button.save_change') }}
			</vs-button>
			<vs-button
				class="ml-4 mt-2"
				type="border"
				color="warning">
				{{ $t('global.button.reset') }}
			</vs-button>
		</div>
  </vx-card>
</template>

<script>
export default {
	data () {
		return {
			facebook: '',
			instagram: '',
			linkedin: '',
			twitter: ''
		}
	},
	methods: {
		saveSocial () {
			this.$vs.loading()
			const payload = {
				userDetails: {
					id: this.$store.state.AppActiveUser.id,
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