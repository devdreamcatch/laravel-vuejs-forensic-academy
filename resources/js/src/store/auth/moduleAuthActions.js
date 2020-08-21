import axios from '@/axios'
import store from '../store.js'
import router from '@/router'

export default {
  init () {
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      // const { config, response: { status } } = error
      const { config, response } = error
      const originalRequest = config

      // if (status === 401) {
      if (response && response.status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true
          store.dispatch('auth/fetchAccessToken')
            .then((access_token) => {
              isAlreadyFetchingAccessToken = false
              onAccessTokenFetched(access_token)
            })
        }

        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber(access_token => {
            originalRequest.headers.Authorization = `Bearer ${access_token}`
            resolve(axios(originalRequest))
          })
        })
        return retryOriginalRequest
      }
      return Promise.reject(error)
    })
  },

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
        localStorage.removeItem('accessToken')
        localStorage.removeItem('userInfo')
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
