let x = setInterval(function () {
  let d = new Date(`Jan 1 ${/omicron/gi.test(window.location.pathname) ? "2023" : "2022"} 00:00:00`).getTime() - new Date().getTime();
  let h = Math.floor(d / (36e5));
  let m = Math.floor((d % (36e5)) / (60e3));
  let s = Math.floor((d % (60e3)) / 1e3);
  let zF = (n, c) => ('0' + String(n)).slice(c ? -c : -2);

  let totale = `${zF(h, h.toString().length < 2 ? 2 : h.toString().length)}:${zF(m)}:${zF(s)}`;
  document.querySelector("div.countdown h1").innerText = totale;
  document.title = totale;
  document.querySelector("div.countdown p").innerText = `.${(d / 1e3).toString().split(".").pop()}`

  if (d < 0) {
    document.title = "00:00:00";
    clearInterval(x);
    document.querySelector("div.countdown").style.display = "none";
    window.location.href = 'https://13373333.one/2022/omicron';
    return;
  }
}, 1);