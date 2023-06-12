(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    setFontSize = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 750) {
        clientWidth = 750;
      }
      docEl.style.fontSize = 10 * (clientWidth / 750) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, setFontSize, false);
  doc.addEventListener('DOMContentLoaded', setFontSize, false);
})(document, window);
