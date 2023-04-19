export const handleMenuToggle = () => {
    const menuToggle = document.getElementById('myLinks');
    if (menuToggle.style.display === "block") {
        menuToggle.style.display = "none";
    } else {
        menuToggle.style.display = "block";
    }
};