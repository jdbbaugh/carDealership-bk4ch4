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
  showProfit(fromDealer) {// console.log(fromDealer.gross_profit);
  }

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
      dealerImportantInfo.forEach(madDataFlow => {
        // console.log(madDataFlow.gross_profit)
        _dealer.default.showProfit(madDataFlow);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RlYWxlci5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyRGF0YS5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyTGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7OztBQURBO0FBR0EsTUFBTSxNQUFNLEdBQUc7QUFDYixFQUFBLFVBQVUsQ0FBQyxVQUFELEVBQWEsQ0FDckI7QUFFRDs7QUFKWSxDQUFmO2VBUWUsTTs7Ozs7Ozs7OztBQ1ZmLE1BQU0sVUFBVSxHQUFHO0FBQ2pCLEVBQUEsZ0JBQWdCLEdBQUc7QUFDakIsV0FBTyxLQUFLLENBQUMscUNBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxDQUFQO0FBRUQ7O0FBSmdCLENBQW5CO2VBT2UsVTs7Ozs7Ozs7Ozs7QUNQZjs7QUFDQTs7OztBQUZBO0FBS0EsTUFBTSxVQUFVLEdBQUc7QUFDakIsRUFBQSxZQUFZLEdBQUk7QUFDZCx3QkFBVyxnQkFBWCxHQUNDLElBREQsQ0FDTSxtQkFBbUIsSUFBSTtBQUN6QjtBQUNGLE1BQUEsbUJBQW1CLENBQUMsT0FBcEIsQ0FBNEIsV0FBVyxJQUFJO0FBQ3pDO0FBQ0Esd0JBQU8sVUFBUCxDQUFrQixXQUFsQjtBQUNELE9BSEQ7QUFJRCxLQVBEO0FBUUQ7O0FBVmdCLENBQW5CO2VBYWUsVTs7Ozs7O0FDbEJmOzs7O0FBRUEsb0JBQVcsWUFBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vR2l2ZW4gYSBzaW5nbGUgb2JqZWN0LCB0aGlzIGNvbXBvbmVudCBidWlsZHMgb3V0IHRoZSBIVE1MIGFuZCByZXR1cm5zIGl0XG5pbXBvcnQgZGVhbGVyTGlzdCBmcm9tIFwiLi9kZWFsZXJMaXN0XCJcblxuY29uc3QgZGVhbGVyID0ge1xuICBzaG93UHJvZml0KGZyb21EZWFsZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhmcm9tRGVhbGVyLmdyb3NzX3Byb2ZpdCk7XG4gICAgXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFsZXIiLCJcbmNvbnN0IGRlYWxlckRhdGEgPSB7XG4gIGdldEFsbERlYWxlckRhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NhckRlYWxlckluZm9cIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlckRhdGEiLCIvLyBUaGlzIGNvbXBvbmVudCB3aWxsIGdldCB0aGUgZGF0YSwgYnVpbGQgdGhlIEhUTUwgZnJvbSB0aGUgZGF0YSBhbmQgYXBwZW5kIGl0IHRvIHRoZSBET00uXG5pbXBvcnQgZGVhbGVyRGF0YSBmcm9tIFwiLi9kZWFsZXJEYXRhXCJcbmltcG9ydCBkZWFsZXIgZnJvbSBcIi4vZGVhbGVyXCJcblxuXG5jb25zdCBkZWFsZXJMaXN0ID0ge1xuICBkZWFsZXJpbkl0VVAgKCkge1xuICAgIGRlYWxlckRhdGEuZ2V0QWxsRGVhbGVyRGF0YSgpXG4gICAgLnRoZW4oZGVhbGVySW1wb3J0YW50SW5mbyA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRlYWxlckltcG9ydGFudEluZm8pXG4gICAgICBkZWFsZXJJbXBvcnRhbnRJbmZvLmZvckVhY2gobWFkRGF0YUZsb3cgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhtYWREYXRhRmxvdy5ncm9zc19wcm9maXQpXG4gICAgICAgIGRlYWxlci5zaG93UHJvZml0KG1hZERhdGFGbG93KTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFsZXJMaXN0IiwiaW1wb3J0IGRlYWxlckxpc3QgZnJvbSBcIi4vZGVhbGVyTGlzdFwiXG5cbmRlYWxlckxpc3QuZGVhbGVyaW5JdFVQKCk7Il19
