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
    let addProfit = 0;
    const startOfYear = new Date("2017-01-01");
    const endOfYear = new Date("2017-12-31"); // console.log(startOfYear)

    fromDealer.forEach(info => {
      let dateAdd = new Date(info.purchase_date);

      if (dateAdd >= startOfYear && dateAdd <= endOfYear) {
        addProfit += info.gross_profit; // console.log(info.purchase_date);
      }

      ;
    }); // console.log(addProfit);

    let profitContainer = document.createElement("h2");
    profitContainer.setAttribute("class", "profit-container");
    profitContainer.textContent = `2017 Profit Total = ${addProfit}`;
    return profitContainer;
  },

  mostSellsMonth(dealerObject) {
    let salesDates = [];
    dealerObject.forEach(info => {
      salesDates.push(info.purchase_date);
    });
    salesDates.sort((a, b) => {
      return +new Date(a) - +new Date(b);
    });
    const dateObject = {
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 0,
      jun: 0,
      jul: 0,
      aug: 0,
      sept: 0,
      oct: 0,
      nov: 0,
      dec: 0
    };
    salesDates.forEach(date => {
      const makeDate = new Date(date);

      switch (makeDate.getMonth()) {
        case 0:
          dateObject.jan++;
          break;

        case 1:
          dateObject.feb++;
          break;

        case 2:
          dateObject.mar++;
          break;

        case 3:
          dateObject.apr++;
          break;

        case 4:
          dateObject.may++;
          break;

        case 5:
          dateObject.jun++;
          break;

        case 6:
          dateObject.jul++;
          break;

        case 7:
          dateObject.aug++;
          break;

        case 8:
          dateObject.sept++;
          break;

        case 9:
          dateObject.oct++;
          break;

        case 10:
          dateObject.nov++;
          break;

        case 11:
          dateObject.dec++;
          break;
      }

      console.log(makeDate.getMonth());
    });
    console.log(dateObject);
    let highestMo = Object.keys(dateObject).reduce((a, b) => dateObject[a] > dateObject[b] ? a : b);
    console.log(highestMo);
    let highestMonthContainer = document.createElement("h2");
    highestMonthContainer.setAttribute("class", "profit-container");
    highestMonthContainer.textContent = `Highest Month of Sales = ${highestMo}`;
    return highestMonthContainer;
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
      let dealerDocFragment = document.createDocumentFragment();
      dealerDocFragment.appendChild(_dealer.default.addProfit(dealerImportantInfo));
      document.querySelector(".output").appendChild(dealerDocFragment);
      dealerDocFragment.appendChild(_dealer.default.mostSellsMonth(dealerImportantInfo));
      document.querySelector(".output").appendChild(dealerDocFragment);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RlYWxlci5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyRGF0YS5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyTGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7OztBQURBO0FBR0EsTUFBTSxNQUFNLEdBQUc7QUFDYixFQUFBLFNBQVMsQ0FBQyxVQUFELEVBQWE7QUFDcEIsUUFBSSxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxVQUFNLFdBQVcsR0FBRyxJQUFJLElBQUosQ0FBUyxZQUFULENBQXBCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFsQixDQUhvQixDQUlwQjs7QUFFQSxJQUFBLFVBQVUsQ0FBQyxPQUFYLENBQW1CLElBQUksSUFBSTtBQUN6QixVQUFJLE9BQU8sR0FBRyxJQUFJLElBQUosQ0FBVSxJQUFJLENBQUMsYUFBZixDQUFkOztBQUNBLFVBQUksT0FBTyxJQUFJLFdBQVgsSUFBMEIsT0FBTyxJQUFJLFNBQXpDLEVBQW9EO0FBQ3BELFFBQUEsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFsQixDQURvRCxDQUVwRDtBQUNEOztBQUFBO0FBQ0EsS0FORCxFQU5vQixDQWFwQjs7QUFDQSxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDLGtCQUF0QztBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLEdBQStCLHVCQUFzQixTQUFVLEVBQS9EO0FBQ0EsV0FBTyxlQUFQO0FBQ0QsR0FuQlk7O0FBb0JiLEVBQUEsY0FBYyxDQUFFLFlBQUYsRUFBZ0I7QUFDNUIsUUFBSSxVQUFVLEdBQUcsRUFBakI7QUFDQSxJQUFBLFlBQVksQ0FBQyxPQUFiLENBQXFCLElB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QUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxDQUFQO0FBRUQ7O0FBSmdCLENBQW5CO2VBT2UsVTs7Ozs7Ozs7Ozs7QUNQZjs7QUFDQTs7OztBQUZBO0FBS0EsTUFBTSxVQUFVLEdBQUc7QUFDakIsRUFBQSxZQUFZLEdBQUk7QUFDZCx3QkFBVyxnQkFBWCxHQUNDLElBREQsQ0FDTSxtQkFBbUIsSUFBSTtBQUN6QjtBQUNBLFVBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQXhCO0FBQ0EsTUFBQSxpQkFBaUIsQ0FBQyxXQUFsQixDQUE4QixnQkFBTyxTQUFQLENBQWlCLG1CQUFqQixDQUE5QjtBQUNBLE1BQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsV0FBbEMsQ0FBOEMsaUJBQTlDO0FBRUEsTUFBQSxpQkFBaUIsQ0FBQyxXQUFsQixDQUE4QixnQkFBTyxjQUFQLENBQXNCLG1CQUF0QixDQUE5QjtBQUNBLE1BQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsV0FBbEMsQ0FBOEMsaUJBQTlDO0FBTUgsS0FkRDtBQWVEOztBQWpCZ0IsQ0FBbkI7ZUFvQmUsVTs7Ozs7O0FDekJmOzs7O0FBRUEsb0JBQVcsWUFBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vR2l2ZW4gYSBzaW5nbGUgb2JqZWN0LCB0aGlzIGNvbXBvbmVudCBidWlsZHMgb3V0IHRoZSBIVE1MIGFuZCByZXR1cm5zIGl0XG5pbXBvcnQgZGVhbGVyTGlzdCBmcm9tIFwiLi9kZWFsZXJMaXN0XCJcblxuY29uc3QgZGVhbGVyID0ge1xuICBhZGRQcm9maXQoZnJvbURlYWxlcikge1xuICAgIGxldCBhZGRQcm9maXQgPSAwO1xuICAgIGNvbnN0IHN0YXJ0T2ZZZWFyID0gbmV3IERhdGUoXCIyMDE3LTAxLTAxXCIpO1xuICAgIGNvbnN0IGVuZE9mWWVhciA9IG5ldyBEYXRlKFwiMjAxNy0xMi0zMVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzdGFydE9mWWVhcilcblxuICAgIGZyb21EZWFsZXIuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgIGxldCBkYXRlQWRkID0gbmV3IERhdGUgKGluZm8ucHVyY2hhc2VfZGF0ZSlcbiAgICAgIGlmIChkYXRlQWRkID49IHN0YXJ0T2ZZZWFyICYmIGRhdGVBZGQgPD0gZW5kT2ZZZWFyKSB7XG4gICAgICBhZGRQcm9maXQgKz0gaW5mby5ncm9zc19wcm9maXRcbiAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8ucHVyY2hhc2VfZGF0ZSk7XG4gICAgfTtcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhhZGRQcm9maXQpO1xuICAgIGxldCBwcm9maXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcHJvZml0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZml0LWNvbnRhaW5lclwiKTtcbiAgICBwcm9maXRDb250YWluZXIudGV4dENvbnRlbnQgPSBgMjAxNyBQcm9maXQgVG90YWwgPSAke2FkZFByb2ZpdH1gO1xuICAgIHJldHVybiBwcm9maXRDb250YWluZXI7XG4gIH0sXG4gIG1vc3RTZWxsc01vbnRoIChkZWFsZXJPYmplY3QpIHtcbiAgICBsZXQgc2FsZXNEYXRlcyA9IFtdO1xuICAgIGRlYWxlck9iamVjdC5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgc2FsZXNEYXRlcy5wdXNoKGluZm8ucHVyY2hhc2VfZGF0ZSlcbiAgICB9KVxuICAgIHNhbGVzRGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuICArbmV3IERhdGUoYSkgLSArbmV3IERhdGUoYik7XG4gICAgfSlcbiAgICBjb25zdCBkYXRlT2JqZWN0ID0ge1xuICAgICAgamFuOiAwLFxuICAgICAgZmViOiAwLFxuICAgICAgbWFyOiAwLFxuICAgICAgYXByOiAwLFxuICAgICAgbWF5OiAwLFxuICAgICAganVuOiAwLFxuICAgICAganVsOiAwLFxuICAgICAgYXVnOiAwLFxuICAgICAgc2VwdDogMCxcbiAgICAgIG9jdDogMCxcbiAgICAgIG5vdjogMCxcbiAgICAgIGRlYzogMFxuICAgIH1cbiAgICBzYWxlc0RhdGVzLmZvckVhY2goZGF0ZSA9PiB7XG4gICAgICBjb25zdCBtYWtlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgc3dpdGNoIChtYWtlRGF0ZS5nZXRNb250aCgpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgZGF0ZU9iamVjdC5qYW4rK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBkYXRlT2JqZWN0LmZlYisrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGRhdGVPYmplY3QubWFyKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgZGF0ZU9iamVjdC5hcHIrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBkYXRlT2JqZWN0Lm1heSsrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgIGRhdGVPYmplY3QuanVuKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgZGF0ZU9iamVjdC5qdWwrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICBkYXRlT2JqZWN0LmF1ZysrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgIGRhdGVPYmplY3Quc2VwdCsrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgIGRhdGVPYmplY3Qub2N0KytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgIGRhdGVPYmplY3Qubm92KytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgIGRhdGVPYmplY3QuZGVjKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKG1ha2VEYXRlLmdldE1vbnRoKCkpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhkYXRlT2JqZWN0KVxuICAgIGxldCBoaWdoZXN0TW8gPSBPYmplY3Qua2V5cyhkYXRlT2JqZWN0KS5yZWR1Y2UoKGEsIGIpID0+IGRhdGVPYmplY3RbYV0gPiBkYXRlT2JqZWN0W2JdID8gYSA6IGIpO1xuICAgIGNvbnNvbGUubG9nKGhpZ2hlc3RNbylcbiAgICBsZXQgaGlnaGVzdE1vbnRoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhpZ2hlc3RNb250aENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2ZpdC1jb250YWluZXJcIik7XG4gICAgaGlnaGVzdE1vbnRoQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEhpZ2hlc3QgTW9udGggb2YgU2FsZXMgPSAke2hpZ2hlc3RNb31gO1xuICAgIHJldHVybiBoaWdoZXN0TW9udGhDb250YWluZXI7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFsZXIiLCJcbmNvbnN0IGRlYWxlckRhdGEgPSB7XG4gIGdldEFsbERlYWxlckRhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NhckRlYWxlckluZm9cIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlckRhdGEiLCIvLyBUaGlzIGNvbXBvbmVudCB3aWxsIGdldCB0aGUgZGF0YSwgYnVpbGQgdGhlIEhUTUwgZnJvbSB0aGUgZGF0YSBhbmQgYXBwZW5kIGl0IHRvIHRoZSBET00uXG5pbXBvcnQgZGVhbGVyRGF0YSBmcm9tIFwiLi9kZWFsZXJEYXRhXCJcbmltcG9ydCBkZWFsZXIgZnJvbSBcIi4vZGVhbGVyXCJcblxuXG5jb25zdCBkZWFsZXJMaXN0ID0ge1xuICBkZWFsZXJpbkl0VVAgKCkge1xuICAgIGRlYWxlckRhdGEuZ2V0QWxsRGVhbGVyRGF0YSgpXG4gICAgLnRoZW4oZGVhbGVySW1wb3J0YW50SW5mbyA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRlYWxlckltcG9ydGFudEluZm8pXG4gICAgICAgIGxldCBkZWFsZXJEb2NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgZGVhbGVyRG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGVhbGVyLmFkZFByb2ZpdChkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmFwcGVuZENoaWxkKGRlYWxlckRvY0ZyYWdtZW50KTtcblxuICAgICAgICBkZWFsZXJEb2NGcmFnbWVudC5hcHBlbmRDaGlsZChkZWFsZXIubW9zdFNlbGxzTW9udGgoZGVhbGVySW1wb3J0YW50SW5mbykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKS5hcHBlbmRDaGlsZChkZWFsZXJEb2NGcmFnbWVudCk7XG5cblxuICAgICAgICBcblxuXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFsZXJMaXN0IiwiaW1wb3J0IGRlYWxlckxpc3QgZnJvbSBcIi4vZGVhbGVyTGlzdFwiXG5cbmRlYWxlckxpc3QuZGVhbGVyaW5JdFVQKCk7Il19
