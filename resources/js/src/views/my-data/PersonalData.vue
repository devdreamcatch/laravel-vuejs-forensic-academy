<template>
    <vx-card no-shadow>
        <!-- Img Row -->
        <div class="flex flex-wrap items-center mb-base">
            <vs-avatar :src="photoURL" size="70px" class="mr-4 mb-4" />
            <div>
                <input
                    type="file"
                    name="photo"
                    ref="photo"
                    @change="previewPhoto"
                    hidden
                    accept="image/jpeg, image/png" />
                <vs-button
                    class="mr-4 sm:mb-0 mb-2"
                    @click="$refs.photo.click()">
                    Upload photo
                </vs-button>
                <vs-button type="border" color="danger" @click="removePhoto">Remove</vs-button>
                <p class="text-sm mt-2">Allowed JPG, GIF or PNG. Max size of 800kB</p>
            </div>
        </div>

        <!-- Info -->
        <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
                <vs-input
                    class="w-full"
                    name="name"
                    v-model="name"
                    v-bind:label="$t('global.field.Name')"
                    v-bind:placeholder="$t('global.field.Name')"
                    v-validate="'required'"
                    data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('name') }}</span>
            </div>
            <div class="vx-col sm:w-1/2 w-full mb-2">
                <vs-input
                    class="w-full"
                    name="surname"
                    v-model="surname"
                    v-bind:label="$t('global.field.Surname')"
                    v-bind:placeholder="$t('global.field.Surname')"
                    v-validate="'required'"
                    data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('surname') }}</span>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col sm:w-1/3 w-full mb-2">
                <vs-input
                    class="w-full" name="cpf" v-model="cpf" v-bind:label="$t('global.field.CPF')" v-bind:placeholder="$t('global.field.CPF')" v-validate="'required'"
                    v-mask="'###.###.###-##'" data-vv-validate-on="blur" />
                <span class="text-danger text-sm">{{ errors.first('cpf') }}</span>
            </div>
            <div class="vx-col sm:w-1/3 w-full mb-2">
                <label class="vs-input--label">{{ $t('global.field.date_of_birth') }}</label>
                <flat-pickr name="date_of_birth"
                    class="w-full"
                    v-model="date_of_birth"
                    :config="{ dateFormat: 'Y-m-d' }" />
                <span class="text-danger text-sm">{{ errors.first('date_of_birth') }}</span>
            </div>
            <div class="vx-col sm:w-1/3 w-full mb-2">
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
        </div>
        <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
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
            <div class="vx-col sm:w-1/2 w-full mb-2">
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
            <div class="vx-col w-full">
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
        </div>

        <vs-alert icon-pack="feather" icon="icon-info" class="h-full my-4" color="warning">
            <span>
                Your email has not been confirmed. Please check your email inbox.  {{ email}} <br>
                <a href="#" class="hover:underline">Resend Confirmation</a>
            </span>
        </vs-alert>

        <!-- Save & Reset Button -->
        <div class="flex flex-wrap items-center justify-end">
            <vs-button class="ml-auto mt-2" @click="savePersonalData" :disabled="!validateForm">Save Changes</vs-button>
        </div>
    </vx-card>
</template>

<script>

import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from "vue-select"

export default {
    components: {
        vSelect,
        flatPickr
    },
    data () {
        return {
            name: this.$store.state.AppActiveUser.name,
            surname: this.$store.state.AppActiveUser.surname,
            email: this.$store.state.AppActiveUser.email,
            cpf: this.$store.state.AppActiveUser.cpf,
            date_of_birth: this.$store.state.AppActiveUser.date_of_birth,
            telephone: this.$store.state.AppActiveUser.telephone,
            whatsapp: this.$store.state.AppActiveUser.whatsapp,
            sexOptions: [
                {id: 1, label: this.$t('global.field.Male')},
                {id: 2, label: this.$t('global.field.Female')},
                {id: 3, label: this.$t('global.field.Other')}
            ],
            sex: {id: 1, label: this.$t('global.field.Male')},
            photoURL: this.$store.state.AppActiveUser.photo,
            photo: null
        }
    },
    computed: {
        activeUserInfo () {
            return this.$store.state.AppActiveUser
        },
        validateForm () {
            return !this.errors.any() && this.date_of_birth !== ''
        }
    },
    methods: {
        // Save personal data
        savePersonalData () {
            if (!this.validateForm) return
            this.$vs.loading()
            const payload = {
                userDetails: {
                    id: this.$store.state.AppActiveUser.id,
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
            this.$store.dispatch('mydata/savePersonalData', payload)
            .then(() => {
                this.$vs.loading.close()
                this.$vs.notify({
                    title: this.$t('global.Success'),
                    text: this.$t('my_data.personal_data.message_save_success'),
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
        },

        // Preview photo as avatar
        previewPhoto (event) {
            this.photo = this.$refs.photo.files[0]
            this.photoURL = URL.createObjectURL(this.photo)
        },

        // Reset photo
        removePhoto () {
            this.photoURL = ''
            this.photo = null
            this.$refs.photo.value = null
        }
    }
}
</script>
