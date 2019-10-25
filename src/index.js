import { devineLog } from './js/utility/helpers.js';

const init = () => {
  console.log("hello");
  document.querySelector(`body`).addEventListener(`click`, handleClickBody);
};

const handleClickBody = event => {
  devineLog(event);
  devineLog(event.clientX);
  devineLog(event.clientX);


};

$.getJSON("../data.json", function(json) {
  console.log(json); // this will show the info it in firebug console
});

init();
