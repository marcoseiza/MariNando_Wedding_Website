let lang = window.navigator.userLanguage || window.navigator.language,
    en = (lang.includes("en"))? true: (lang.includes("es"))? false : true;

let URLparam = new URLSearchParams(window.location.search);

if (URLparam.get("tran") != "0") {
  if (en) {
    var href = new URL(window.location.href);
    href.searchParams.set('tran', '0');
    window.location.href = href;
  } else {
    var href = new URL(window.location.href);
    href.searchParams.set('tran', '0');
    href.pathname = "spanish"
    window.location.href = href;
  }
}

