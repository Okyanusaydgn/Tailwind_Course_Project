const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

const MSG = {
  empty: "Please enter something",
  invalid: "Please enter a valid URL",
};

const isValidUrl = (value) => {
  const v = value.trim();
  try {
    new URL(/^[a-z]+:\/\//i.test(v) ? v : `https://${v}`);
    return true;
  } catch {
    return false;
  }
};

const setError = (message) => {
  errMsg.textContent = message;
  input.classList.add("border-red");
  input.setAttribute("aria-invalid", "true");
};

const clearError = () => {
  errMsg.textContent = "";
  input.classList.remove("border-red");
  input.removeAttribute("aria-invalid");
};

linkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();

  if (!value) return setError(MSG.empty);
  if (!isValidUrl(value)) return setError(MSG.invalid);

  clearError();
  alert("Success");
});

/*
linkForm.addEventListener("submit", formSubmit);

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errMsg.innerHTML = "Please enter something";
    input.classList.add("border-red");
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "Please enter a valid URL";
    input.classList.add("border-red");
  } else {
    errMsg.innerHTML = "";
    input.classList.remove("border-red");
    alert("Success");
  }
}
*/
