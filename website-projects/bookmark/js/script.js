const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  tabs.forEach((t) => {
    const indicator = t.querySelector("[data-target]");
    indicator.classList.remove("border-soft-red", "border-b-4");
  });

  panels.forEach((p) => p.classList.add("hidden"));

  const tab = e.currentTarget;
  const indicator = tab.querySelector("[data-target]");
  indicator.classList.add("border-soft-red", "border-b-4");

  const targetClass = indicator.getAttribute("data-target");
  document.querySelector(`#panels .${targetClass}`).classList.remove("hidden");
}
