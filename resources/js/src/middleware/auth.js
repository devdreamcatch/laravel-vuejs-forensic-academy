export default function auth({ next, router }) {
    if (!localStorage.getItem(`accessToken`)) {
        return router.push({ name: `login` });
    }
    return next();
}
