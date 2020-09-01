<template>
    <vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">
        <!-- GENERAL -->
        <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? $t('my_data.personal_data.title') : ''">
            <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <personal-data />
            </div>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? $t('my_data.change_password.title') : ''">
            <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
                <change-password />
            </div>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-link" :label="!isSmallerScreen ? $t('my_data.social_network.title') : ''">
            <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
                <social-network />
            </div>
        </vs-tab>
    </vs-tabs>
</template>

<script>
import PersonalData from './PersonalData.vue'
import ChangePassword from './ChangePassword.vue'
import SocialNetwork from './SocialNetwork.vue'

export default {
    components: {
        PersonalData,
        ChangePassword,
        SocialNetwork
    },
    data () {
        return {

        }
    },
    computed: {
        isSmallerScreen () {
            return this.$store.state.windowWidth < 768
        }
    }
}
</script>

<style scoped lang="scss">
#profile-tabs {
    .vs-tabs--content {
        padding: 0;
    }
}
</style>
