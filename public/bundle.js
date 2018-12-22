(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dealerList = _interopRequireDefault(require("./dealerList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Given a single object, this component builds out the HTML and returns it
const dealer = {
  addProfit(fromDealer) {
    // const profitSum = fromDealer.gross_profit.reduce((total, amount) => {total +amount});
    // console.log(fromDealer);
    let addProfit = 0;
    fromDealer.forEach(info => {
      addProfit += info.gross_profit;
      console.log(info.purchase_date);
    }); // console.log(addProfit);

    let profitContainer = document.createElement("h2");
    profitContainer.setAttribute("class", "profit-container");
    profitContainer.textContent = `2017 Profit Total = ${addProfit}`;
    return profitContainer;
  },

  mostSellsMonth() {}

};
var _default = dealer;
exports.default = _default;

},{"./dealerList":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const dealerData = {
  getAllDealerData() {
    return fetch("http://localhost:8088/carDealerInfo").then(response => response.json());
  }

};
var _default = dealerData;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dealerData = _interopRequireDefault(require("./dealerData"));

var _dealer = _interopRequireDefault(require("./dealer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This component will get the data, build the HTML from the data and append it to the DOM.
const dealerList = {
  dealerinItUP() {
    _dealerData.default.getAllDealerData().then(dealerImportantInfo => {
      // console.log(dealerImportantInfo)
      let dealerDocFragment = document.createDocumentFragment();
      dealerDocFragment.appendChild(_dealer.default.addProfit(dealerImportantInfo));
      document.querySelector(".output").appendChild(dealerDocFragment);
      let salesDates = [];
      dealerImportantInfo.forEach(info => {
        salesDates.push(info.purchase_date);
      });
      salesDates.sort(function (a, b) {
        // convert date object into number to resolve issue in typescript
        return +new Date(a.date) - +new Date(b.date);
      }); // console.log(salesDates)
    });
  }

};
var _default = dealerList;
exports.default = _default;

},{"./dealer":1,"./dealerData":2}],4:[function(require,module,exports){
"use strict";

var _dealerList = _interopRequireDefault(require("./dealerList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dealerList.default.dealerinItUP();

},{"./dealerList":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RlYWxlci5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyRGF0YS5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyTGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7OztBQURBO0FBR0EsTUFBTSxNQUFNLEdBQUc7QUFDYixFQUFBLFNBQVMsQ0FBQyxVQUFELEVBQWE7QUFDcEI7QUFDQTtBQUNBLFFBQUksU0FBUyxHQUFHLENBQWhCO0FBQ0EsSUFBQSxVQUFVLENBQUMsT0FBWCxDQUFtQixJQUFJLElBQUk7QUFDekIsTUFBQSxTQUFTLElBQUksSUFBSSxDQUFDLFlBQWxCO0FBQ0EsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQyxhQUFqQjtBQUNELEtBSEQsRUFKb0IsQ0FRcEI7O0FBQ0EsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdEI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxZQUFoQixDQUE2QixPQUE3QixFQUFzQyxrQkFBdEM7QUFDQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixHQUErQix1QkFBc0IsU0FBVSxFQUEvRDtBQUNBLFdBQU8sZUFBUDtBQUNELEdBZFk7O0FBZWIsRUFBQSxjQUFjLEdBQUksQ0FFakI7O0FBakJZLENBQWY7ZUFxQmUsTTs7Ozs7Ozs7OztBQ3ZCZixNQUFNLFVBQVUsR0FBRztBQUNqQixFQUFBLGdCQUFnQixHQUFHO0FBQ2pCLFdBQU8sS0FBSyxDQUFDLHFDQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVEOztBQUpnQixDQUFuQjtlQU9lLFU7Ozs7Ozs7Ozs7O0FDUGY7O0FBQ0E7Ozs7QUFGQTtBQUtBLE1BQU0sVUFBVSxHQUFHO0FBQ2pCLEVBQUEsWUFBWSxHQUFJO0FBQ2Qsd0JBQVcsZ0JBQVgsR0FDQyxJQURELENBQ00sbUJBQW1CLElBQUk7QUFDekI7QUFDQSxVQUFJLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxzQkFBVCxFQUF4QjtBQUNBLE1BQUEsaUJBQWlCLENBQUMsV0FBbEIsQ0FBOEIsZ0JBQU8sU0FBUCxDQUFpQixtQkFBakIsQ0FBOUI7QUFDQSxNQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFdBQWxDLENBQThDLGlCQUE5QztBQUVBLFVBQUksVUFBVSxHQUFHLEVBQWpCO0FBQ0EsTUFBQSxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixJQUFJLElBQUk7QUFDbEMsUUFBQSxVQUFVLENBQUMsSUFBWCxDQUFnQixJQUFJLENBQUMsYUFBckI7QUFDRCxPQUZEO0FBR0EsTUFBQSxVQUFVLENBQUMsSUFBWCxDQUFnQixVQUFTLENBQVQsRUFBWSxDQUFaLEVBQWU7QUFDN0I7QUFDQSxlQUFRLENBQUMsSUFBSSxJQUFKLENBQVMsQ0FBQyxDQUFDLElBQVgsQ0FBRCxHQUFvQixDQUFDLElBQUksSUFBSixDQUFTLENBQUMsQ0FBQyxJQUFYLENBQTdCO0FBQ0QsT0FIRCxFQVZ5QixDQWN6QjtBQUtILEtBcEJEO0FBcUJEOztBQXZCZ0IsQ0FBbkI7ZUEwQmUsVTs7Ozs7O0FDL0JmOzs7O0FBRUEsb0JBQVcsWUFBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vR2l2ZW4gYSBzaW5nbGUgb2JqZWN0LCB0aGlzIGNvbXBvbmVudCBidWlsZHMgb3V0IHRoZSBIVE1MIGFuZCByZXR1cm5zIGl0XG5pbXBvcnQgZGVhbGVyTGlzdCBmcm9tIFwiLi9kZWFsZXJMaXN0XCJcblxuY29uc3QgZGVhbGVyID0ge1xuICBhZGRQcm9maXQoZnJvbURlYWxlcikge1xuICAgIC8vIGNvbnN0IHByb2ZpdFN1bSA9IGZyb21EZWFsZXIuZ3Jvc3NfcHJvZml0LnJlZHVjZSgodG90YWwsIGFtb3VudCkgPT4ge3RvdGFsICthbW91bnR9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhmcm9tRGVhbGVyKTtcbiAgICBsZXQgYWRkUHJvZml0ID0gMFxuICAgIGZyb21EZWFsZXIuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgIGFkZFByb2ZpdCArPSBpbmZvLmdyb3NzX3Byb2ZpdFxuICAgICAgY29uc29sZS5sb2coaW5mby5wdXJjaGFzZV9kYXRlKVxuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2coYWRkUHJvZml0KTtcbiAgICBsZXQgcHJvZml0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHByb2ZpdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2ZpdC1jb250YWluZXJcIik7XG4gICAgcHJvZml0Q29udGFpbmVyLnRleHRDb250ZW50ID0gYDIwMTcgUHJvZml0IFRvdGFsID0gJHthZGRQcm9maXR9YDtcbiAgICByZXR1cm4gcHJvZml0Q29udGFpbmVyO1xuICB9LFxuICBtb3N0U2VsbHNNb250aCAoKSB7XG4gICAgXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFsZXIiLCJcbmNvbnN0IGRlYWxlckRhdGEgPSB7XG4gIGdldEFsbERlYWxlckRhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NhckRlYWxlckluZm9cIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlckRhdGEiLCIvLyBUaGlzIGNvbXBvbmVudCB3aWxsIGdldCB0aGUgZGF0YSwgYnVpbGQgdGhlIEhUTUwgZnJvbSB0aGUgZGF0YSBhbmQgYXBwZW5kIGl0IHRvIHRoZSBET00uXG5pbXBvcnQgZGVhbGVyRGF0YSBmcm9tIFwiLi9kZWFsZXJEYXRhXCJcbmltcG9ydCBkZWFsZXIgZnJvbSBcIi4vZGVhbGVyXCJcblxuXG5jb25zdCBkZWFsZXJMaXN0ID0ge1xuICBkZWFsZXJpbkl0VVAgKCkge1xuICAgIGRlYWxlckRhdGEuZ2V0QWxsRGVhbGVyRGF0YSgpXG4gICAgLnRoZW4oZGVhbGVySW1wb3J0YW50SW5mbyA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRlYWxlckltcG9ydGFudEluZm8pXG4gICAgICAgIGxldCBkZWFsZXJEb2NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgZGVhbGVyRG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGVhbGVyLmFkZFByb2ZpdChkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmFwcGVuZENoaWxkKGRlYWxlckRvY0ZyYWdtZW50KTtcblxuICAgICAgICBsZXQgc2FsZXNEYXRlcyA9IFtdO1xuICAgICAgICBkZWFsZXJJbXBvcnRhbnRJbmZvLmZvckVhY2goaW5mbyA9PiB7XG4gICAgICAgICAgc2FsZXNEYXRlcy5wdXNoKGluZm8ucHVyY2hhc2VfZGF0ZSlcbiAgICAgICAgfSlcbiAgICAgICAgc2FsZXNEYXRlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAvLyBjb252ZXJ0IGRhdGUgb2JqZWN0IGludG8gbnVtYmVyIHRvIHJlc29sdmUgaXNzdWUgaW4gdHlwZXNjcmlwdFxuICAgICAgICAgIHJldHVybiAgK25ldyBEYXRlKGEuZGF0ZSkgLSArbmV3IERhdGUoYi5kYXRlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2FsZXNEYXRlcylcblxuICAgICAgICBcblxuXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFsZXJMaXN0IiwiaW1wb3J0IGRlYWxlckxpc3QgZnJvbSBcIi4vZGVhbGVyTGlzdFwiXG5cbmRlYWxlckxpc3QuZGVhbGVyaW5JdFVQKCk7Il19
