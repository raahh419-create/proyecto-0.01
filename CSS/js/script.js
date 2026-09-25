```javascript
document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".custom-link");
    const instagramButton = document.querySelector(".instagram-button");

    /*
     * Efecto al pasar el mouse por los enlaces
     */

    links.forEach((link) => {

        link.addEventListener("mouseenter", () => {
            link.style.transform = "translateY(-4px) scale(1.01)";
        });

        link.addEventListener("mouseleave", () => {
            link.style.transform = "";
        });

    });


    /*
     * Pequeño efecto al pulsar Instagram
     */

    if (instagramButton) {

        instagramButton.addEventListener("click", () => {

            instagramButton.style.transform = "scale(0.97)";

            setTimeout(() => {
                instagramButton.style.transform = "";
            }, 150);

        });

    }


    /*
     * Animación de entrada de la página
     */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 0.6s ease";

        document.body.style.opacity = "1";

    }, 100);


});
```
