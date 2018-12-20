(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dealerList = _interopRequireDefault(require("./dealerList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Given a single object, this component builds out the HTML and returns it
const dealer = {};
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
        console.log(madDataFlow.gross_profit);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RlYWxlci5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyRGF0YS5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyTGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7OztBQURBO0FBR0EsTUFBTSxNQUFNLEdBQUcsRUFBZjtlQUllLE07Ozs7Ozs7Ozs7QUNOZixNQUFNLFVBQVUsR0FBRztBQUNqQixFQUFBLGdCQUFnQixHQUFHO0FBQ2pCLFdBQU8sS0FBSyxDQUFDLHFDQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVEOztBQUpnQixDQUFuQjtlQU9lLFU7Ozs7Ozs7Ozs7O0FDUGY7O0FBQ0E7Ozs7QUFGQTtBQUtBLE1BQU0sVUFBVSxHQUFHO0FBQ2pCLEVBQUEsWUFBWSxHQUFJO0FBQ2Qsd0JBQVcsZ0JBQVgsR0FDQyxJQURELENBQ00sbUJBQW1CLElBQUk7QUFDekI7QUFDRixNQUFBLG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLFdBQVcsSUFBSTtBQUN6QyxRQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBVyxDQUFDLFlBQXhCO0FBQ0QsT0FGRDtBQUdELEtBTkQ7QUFPRDs7QUFUZ0IsQ0FBbkI7ZUFZZSxVOzs7Ozs7QUNqQmY7Ozs7QUFFQSxvQkFBVyxZQUFYIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9HaXZlbiBhIHNpbmdsZSBvYmplY3QsIHRoaXMgY29tcG9uZW50IGJ1aWxkcyBvdXQgdGhlIEhUTUwgYW5kIHJldHVybnMgaXRcbmltcG9ydCBkZWFsZXJMaXN0IGZyb20gXCIuL2RlYWxlckxpc3RcIlxuXG5jb25zdCBkZWFsZXIgPSB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVhbGVyIiwiXG5jb25zdCBkZWFsZXJEYXRhID0ge1xuICBnZXRBbGxEZWFsZXJEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jYXJEZWFsZXJJbmZvXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFsZXJEYXRhIiwiLy8gVGhpcyBjb21wb25lbnQgd2lsbCBnZXQgdGhlIGRhdGEsIGJ1aWxkIHRoZSBIVE1MIGZyb20gdGhlIGRhdGEgYW5kIGFwcGVuZCBpdCB0byB0aGUgRE9NLlxuaW1wb3J0IGRlYWxlckRhdGEgZnJvbSBcIi4vZGVhbGVyRGF0YVwiXG5pbXBvcnQgZGVhbGVyIGZyb20gXCIuL2RlYWxlclwiXG5cblxuY29uc3QgZGVhbGVyTGlzdCA9IHtcbiAgZGVhbGVyaW5JdFVQICgpIHtcbiAgICBkZWFsZXJEYXRhLmdldEFsbERlYWxlckRhdGEoKVxuICAgIC50aGVuKGRlYWxlckltcG9ydGFudEluZm8gPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZWFsZXJJbXBvcnRhbnRJbmZvKVxuICAgICAgZGVhbGVySW1wb3J0YW50SW5mby5mb3JFYWNoKG1hZERhdGFGbG93ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobWFkRGF0YUZsb3cuZ3Jvc3NfcHJvZml0KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlckxpc3QiLCJpbXBvcnQgZGVhbGVyTGlzdCBmcm9tIFwiLi9kZWFsZXJMaXN0XCJcblxuZGVhbGVyTGlzdC5kZWFsZXJpbkl0VVAoKTsiXX0=
