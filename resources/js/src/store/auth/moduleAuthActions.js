import axios from '@/axios'
import store from '../store.js'
import router from '@/router'

export default {
  // JWT login
  loginJWT ({ commit }, payload) {
    const { email, password } = payload.userDetails

    return new Promise((resolve, reject) => {
      axios.post('/api/token', {
        email: email,
        password: password,
        checkbox_remember_me: payload.checkbox_remember_me
      })
      .then(response => {
        // If there's user data in response
        if (response.data.user_info) {
          // Navigate User to homepage

          window.localStorage.clear();
          // Set accessToken
          localStorage.setItem('accessToken', response.data.token)

          // Update user details
          commit('UPDATE_USER_INFO', response.data.user_info, {root: true})

          router.push(router.currentRoute.query.to || '/').catch(()=>{});
          resolve(response)
        } else {
          reject({message: 'Wrong Email or Password'})
        }
      })
      .catch(error => { reject(error) })
    })
  },

  // JWT logout
  logoutJWT ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.post('/api/logout')
      .then(response => {
        window.localStorage.clear();
        router.push('/login').catch(() => {});
        resolve(response);
      })
      .catch(error => {
        reject(error)
      });
    })
  },

  // JWT register
  registerUserJWT ({ commit }, payload) {
    const { name, surname, cpf, sex, date_of_birth, telephone, whatsapp, email, password } = payload.userDetails

    return new Promise((resolve, reject) => {
      axios.post('/api/register', {
        name: name,
        surname: surname,
        cpf: cpf,
        sex: sex,
        date_of_birth: date_of_birth,
        telephone: telephone,
        whatsapp: whatsapp,
        email: email,
        password: password
      })
      .then(response => {
        // Redirect User
        router.push(router.currentRoute.query.to || '/')

        // Update data in localStorage
        localStorage.setItem('accessToken', response.data.accessToken)
        commit('UPDATE_USER_INFO', response.data.userData, {root: true})

        resolve(response)
      })
      .catch(error => { reject(error) })
    })
  },

  // JWT refresh token
  fetchAccessToken () {
    return new Promise((resolve) => {
      axios.post('/api/auth/refresh-token', {
        accessToken: localStorage.getItem('accessToKen')
      })
      .then(response => { resolve(response) })
    })
  }
}
