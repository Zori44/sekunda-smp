const tlacitko = document.getElementById("ip-btn");

tlacitko.addEventListener("click", function() {
    // 1. Zkopíruje IP do schránky (doplň svou adresu z Playit.gg)
    navigator.clipboard.writeText("tvoje-adresa.playit.gg");

    // 2. Změní text a barvu tlačítka
    tlacitko.innerText = "Zkopírováno! ✅";
    tlacitko.style.backgroundColor = "#16a34a";

    // 3. Po 2000 milisekundách (2 vteřinách) to vrátí zpět
    setTimeout(function() {
        tlacitko.innerText = "Zkopírovat IP";
        tlacitko.style.backgroundColor = "#22c55e";
    }, 2000);
});
async function zjistiStav() {
    const stavText = document.getElementById("stav-serveru");
    try {
        const odpoved = await fetch("https://preservation-guy-nominated-submissions.trycloudflare.com/stav");
        const data = await odpoved.json();

        if (data.online) {
            stavText.innerText = "🟢 " + data.info;
            stavText.style.color = "#4ade80";
        } else {
            stavText.innerText = "🔴 Server je momentálně offline";
            stavText.style.color = "#f87171";
        }
    } catch (e) {
        stavText.innerText = "⚪ Stav serveru nedostupný";
    }
}

zjistiStav();
