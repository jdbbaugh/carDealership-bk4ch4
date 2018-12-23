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
      } // console.log(makeDate.getMonth())

    }); // console.log(dateObject)

    let highestMo = Object.keys(dateObject).reduce((a, b) => dateObject[a] > dateObject[b] ? a : b); // console.log(highestMo)

    let highestMonthContainer = document.createElement("h2");
    highestMonthContainer.setAttribute("class", "big-month-container");
    highestMonthContainer.textContent = `Highest Month of Sales = ${highestMo} with ${dateObject.jun} sales`;
    return highestMonthContainer;
  },

  mostCarsSoldByMan(manSaleObject) {
    let salesPeople = [];
    manSaleObject.forEach(agent => {
      salesPeople.push(`${agent.sales_agent.first_name} ${agent.sales_agent.last_name}`);
    }); // console.log(salesPeople.sort());

    const nameSort = salesPeople.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0;
      }

      obj[item]++;
      return obj;
    }, {}); // console.log(nameSort);

    const biggestSalesman = Object.keys(nameSort).reduce((a, b) => nameSort[a] > nameSort[b] ? a : b); // console.log(biggestSalesman)

    let mostCarsSoldbyThisSalesman = document.createElement("h2");
    mostCarsSoldbyThisSalesman.setAttribute("class", "most-sales-person");
    mostCarsSoldbyThisSalesman.textContent = `The most cars were sold by = ${biggestSalesman}`;
    return mostCarsSoldbyThisSalesman;
  },

  mostProfitingSalesman(salesDigits) {
    salesDigits.forEach(sell => {// console.log(sell.sales_agent.first_name, sell.gross_profit)
    });
    const showSalesmansProfit = salesDigits.reduce((obj, item) => {
      // console.log(item)
      if (!obj[item.sales_agent.first_name]) {
        obj[item.sales_agent.first_name] = 0;
      }

      obj[item.sales_agent.first_name] += item.gross_profit;
      return obj;
    }, {});
    console.log(showSalesmansProfit);
    let sortProfits = [];

    for (var salesMan in showSalesmansProfit) {
      sortProfits.push([salesMan, showSalesmansProfit[salesMan]]);
    }

    let finalProfitList = sortProfits.sort((a, b) => {
      return a[1] - b[1];
    });
    console.log(finalProfitList.reverse()[0]);
    let profitMVPis = document.createElement("h2");
    profitMVPis.setAttribute("class", "most-profiting-salesperson");
    profitMVPis.textContent = `The most profit in sales was by = ${finalProfitList[0][0]} with $${finalProfitList[0][1]} in sales.`;
    return profitMVPis;
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
      dealerDocFragment.appendChild(_dealer.default.mostCarsSoldByMan(dealerImportantInfo));
      document.querySelector(".output").appendChild(dealerDocFragment);
      dealerDocFragment.appendChild(_dealer.default.mostProfitingSalesman(dealerImportantInfo));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RlYWxlci5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyRGF0YS5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyTGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7OztBQURBO0FBR0EsTUFBTSxNQUFNLEdBQUc7QUFDYixFQUFBLFNBQVMsQ0FBQyxVQUFELEVBQWE7QUFDcEIsUUFBSSxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxVQUFNLFdBQVcsR0FBRyxJQUFJLElBQUosQ0FBUyxZQUFULENBQXBCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFsQixDQUhvQixDQUlwQjs7QUFFQSxJQUFBLFVBQVUsQ0FBQyxPQUFYLENBQW1CLElBQUksSUFBSTtBQUN6QixVQUFJLE9BQU8sR0FBRyxJQUFJLElBQUosQ0FBVSxJQUFJLENBQUMsYUFBZixDQUFkOztBQUNBLFVBQUksT0FBTyxJQUFJLFdBQVgsSUFBMEIsT0FBTyxJQUFJLFNBQXpDLEVBQW9EO0FBQ3BELFFBQUEsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFsQixDQURvRCxDQUVwRDtBQUNEOztBQUFBO0FBQ0EsS0FORCxFQU5vQixDQWFwQjs7QUFDQSxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDLGtCQUF0QztBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLEdBQStCLHVCQUFzQixTQUFVLEVBQS9EO0FBQ0EsV0FBTyxlQUFQO0FBQ0QsR0FuQlk7O0FBb0JiLEVBQUEsY0FBYyxDQUFFLFlBQUYsRUFBZ0I7QUFDNUIsUUFBSSxVQUFVLEdBQUcsRUFBakI7QUFDQSxJQUFBLFlBQVksQ0FBQyxPQUFiLENBQXFCLElB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bnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vR2l2ZW4gYSBzaW5nbGUgb2JqZWN0LCB0aGlzIGNvbXBvbmVudCBidWlsZHMgb3V0IHRoZSBIVE1MIGFuZCByZXR1cm5zIGl0XG5pbXBvcnQgZGVhbGVyTGlzdCBmcm9tIFwiLi9kZWFsZXJMaXN0XCJcblxuY29uc3QgZGVhbGVyID0ge1xuICBhZGRQcm9maXQoZnJvbURlYWxlcikge1xuICAgIGxldCBhZGRQcm9maXQgPSAwO1xuICAgIGNvbnN0IHN0YXJ0T2ZZZWFyID0gbmV3IERhdGUoXCIyMDE3LTAxLTAxXCIpO1xuICAgIGNvbnN0IGVuZE9mWWVhciA9IG5ldyBEYXRlKFwiMjAxNy0xMi0zMVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzdGFydE9mWWVhcilcblxuICAgIGZyb21EZWFsZXIuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgIGxldCBkYXRlQWRkID0gbmV3IERhdGUgKGluZm8ucHVyY2hhc2VfZGF0ZSlcbiAgICAgIGlmIChkYXRlQWRkID49IHN0YXJ0T2ZZZWFyICYmIGRhdGVBZGQgPD0gZW5kT2ZZZWFyKSB7XG4gICAgICBhZGRQcm9maXQgKz0gaW5mby5ncm9zc19wcm9maXRcbiAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8ucHVyY2hhc2VfZGF0ZSk7XG4gICAgfTtcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhhZGRQcm9maXQpO1xuICAgIGxldCBwcm9maXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcHJvZml0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZml0LWNvbnRhaW5lclwiKTtcbiAgICBwcm9maXRDb250YWluZXIudGV4dENvbnRlbnQgPSBgMjAxNyBQcm9maXQgVG90YWwgPSAke2FkZFByb2ZpdH1gO1xuICAgIHJldHVybiBwcm9maXRDb250YWluZXI7XG4gIH0sXG4gIG1vc3RTZWxsc01vbnRoIChkZWFsZXJPYmplY3QpIHtcbiAgICBsZXQgc2FsZXNEYXRlcyA9IFtdO1xuICAgIGRlYWxlck9iamVjdC5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgc2FsZXNEYXRlcy5wdXNoKGluZm8ucHVyY2hhc2VfZGF0ZSlcbiAgICB9KVxuICAgIHNhbGVzRGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuICArbmV3IERhdGUoYSkgLSArbmV3IERhdGUoYik7XG4gICAgfSlcbiAgICBjb25zdCBkYXRlT2JqZWN0ID0ge1xuICAgICAgamFuOiAwLFxuICAgICAgZmViOiAwLFxuICAgICAgbWFyOiAwLFxuICAgICAgYXByOiAwLFxuICAgICAgbWF5OiAwLFxuICAgICAganVuOiAwLFxuICAgICAganVsOiAwLFxuICAgICAgYXVnOiAwLFxuICAgICAgc2VwdDogMCxcbiAgICAgIG9jdDogMCxcbiAgICAgIG5vdjogMCxcbiAgICAgIGRlYzogMFxuICAgIH1cbiAgICBzYWxlc0RhdGVzLmZvckVhY2goZGF0ZSA9PiB7XG4gICAgICBjb25zdCBtYWtlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgc3dpdGNoIChtYWtlRGF0ZS5nZXRNb250aCgpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgZGF0ZU9iamVjdC5qYW4rK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBkYXRlT2JqZWN0LmZlYisrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGRhdGVPYmplY3QubWFyKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgZGF0ZU9iamVjdC5hcHIrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBkYXRlT2JqZWN0Lm1heSsrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgIGRhdGVPYmplY3QuanVuKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgZGF0ZU9iamVjdC5qdWwrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICBkYXRlT2JqZWN0LmF1ZysrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgIGRhdGVPYmplY3Quc2VwdCsrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgIGRhdGVPYmplY3Qub2N0KytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgIGRhdGVPYmplY3Qubm92KytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgIGRhdGVPYmplY3QuZGVjKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKG1ha2VEYXRlLmdldE1vbnRoKCkpXG4gICAgfSlcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRlT2JqZWN0KVxuICAgIGxldCBoaWdoZXN0TW8gPSBPYmplY3Qua2V5cyhkYXRlT2JqZWN0KS5yZWR1Y2UoKGEsIGIpID0+IGRhdGVPYmplY3RbYV0gPiBkYXRlT2JqZWN0W2JdID8gYSA6IGIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGhpZ2hlc3RNbylcbiAgICBsZXQgaGlnaGVzdE1vbnRoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhpZ2hlc3RNb250aENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJpZy1tb250aC1jb250YWluZXJcIik7XG4gICAgaGlnaGVzdE1vbnRoQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEhpZ2hlc3QgTW9udGggb2YgU2FsZXMgPSAke2hpZ2hlc3RNb30gd2l0aCAke2RhdGVPYmplY3QuanVufSBzYWxlc2A7XG4gICAgcmV0dXJuIGhpZ2hlc3RNb250aENvbnRhaW5lcjtcbiAgfSxcbiAgbW9zdENhcnNTb2xkQnlNYW4gKG1hblNhbGVPYmplY3QpIHtcbiAgICBsZXQgc2FsZXNQZW9wbGUgPSBbXVxuICAgIG1hblNhbGVPYmplY3QuZm9yRWFjaChhZ2VudCA9PiB7XG4gICAgc2FsZXNQZW9wbGUucHVzaChgJHthZ2VudC5zYWxlc19hZ2VudC5maXJzdF9uYW1lfSAke2FnZW50LnNhbGVzX2FnZW50Lmxhc3RfbmFtZX1gKVxuICB9KVxuICAvLyBjb25zb2xlLmxvZyhzYWxlc1Blb3BsZS5zb3J0KCkpO1xuXG4gIGNvbnN0IG5hbWVTb3J0ID0gc2FsZXNQZW9wbGUucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcbiAgICBpZighb2JqW2l0ZW1dKSB7XG4gICAgICBvYmpbaXRlbV0gPSAwO1xuICAgIH1cbiAgICBvYmpbaXRlbV0rKztcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG4gIC8vIGNvbnNvbGUubG9nKG5hbWVTb3J0KTtcbiAgY29uc3QgYmlnZ2VzdFNhbGVzbWFuID0gT2JqZWN0LmtleXMobmFtZVNvcnQpLnJlZHVjZSgoYSwgYikgPT4gbmFtZVNvcnRbYV0gPiBuYW1lU29ydFtiXSA/IGEgOiBiKTtcbiAgLy8gY29uc29sZS5sb2coYmlnZ2VzdFNhbGVzbWFuKVxuICBsZXQgbW9zdENhcnNTb2xkYnlUaGlzU2FsZXNtYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIG1vc3RDYXJzU29sZGJ5VGhpc1NhbGVzbWFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9zdC1zYWxlcy1wZXJzb25cIik7XG4gIG1vc3RDYXJzU29sZGJ5VGhpc1NhbGVzbWFuLnRleHRDb250ZW50ID0gYFRoZSBtb3N0IGNhcnMgd2VyZSBzb2xkIGJ5ID0gJHtiaWdnZXN0U2FsZXNtYW59YDtcbiAgcmV0dXJuIG1vc3RDYXJzU29sZGJ5VGhpc1NhbGVzbWFuO1xuICB9LFxuICBtb3N0UHJvZml0aW5nU2FsZXNtYW4gKHNhbGVzRGlnaXRzKSB7XG4gICAgc2FsZXNEaWdpdHMuZm9yRWFjaCggc2VsbCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxsLnNhbGVzX2FnZW50LmZpcnN0X25hbWUsIHNlbGwuZ3Jvc3NfcHJvZml0KVxuICAgIH0pXG4gIGNvbnN0IHNob3dTYWxlc21hbnNQcm9maXQgPSBzYWxlc0RpZ2l0cy5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgaWYoIW9ialtpdGVtLnNhbGVzX2FnZW50LmZpcnN0X25hbWVdKSB7XG4gICAgICBvYmpbaXRlbS5zYWxlc19hZ2VudC5maXJzdF9uYW1lXSA9IDA7XG4gICAgfVxuICAgIG9ialtpdGVtLnNhbGVzX2FnZW50LmZpcnN0X25hbWVdICs9IGl0ZW0uZ3Jvc3NfcHJvZml0O1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbiAgY29uc29sZS5sb2coc2hvd1NhbGVzbWFuc1Byb2ZpdClcblxuICBsZXQgc29ydFByb2ZpdHMgPSBbXTtcbiAgZm9yICh2YXIgc2FsZXNNYW4gaW4gc2hvd1NhbGVzbWFuc1Byb2ZpdCkge1xuICAgICAgc29ydFByb2ZpdHMucHVzaChbc2FsZXNNYW4sIHNob3dTYWxlc21hbnNQcm9maXRbc2FsZXNNYW5dXSk7XG4gIH1cblxuICBsZXQgZmluYWxQcm9maXRMaXN0ID0gc29ydFByb2ZpdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGFbMV0gLSBiWzFdO1xuICB9KTtcbiAgY29uc29sZS5sb2coZmluYWxQcm9maXRMaXN0LnJldmVyc2UoKVswXSk7XG5cbiAgbGV0IHByb2ZpdE1WUGlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9maXRNVlBpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vc3QtcHJvZml0aW5nLXNhbGVzcGVyc29uXCIpO1xuICBwcm9maXRNVlBpcy50ZXh0Q29udGVudCA9IGBUaGUgbW9zdCBwcm9maXQgaW4gc2FsZXMgd2FzIGJ5ID0gJHtmaW5hbFByb2ZpdExpc3RbMF1bMF19IHdpdGggJCR7ZmluYWxQcm9maXRMaXN0WzBdWzFdfSBpbiBzYWxlcy5gO1xuICByZXR1cm4gcHJvZml0TVZQaXM7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVhbGVyIiwiXG5jb25zdCBkZWFsZXJEYXRhID0ge1xuICBnZXRBbGxEZWFsZXJEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jYXJEZWFsZXJJbmZvXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFsZXJEYXRhIiwiLy8gVGhpcyBjb21wb25lbnQgd2lsbCBnZXQgdGhlIGRhdGEsIGJ1aWxkIHRoZSBIVE1MIGZyb20gdGhlIGRhdGEgYW5kIGFwcGVuZCBpdCB0byB0aGUgRE9NLlxuaW1wb3J0IGRlYWxlckRhdGEgZnJvbSBcIi4vZGVhbGVyRGF0YVwiXG5pbXBvcnQgZGVhbGVyIGZyb20gXCIuL2RlYWxlclwiXG5cblxuY29uc3QgZGVhbGVyTGlzdCA9IHtcbiAgZGVhbGVyaW5JdFVQICgpIHtcbiAgICBkZWFsZXJEYXRhLmdldEFsbERlYWxlckRhdGEoKVxuICAgIC50aGVuKGRlYWxlckltcG9ydGFudEluZm8gPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZWFsZXJJbXBvcnRhbnRJbmZvKVxuICAgICAgICBsZXQgZGVhbGVyRG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGRlYWxlckRvY0ZyYWdtZW50LmFwcGVuZENoaWxkKGRlYWxlci5hZGRQcm9maXQoZGVhbGVySW1wb3J0YW50SW5mbykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKS5hcHBlbmRDaGlsZChkZWFsZXJEb2NGcmFnbWVudCk7XG5cbiAgICAgICAgZGVhbGVyRG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGVhbGVyLm1vc3RTZWxsc01vbnRoKGRlYWxlckltcG9ydGFudEluZm8pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIikuYXBwZW5kQ2hpbGQoZGVhbGVyRG9jRnJhZ21lbnQpO1xuXG4gICAgICAgIGRlYWxlckRvY0ZyYWdtZW50LmFwcGVuZENoaWxkKGRlYWxlci5tb3N0Q2Fyc1NvbGRCeU1hbihkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmFwcGVuZENoaWxkKGRlYWxlckRvY0ZyYWdtZW50KTtcblxuICAgICAgICBkZWFsZXJEb2NGcmFnbWVudC5hcHBlbmRDaGlsZChkZWFsZXIubW9zdFByb2ZpdGluZ1NhbGVzbWFuKGRlYWxlckltcG9ydGFudEluZm8pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIikuYXBwZW5kQ2hpbGQoZGVhbGVyRG9jRnJhZ21lbnQpO1xuXG5cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlckxpc3QiLCJpbXBvcnQgZGVhbGVyTGlzdCBmcm9tIFwiLi9kZWFsZXJMaXN0XCJcblxuZGVhbGVyTGlzdC5kZWFsZXJpbkl0VVAoKTsiXX0=
