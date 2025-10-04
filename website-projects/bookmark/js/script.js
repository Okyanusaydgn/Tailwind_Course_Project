const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Hamburger button listener (null-safe)
btn?.addEventListener("click", navToggle);

// Tabs (null-safe)
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  // 1) Tüm tab göstergelerinden aktif border'ı kaldır
  tabs.forEach((t) => {
    t.querySelector("[data-target]")?.classList.remove(
      "border-soft-red",
      "border-b-4"
    );
  });

  // 2) Tüm panelleri gizle
  panels.forEach((p) => p.classList.add("hidden"));

  // 3) Tıklanan tab'ı aktif yap
  const tab = e.currentTarget;
  const indicator = tab.querySelector("[data-target]");
  if (!indicator) return;

  indicator.classList.add("border-soft-red", "border-b-4");

  // 4) Hedef paneli göster
  // data-target="panel-1" gibi ise .panel-1'i bul
  const key = indicator.getAttribute("data-target"); // örn: "panel-1"
  // Önce doğrudan class ile, bulamazsa #panels içinden ara:
  const targetEl =
    document.querySelector(`.${key}`) ||
    document.querySelector(`#panels .${key}`);
  targetEl?.classList.remove("hidden");
}

function navToggle() {
  const nowOpen = menu?.classList.toggle("hidden") === false; // hidden kaldırıldıysa açık demektir

  // Hamburger ikon animasyonu için
  btn?.classList.toggle("open", nowOpen);

  // A11y
  btn?.setAttribute("aria-expanded", String(nowOpen));

  // Body scroll kilidi
  document.body.classList.toggle("overflow-hidden", nowOpen);

  // Logo değişimi (isteğe bağlı)
  logo?.setAttribute(
    "src",
    nowOpen ? "./images/logo-bookmark-footer.svg" : "./images/logo-bookmark.svg"
  );
}

// (İsteğe bağlı) ESC ile menüyü kapat
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu && !menu.classList.contains("hidden")) {
    navToggle();
  }
});
