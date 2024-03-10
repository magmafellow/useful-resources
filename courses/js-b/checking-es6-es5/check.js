function doesSupport () {
  try {
    eval("`test literal`");
  } catch (e) {
    return false;
  }
  return true;
}

function addScriptEl(string) {
  const script = document.createElement('script');
  script.src = string;
  document.body.appendChild(script);
}

if (doesSupport()) {
  addScriptEl('src/es6.js');
} else {
  addScriptEl('src/es5.js');
}
