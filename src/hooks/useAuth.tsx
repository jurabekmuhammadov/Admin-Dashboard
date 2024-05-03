export const useAuth = () => {
    const user = localStorage.getItem('access_token')
    if (user) {
        return true;
    } else {
        return false
    }
};