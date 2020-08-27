import auth from '@/auth/authService'

export default {
  isUserLoggedIn: () => {
    let isAuthenticated = false

    return localStorage.getItem('userInfo') && isAuthenticated
  }
}
