export default function auth({ next, router }) {
    if (!localStorage.getItem(`accessToken`) || !localStorage.getItem(`userInfo`)) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('userInfo')
        return router.push({ name: `login` });
    }
    return next();
}
