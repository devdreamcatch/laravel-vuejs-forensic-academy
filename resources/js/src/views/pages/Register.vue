<template>
	<div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center">
		<div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
			<vx-card>
				<div slot="no-body" class="full-page-bg-color">
					<div class="vx-row no-gutter">
						<div class="vx-col sm:w-full md:w-full lg:w-full mx-auto self-center  d-theme-dark-bg">
							<div class="px-8 p-8">
								<div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
									<img class="mx-auto" src="@assets/images/pages/logo.png" alt="branding logo">
								</div>
								<div class="vx-card__title mb-4">
									<h4 class="mb-4">{{ $t('register.create') }}</h4>
								</div>
								<vs-alert active="true" color="danger">
									{{ $t('register.fill') }} <b>{{ $t('register.invoices') }}</b> {{ $t('register.and') }} <b>{{ $t('register.certificaters') }}</b>.
								</vs-alert>
								<div class="clearfix mt-4">
									<div class="vx-row mb-2">
										<div class="vx-col sm:w-4/12 w-full">
											<vs-input
												class="w-full"
												name="name"
												v-model="name"
												v-bind:label="$t('global.field.Name')"
												v-bind:placeholder="$t('global.field.Name')"
												v-validate="'required|alpha'"
                    						data-vv-validate-on="blur" />
											<span class="text-danger text-sm">{{ errors.first('name') }}</span>
										</div>
										<div class="vx-col sm:w-5/12 w-full">
											<vs-input
												class="w-full"
												name="surname"
												v-model="surname"
												v-bind:label="$t('global.field.Surname')"
												v-bind:placeholder="$t('global.field.Surname')"
												v-validate="'required|alpha'"
                    						data-vv-validate-on="blur" />
											<span class="text-danger text-sm">{{ errors.first('surname') }}</span>
										</div>
										<div class="vx-col sm:w-3/12 w-full">
											<vs-input
												class="w-full"
												name="cpf"
												v-model="cpf"
												v-bind:label="$t('global.field.CPF')"
												v-bind:placeholder="$t('global.field.CPF')"
												v-validate="'required'"
												v-mask="'###.###.###-##'"
												data-vv-validate-on="blur" />
											<span class="text-danger text-sm">{{ errors.first('cpf') }}</span>
										</div>
									</div>

									<div class="vx-row mb-2">
										<div class="vx-col sm:w-1/4 w-full">
											<label class="vs-input--label">{{ $t('global.field.Sex') }}</label>
											<v-select
												name="sex"
												v-model="sex"
												:options="sexOptions"
												:clearable="false"
												v-validate="'required'"
												data-vv-validate-on="blur"
												:dir="$vs.rtl ? 'rtl' : 'ltr'" />
											<span class="text-danger text-sm">{{ errors.first('sex') }}</span>
										</div>
										<div class="vx-col sm:w-1/4 w-full">
											<label class="vs-input--label">{{ $t('global.field.date_of_birth') }}</label>
      									<flat-pickr name="date_of_birth"
												class="w-full"
												v-model="date_of_birth"
												:config="{ dateFormat: 'Y-m-d' }" />
											<span class="text-danger text-sm">{{ errors.first('date_of_birth') }}</span>
										</div>
										<div class="vx-col sm:w-1/4 w-full">
											<vs-input
												class="w-full"
												name="telephone"
												v-model="telephone"
												v-bind:label="$t('global.field.Telephone')"
												v-bind:placeholder="$t('global.field.Telephone')"
												v-validate="'required'"
												data-vv-validate-on="blur" />
											<span class="text-danger text-sm">{{ errors.first('telephone') }}</span>
										</div>
										<div class="vx-col sm:w-1/4 w-full">
											<vs-input
												class="w-full"
												name="whatsapp"
												v-model="whatsapp"
												v-bind:label="$t('global.field.Whatsapp')"
												v-bind:placeholder="$t('global.field.Whatsapp')"
												v-validate="'required'"
												data-vv-validate-on="blur" />
											<span class="text-danger text-sm">{{ errors.first('whatsapp') }}</span>
										</div>
									</div>

									<div class="vx-row mb-2">
										<div class="vx-col sm:w-1/2 w-full">
											<vs-input
												class="w-full"
												name="email"
												v-model="email"
												v-bind:label="$t('global.field.Email')"
												v-bind:placeholder="$t('global.field.Email')"
												v-validate="'required|email'"
												ref="email"
												data-vv-validate-on="blur" />
											<span class="text-danger text-sm">{{ errors.first('email') }}</span>
										</div>
										<div class="vx-col sm:w-1/2 w-full">
											<vs-input
												class="w-full"
												name="email_confirmation"
												v-model="emailConfirmation"
												v-bind:label="$t('global.field.EmailConfirmation')"
												v-bind:placeholder="$t('global.field.EmailConfirmation')"
												v-validate="'required|email|confirmed:email'"
												data-vv-validate-on="blur" />
											<span class="text-danger text-sm">{{ errors.first('email_confirmation') }}</span>
										</div>
									</div>

									<div class="vx-row mb-2">
										<div class="vx-col sm:w-1/2 w-full">
											<vs-input
												class="w-full"
												name="password"
                    						    type="password"
												v-model="password"
												v-bind:label="$t('global.field.CreatePassword')"
												v-bind:placeholder="$t('global.field.CreatePassword')"
												v-validate="'required'"
												ref="password"
												data-vv-validate-on="blur" />
											<span class="text-danger text-sm">{{ errors.first('password') }}</span>
										</div>
										<div class="vx-col sm:w-1/2 w-full">
											<vs-input
												class="w-full"
												name="password_confirmation"
												type="password"
												v-model="passwordConfirmation"
												v-bind:label="$t('global.field.PasswordConfirmation')"
												v-bind:placeholder="$t('global.field.PasswordConfirmation')"
												v-validate="'required|confirmed:password'"
												data-vv-validate-on="blur" />
											<span class="text-danger text-sm">{{ errors.first('password_confirmation') }}</span>
										</div>
									</div>

									<vs-checkbox class="mt-6" v-model="isTermsConditionAccepted">{{ $t('register.acceptCondition') }}</vs-checkbox>
									<vs-button  type="border" to="/login" class="mt-6">{{ $t('register.view_contract') }}</vs-button>
									<vs-button
										class="float-right mt-6"
										@click="register" :disabled="!validateForm">
										{{ $t('global.field.Register') }}
									</vs-button>
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
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default {
	data () {
    	return {
			name: "",
			surname: "",
			cpf: "",
			sexOptions: [
				{id: 1, label: this.$t('global.field.Male')},
				{id: 2, label: this.$t('global.field.Female')},
				{id: 3, label: this.$t('global.field.Other')}
      	],
			sex: {id: 1, label: this.$t('global.field.Male')},
			date_of_birth: '',
			telephone: '',
			whatsapp: '',
			email: '',
			emailConfirmation: '',
			password: '',
			passwordConfirmation: '',
			isTermsConditionAccepted: true
    }
  	},

	computed: {
		validateForm () {
			return ! this.isTermsConditionAccepted === false && !this.errors.any() && this.date_of_birth !== ''
		}
	},

	methods: {
		checkLogin () {
			// If user is already logged in notify
			if (this.$store.state.auth.isUserLoggedIn()) {
				// Close animation if passed as payload
				// this.$vs.loading.close()

				this.$vs.notify({
					title: this.$t('login.attempt_title'),
					text: this.$t('login.already_login'),
					iconPack: 'feather',
					icon: 'icon-alert-circle',
					color: 'warning'
				})
				return false
			}
			return true
		},

		register () {
			// If form is not validated or user is already login return
			if (!this.validateForm || !this.checkLogin()) return
			this.$vs.loading()
			const payload = {
				userDetails: {
					name: this.name,
					surname: this.surname,
					cpf: this.cpf,
					sex: this.sex.id,
					date_of_birth: this.date_of_birth,
					telephone: this.telephone,
					whatsapp: this.whatsapp,
					email: this.email,
					password: this.password,
				}
			}
			this.$store.dispatch('auth/registerUserJWT', payload)
				.then(() => { this.$vs.loading.close() })
				.catch(error => {
					this.$vs.loading.close()
					if (error.response.status === 422) {
						this.$vs.notify({
							title: this.$t('global.Error'),
							text: this.$t('message.emailAlreadyTaken'),
							iconPack: 'feather',
							icon: 'icon-alert-circle',
							color: 'danger'
						})
					}
				})
		}
	},

  	components: {
		vSelect,
		flatPickr
  	}
}
</script>

<style>

</style>
