let lang = window.navigator.userLanguage || window.navigator.language,
    en = (lang.includes("en"))? true: (lang.includes("es"))? false : true;

var URLparam = new URLSearchParams(window.location.search);


if (URLparam.get("tran") != "0") {
  if (en) {
    window.location.href = "/index.html?tran=0";
  } else {
    window.location.href = "/index_spanish.html?tran=0";
  }
}

