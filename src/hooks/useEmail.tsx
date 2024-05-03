export const useEmail = () => {
    const email = localStorage.getItem('email')
    if (email) {
        return true;
    } else {
        return false
    }
};