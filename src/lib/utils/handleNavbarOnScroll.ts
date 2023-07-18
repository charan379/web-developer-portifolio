export function handleNavbarOnScroll(navbarId: string, scrollY: number, className: string): void {
    const navigation = document.querySelector(navbarId);
    if (scrollY > 0) {
        navigation?.classList.add(className);
        navigation?.setAttribute("data-scrolled", "true")
    } else {
        navigation?.classList.remove(className);
        navigation?.setAttribute("data-scrolled", "false");
    }
}