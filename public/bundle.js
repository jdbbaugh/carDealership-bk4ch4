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
    const startOfYear = new Date("2017-01-01");
    const endOfYear = new Date("2017-12-31"); // console.log(startOfYear)

    fromDealer.forEach(info => {
      let dateAdd = new Date(info.purchase_date);

      if (dateAdd >= startOfYear && dateAdd <= endOfYear) {
        addProfit += info.gross_profit;
        console.log(info.purchase_date);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RlYWxlci5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyRGF0YS5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyTGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7OztBQURBO0FBR0EsTUFBTSxNQUFNLEdBQUc7QUFDYixFQUFBLFNBQVMsQ0FBQyxVQUFELEVBQWE7QUFDcEI7QUFDQTtBQUNBLFFBQUksU0FBUyxHQUFHLENBQWhCO0FBQ0EsVUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFwQjtBQUNBLFVBQU0sU0FBUyxHQUFHLElBQUksSUFBSixDQUFTLFlBQVQsQ0FBbEIsQ0FMb0IsQ0FNcEI7O0FBRUEsSUFBQSxVQUFVLENBQUMsT0FBWCxDQUFtQixJQUFJLElBQUk7QUFDekIsVUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFKLENBQVUsSUFBSSxDQUFDLGFBQWYsQ0FBZDs7QUFDQSxVQUFJLE9BQU8sSUFBSSxXQUFYLElBQTBCLE9BQU8sSUFBSSxTQUF6QyxFQUFvRDtBQUNwRCxRQUFBLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBbEI7QUFDQSxRQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFDLGFBQWpCO0FBQWdDO0FBQ2pDLEtBTEQsRUFSb0IsQ0FjcEI7O0FBQ0EsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdEI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxZQUFoQixDQUE2QixPQUE3QixFQUFzQyxrQkFBdEM7QUFDQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixHQUErQix1QkFBc0IsU0FBVSxFQUEvRDtBQUNBLFdBQU8sZUFBUDtBQUNELEdBcEJZOztBQXFCYixFQUFBLGNBQWMsR0FBSSxDQUVqQjs7QUF2QlksQ0FBZjtlQTJCZSxNOzs7Ozs7Ozs7O0FDN0JmLE1BQU0sVUFBVSxHQUFHO0FBQ2pCLEVBQUEsZ0JBQWdCLEdBQUc7QUFDakIsV0FBTyxLQUFLLENBQUMscUNBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxDQUFQO0FBRUQ7O0FBSmdCLENBQW5CO2VBT2UsVTs7Ozs7Ozs7Ozs7QUNQZjs7QUFDQTs7OztBQUZBO0FBS0EsTUFBTSxVQUFVLEdBQUc7QUFDakIsRUFBQSxZQUFZLEdBQUk7QUFDZCx3QkFBVyxnQkFBWCxHQUNDLElBREQsQ0FDTSxtQkFBbUIsSUFBSTtBQUN6QjtBQUNBLFVBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQXhCO0FBQ0EsTUFBQSxpQkFBaUIsQ0FBQyxXQUFsQixDQUE4QixnQkFBTyxTQUFQLENBQWlCLG1CQUFqQixDQUE5QjtBQUNBLE1BQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsV0FBbEMsQ0FBOEMsaUJBQTlDO0FBRUEsVUFBSSxVQUFVLEdBQUcsRUFBakI7QUFDQSxNQUFBLG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLElBQUksSUFBSTtBQUNsQyxRQUFBLFVBQVUsQ0FBQyxJQUFYLENBQWdCLElBQUksQ0FBQyxhQUFyQjtBQUNELE9BRkQ7QUFHQSxNQUFBLFVBQVUsQ0FBQyxJQUFYLENBQWdCLFVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZTtBQUM3QjtBQUNBLGVBQVEsQ0FBQyxJQUFJLElBQUosQ0FBUyxDQUFDLENBQUMsSUFBWCxDQUFELEdBQW9CLENBQUMsSUFBSSxJQUFKLENBQVMsQ0FBQyxDQUFDLElBQVgsQ0FBN0I7QUFDRCxPQUhELEVBVnlCLENBY3pCO0FBS0gsS0FwQkQ7QUFxQkQ7O0FBdkJnQixDQUFuQjtlQTBCZSxVOzs7Ozs7QUMvQmY7Ozs7QUFFQSxvQkFBVyxZQUFYIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9HaXZlbiBhIHNpbmdsZSBvYmplY3QsIHRoaXMgY29tcG9uZW50IGJ1aWxkcyBvdXQgdGhlIEhUTUwgYW5kIHJldHVybnMgaXRcbmltcG9ydCBkZWFsZXJMaXN0IGZyb20gXCIuL2RlYWxlckxpc3RcIlxuXG5jb25zdCBkZWFsZXIgPSB7XG4gIGFkZFByb2ZpdChmcm9tRGVhbGVyKSB7XG4gICAgLy8gY29uc3QgcHJvZml0U3VtID0gZnJvbURlYWxlci5ncm9zc19wcm9maXQucmVkdWNlKCh0b3RhbCwgYW1vdW50KSA9PiB7dG90YWwgK2Ftb3VudH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGZyb21EZWFsZXIpO1xuICAgIGxldCBhZGRQcm9maXQgPSAwO1xuICAgIGNvbnN0IHN0YXJ0T2ZZZWFyID0gbmV3IERhdGUoXCIyMDE3LTAxLTAxXCIpO1xuICAgIGNvbnN0IGVuZE9mWWVhciA9IG5ldyBEYXRlKFwiMjAxNy0xMi0zMVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzdGFydE9mWWVhcilcblxuICAgIGZyb21EZWFsZXIuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgIGxldCBkYXRlQWRkID0gbmV3IERhdGUgKGluZm8ucHVyY2hhc2VfZGF0ZSlcbiAgICAgIGlmIChkYXRlQWRkID49IHN0YXJ0T2ZZZWFyICYmIGRhdGVBZGQgPD0gZW5kT2ZZZWFyKSB7XG4gICAgICBhZGRQcm9maXQgKz0gaW5mby5ncm9zc19wcm9maXRcbiAgICAgIGNvbnNvbGUubG9nKGluZm8ucHVyY2hhc2VfZGF0ZSl9XG4gICAgfSlcbiAgICAvLyBjb25zb2xlLmxvZyhhZGRQcm9maXQpO1xuICAgIGxldCBwcm9maXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcHJvZml0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZml0LWNvbnRhaW5lclwiKTtcbiAgICBwcm9maXRDb250YWluZXIudGV4dENvbnRlbnQgPSBgMjAxNyBQcm9maXQgVG90YWwgPSAke2FkZFByb2ZpdH1gO1xuICAgIHJldHVybiBwcm9maXRDb250YWluZXI7XG4gIH0sXG4gIG1vc3RTZWxsc01vbnRoICgpIHtcbiAgICBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlciIsIlxuY29uc3QgZGVhbGVyRGF0YSA9IHtcbiAgZ2V0QWxsRGVhbGVyRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY2FyRGVhbGVySW5mb1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVhbGVyRGF0YSIsIi8vIFRoaXMgY29tcG9uZW50IHdpbGwgZ2V0IHRoZSBkYXRhLCBidWlsZCB0aGUgSFRNTCBmcm9tIHRoZSBkYXRhIGFuZCBhcHBlbmQgaXQgdG8gdGhlIERPTS5cbmltcG9ydCBkZWFsZXJEYXRhIGZyb20gXCIuL2RlYWxlckRhdGFcIlxuaW1wb3J0IGRlYWxlciBmcm9tIFwiLi9kZWFsZXJcIlxuXG5cbmNvbnN0IGRlYWxlckxpc3QgPSB7XG4gIGRlYWxlcmluSXRVUCAoKSB7XG4gICAgZGVhbGVyRGF0YS5nZXRBbGxEZWFsZXJEYXRhKClcbiAgICAudGhlbihkZWFsZXJJbXBvcnRhbnRJbmZvID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGVhbGVySW1wb3J0YW50SW5mbylcbiAgICAgICAgbGV0IGRlYWxlckRvY0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBkZWFsZXJEb2NGcmFnbWVudC5hcHBlbmRDaGlsZChkZWFsZXIuYWRkUHJvZml0KGRlYWxlckltcG9ydGFudEluZm8pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIikuYXBwZW5kQ2hpbGQoZGVhbGVyRG9jRnJhZ21lbnQpO1xuXG4gICAgICAgIGxldCBzYWxlc0RhdGVzID0gW107XG4gICAgICAgIGRlYWxlckltcG9ydGFudEluZm8uZm9yRWFjaChpbmZvID0+IHtcbiAgICAgICAgICBzYWxlc0RhdGVzLnB1c2goaW5mby5wdXJjaGFzZV9kYXRlKVxuICAgICAgICB9KVxuICAgICAgICBzYWxlc0RhdGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIC8vIGNvbnZlcnQgZGF0ZSBvYmplY3QgaW50byBudW1iZXIgdG8gcmVzb2x2ZSBpc3N1ZSBpbiB0eXBlc2NyaXB0XG4gICAgICAgICAgcmV0dXJuICArbmV3IERhdGUoYS5kYXRlKSAtICtuZXcgRGF0ZShiLmRhdGUpO1xuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzYWxlc0RhdGVzKVxuXG4gICAgICAgIFxuXG5cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlckxpc3QiLCJpbXBvcnQgZGVhbGVyTGlzdCBmcm9tIFwiLi9kZWFsZXJMaXN0XCJcblxuZGVhbGVyTGlzdC5kZWFsZXJpbkl0VVAoKTsiXX0=
