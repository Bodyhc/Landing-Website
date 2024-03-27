document.addEventListener("DOMContentLoaded", function() {
    // احفظ لون النص الأصلي
    const defaultTextColor = "#111729";
    const navbar = document.querySelector("nav");
    const ullinks = navbar.querySelectorAll("li > a");
    const paths = navbar.querySelectorAll(".logo > svg path");
    const modeSwitch = document.querySelector(".mode");
    const checkbox = modeSwitch.querySelector(".input");
    const lastSevenPaths = Array.from(paths).slice(-7);
    const leftMain = document.querySelectorAll("p, h1"); // دمج العناصر p و h1

    const body = document.body;

    checkbox.addEventListener("change", function() {
        if (this.checked) {
            body.style.backgroundColor = "#111729";
            leftMain.forEach((element) => {
                element.style.color = "#ffffff";
            });

            lastSevenPaths.forEach(path => {
                path.style.fill = "#ffffff";
            });
        } else {
            body.style.backgroundColor = "#F2F9FE";
            lastSevenPaths.forEach(path => {
                path.style.fill = "#223344";
            });

            leftMain.forEach((element) => {
                element.style.color = "#000000";
            });
        }

        ullinks.forEach(link => {
            link.addEventListener('click', () => {
                ullinks.forEach(otherLink => {
                    otherLink.classList.remove('Dark_active');
                    otherLink.classList.remove('active');
                    otherLink.style.color = this.checked ? "#909193" : defaultTextColor;
                });
                link.classList.add(this.checked ? 'Dark_active' : 'active');
                link.style.color = this.checked ? "#ffffff" : defaultTextColor;
            });
        });
    });

    // إعطاء العنصر النشط الأسلوب "active" عند النقر
    ullinks.forEach(link => {
        link.addEventListener('click', () => {
            ullinks.forEach(otherLink => {
                otherLink.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
});
