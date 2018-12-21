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
    let addProfit = 0;
    fromDealer.forEach(info => {
      addProfit += info.gross_profit;
    }); // console.log(addProfit);

    let profitContainer = document.createElement("h2");
    profitContainer.setAttribute("class", "profit-container");
    profitContainer.textContent = `Profit Total = ${addProfit}`;
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

      _dealer.default.addProfit(dealerImportantInfo);

      dealerDocFragment.appendChild(_dealer.default.addProfit(dealerImportantInfo));
      document.querySelector(".output").appendChild(dealerDocFragment);
      dealerImportantInfo.forEach(info => {
        console.log(info.purchase_date);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RlYWxlci5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyRGF0YS5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyTGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7OztBQURBO0FBR0EsTUFBTSxNQUFNLEdBQUc7QUFDYixFQUFBLFNBQVMsQ0FBQyxVQUFELEVBQWE7QUFDcEI7QUFDQSxRQUFJLFNBQVMsR0FBRyxDQUFoQjtBQUNBLElBQUEsVUFBVSxDQUFDLE9BQVgsQ0FBbUIsSUFBSSxJQUFJO0FBQ3pCLE1BQUEsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFsQjtBQUNELEtBRkQsRUFIb0IsQ0FNcEI7O0FBQ0EsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdEI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxZQUFoQixDQUE2QixPQUE3QixFQUFzQyxrQkFBdEM7QUFDQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixHQUErQixrQkFBaUIsU0FBVSxFQUExRDtBQUNBLFdBQU8sZUFBUDtBQUNELEdBWlk7O0FBYWIsRUFBQSxjQUFjLEdBQUksQ0FFakI7O0FBZlksQ0FBZjtlQW1CZSxNOzs7Ozs7Ozs7O0FDckJmLE1BQU0sVUFBVSxHQUFHO0FBQ2pCLEVBQUEsZ0JBQWdCLEdBQUc7QUFDakIsV0FBTyxLQUFLLENBQUMscUNBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxDQUFQO0FBRUQ7O0FBSmdCLENBQW5CO2VBT2UsVTs7Ozs7Ozs7Ozs7QUNQZjs7QUFDQTs7OztBQUZBO0FBS0EsTUFBTSxVQUFVLEdBQUc7QUFDakIsRUFBQSxZQUFZLEdBQUk7QUFDZCx3QkFBVyxnQkFBWCxHQUNDLElBREQsQ0FDTSxtQkFBbUIsSUFBSTtBQUN6QjtBQUNBLFVBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQXhCOztBQUNBLHNCQUFPLFNBQVAsQ0FBaUIsbUJBQWpCOztBQUNBLE1BQUEsaUJBQWlCLENBQUMsV0FBbEIsQ0FBOEIsZ0JBQU8sU0FBUCxDQUFpQixtQkFBakIsQ0FBOUI7QUFDQSxNQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFdBQWxDLENBQThDLGlCQUE5QztBQUVBLE1BQUEsbUJBQW1CLENBQUMsT0FBcEIsQ0FBNEIsSUFBSSxJQUFJO0FBQ2xDLFFBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUMsYUFBakI7QUFDRCxPQUZEO0FBS0gsS0FiRDtBQWNEOztBQWhCZ0IsQ0FBbkI7ZUFtQmUsVTs7Ozs7O0FDeEJmOzs7O0FBRUEsb0JBQVcsWUFBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vR2l2ZW4gYSBzaW5nbGUgb2JqZWN0LCB0aGlzIGNvbXBvbmVudCBidWlsZHMgb3V0IHRoZSBIVE1MIGFuZCByZXR1cm5zIGl0XG5pbXBvcnQgZGVhbGVyTGlzdCBmcm9tIFwiLi9kZWFsZXJMaXN0XCJcblxuY29uc3QgZGVhbGVyID0ge1xuICBhZGRQcm9maXQoZnJvbURlYWxlcikge1xuICAgIC8vIGNvbnN0IHByb2ZpdFN1bSA9IGZyb21EZWFsZXIuZ3Jvc3NfcHJvZml0LnJlZHVjZSgodG90YWwsIGFtb3VudCkgPT4ge3RvdGFsICthbW91bnR9KTtcbiAgICBsZXQgYWRkUHJvZml0ID0gMFxuICAgIGZyb21EZWFsZXIuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgIGFkZFByb2ZpdCArPSBpbmZvLmdyb3NzX3Byb2ZpdFxuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2coYWRkUHJvZml0KTtcbiAgICBsZXQgcHJvZml0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHByb2ZpdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2ZpdC1jb250YWluZXJcIik7XG4gICAgcHJvZml0Q29udGFpbmVyLnRleHRDb250ZW50ID0gYFByb2ZpdCBUb3RhbCA9ICR7YWRkUHJvZml0fWA7XG4gICAgcmV0dXJuIHByb2ZpdENvbnRhaW5lcjtcbiAgfSxcbiAgbW9zdFNlbGxzTW9udGggKCkge1xuICAgIFxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVhbGVyIiwiXG5jb25zdCBkZWFsZXJEYXRhID0ge1xuICBnZXRBbGxEZWFsZXJEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jYXJEZWFsZXJJbmZvXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFsZXJEYXRhIiwiLy8gVGhpcyBjb21wb25lbnQgd2lsbCBnZXQgdGhlIGRhdGEsIGJ1aWxkIHRoZSBIVE1MIGZyb20gdGhlIGRhdGEgYW5kIGFwcGVuZCBpdCB0byB0aGUgRE9NLlxuaW1wb3J0IGRlYWxlckRhdGEgZnJvbSBcIi4vZGVhbGVyRGF0YVwiXG5pbXBvcnQgZGVhbGVyIGZyb20gXCIuL2RlYWxlclwiXG5cblxuY29uc3QgZGVhbGVyTGlzdCA9IHtcbiAgZGVhbGVyaW5JdFVQICgpIHtcbiAgICBkZWFsZXJEYXRhLmdldEFsbERlYWxlckRhdGEoKVxuICAgIC50aGVuKGRlYWxlckltcG9ydGFudEluZm8gPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZWFsZXJJbXBvcnRhbnRJbmZvKVxuICAgICAgICBsZXQgZGVhbGVyRG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGRlYWxlci5hZGRQcm9maXQoZGVhbGVySW1wb3J0YW50SW5mbyk7XG4gICAgICAgIGRlYWxlckRvY0ZyYWdtZW50LmFwcGVuZENoaWxkKGRlYWxlci5hZGRQcm9maXQoZGVhbGVySW1wb3J0YW50SW5mbykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKS5hcHBlbmRDaGlsZChkZWFsZXJEb2NGcmFnbWVudCk7XG5cbiAgICAgICAgZGVhbGVySW1wb3J0YW50SW5mby5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8ucHVyY2hhc2VfZGF0ZSk7XG4gICAgICAgIH0pXG5cblxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVhbGVyTGlzdCIsImltcG9ydCBkZWFsZXJMaXN0IGZyb20gXCIuL2RlYWxlckxpc3RcIlxuXG5kZWFsZXJMaXN0LmRlYWxlcmluSXRVUCgpOyJdfQ==
