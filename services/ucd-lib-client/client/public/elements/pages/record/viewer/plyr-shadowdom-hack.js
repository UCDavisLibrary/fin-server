// waiting this issue fix to make it's way into the plyr release
// https://github.com/sampotts/plyr/issues/1415
module.exports = function(ele) {
  Array.from(ele.shadowRoot.querySelectorAll('button[role="menuitemradio"]'))
    .forEach(btn => btn.addEventListener('click', e => onBtnClicked(e)))
}

function onBtnClicked(e) {
  Array.from(e.currentTarget.parentElement.querySelectorAll('button[role="menuitemradio"]'))
      .forEach(btn => (e.currentTarget !== btn) ? btn.checked = false : null);
}