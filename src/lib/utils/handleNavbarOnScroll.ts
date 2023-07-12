export function handleNavbarOnScroll(navbarId: string, scrollY: number): void {
    const navigation = document.querySelector(navbarId);
    if (scrollY > 0) {
        navigation?.classList.add("scroll");
    } else {
        navigation?.classList.remove("scroll");
    }
}