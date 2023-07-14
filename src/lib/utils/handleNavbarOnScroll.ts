export function handleNavbarOnScroll(navbarId: string, scrollY: number, className: string): void {
    const navigation = document.querySelector(navbarId);
    if (scrollY > 0) {
        navigation?.classList.add(className);
    } else {
        navigation?.classList.remove(className);
    }
}