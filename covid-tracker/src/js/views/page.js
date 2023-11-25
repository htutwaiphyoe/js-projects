//preloader
export const load = () => {
    window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finished');
    document.querySelector('body').classList.add('preload-show');
    setTimeout(() => {
        preloader.remove();
        document.querySelector('body').classList.remove('preload-show');
    },1500);

})
};