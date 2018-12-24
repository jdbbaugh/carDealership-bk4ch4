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
    }, {}); // console.log(showSalesmansProfit)

    let sortProfits = [];

    for (var salesMan in showSalesmansProfit) {
      sortProfits.push([salesMan, showSalesmansProfit[salesMan]]);
    }

    let finalProfitList = sortProfits.sort((a, b) => {
      return a[1] - b[1];
    });
    finalProfitList.reverse()[0];
    let profitMVPis = document.createElement("h2");
    profitMVPis.setAttribute("class", "most-profiting-salesperson");
    profitMVPis.textContent = `The most profit in sales was by = ${finalProfitList[0][0]} with $${finalProfitList[0][1]} in sales.`;
    return profitMVPis;
  },

  mostPopularModel(objectsForModels) {
    // console.log(objectsForModels);
    objectsForModels.forEach(carSearch => {// console.log(carSearch.vehicle.model)
    });
    const mostSoldModel = objectsForModels.reduce((obj, item) => {
      // console.log(item.vehicle.model)
      if (!obj[item.vehicle.model]) {
        obj[item.vehicle.model] = 0;
      }

      obj[item.vehicle.model]++;
      return obj;
    }, {}); // console.log(mostSoldModel)

    let sortCarModels = [];

    for (var model in mostSoldModel) {
      sortCarModels.push([model, mostSoldModel[model]]);
    }

    let finalProfitList = sortCarModels.sort((a, b) => {
      return a[1] - b[1];
    });
    finalProfitList.reverse(); // console.log(finalProfitList);

    let mostSoldVehicleModel = document.createElement("h2");
    mostSoldVehicleModel.setAttribute("class", "most-profiting-salesperson");
    mostSoldVehicleModel.textContent = `The most sold model of vehicle was = ${finalProfitList[0][0]} with ${finalProfitList[0][1]} vehicles sold.`;
    return mostSoldVehicleModel;
  },

  mostBankLoansBank(getBanked) {
    // console.log(getBanked)
    const bankSorting = getBanked.reduce((obj, item) => {
      // console.log(item.credit.credit_provider);
      if (!obj[item.credit.credit_provider]) {
        obj[item.credit.credit_provider] = 0;
      }

      obj[item.credit.credit_provider]++;
      return obj;
    }, {}); // console.log(bankSorting);

    let sortBankLoans = [];

    for (let bank in bankSorting) {
      sortBankLoans.push([bank, bankSorting[bank]]);
    }

    let finalBankList = sortBankLoans.sort((a, b) => {
      return a[1] - b[1];
    });
    finalBankList.reverse();
    console.log(finalBankList);
    let bankThatLoanedTheMost = document.createElement("h2");
    bankThatLoanedTheMost.setAttribute("class", "most-profiting-salesperson");
    bankThatLoanedTheMost.textContent = `The bank that loaned the most times was = ${finalBankList[0][0]} with ${finalBankList[0][1]} loans.`;
    return bankThatLoanedTheMost;
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
      dealerDocFragment.appendChild(_dealer.default.mostPopularModel(dealerImportantInfo));
      document.querySelector(".output").appendChild(dealerDocFragment);
      dealerDocFragment.appendChild(_dealer.default.mostBankLoansBank(dealerImportantInfo));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RlYWxlci5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyRGF0YS5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyTGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7OztBQURBO0FBR0EsTUFBTSxNQUFNLEdBQUc7QUFDYixFQUFBLFNBQVMsQ0FBQyxVQUFELEVBQWE7QUFDcEIsUUFBSSxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxVQUFNLFdBQVcsR0FBRyxJQUFJLElBQUosQ0FBUyxZQUFULENBQXBCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFsQixDQUhvQixDQUlwQjs7QUFFQSxJQUFBLFVBQVUsQ0FBQyxPQUFYLENBQW1CLElBQUksSUFBSTtBQUN6QixVQUFJLE9BQU8sR0FBRyxJQUFJLElBQUosQ0FBVSxJQUFJLENBQUMsYUFBZixDQUFkOztBQUNBLFVBQUksT0FBTyxJQUFJLFdBQVgsSUFBMEIsT0FBTyxJQUFJLFNBQXpDLEVBQW9EO0FBQ3BELFFBQUEsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFsQixDQURvRCxDQUVwRDtBQUNEOztBQUFBO0FBQ0EsS0FORCxFQU5vQixDQWFwQjs7QUFDQSxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDLGtCQUF0QztBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLEdBQStCLHVCQUFzQixTQUFVLEVBQS9EO0FBQ0EsV0FBTyxlQUFQO0FBQ0QsR0FuQlk7O0FBb0JiLEVBQUEsY0FBYyxDQUFFLFlBQUYsRUFBZ0I7QUFDNUIsUUFBSSxVQUFVLEdBQUcsRUFBakI7QUFDQSxJQUFBLFlBQVksQ0FBQyxPQUFiLENBQXFCLElB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QUEsaUJBQWlCLENBQUMsV0FBbEIsQ0FBOEIsZ0JBQU8sZ0JBQVAsQ0FBd0IsbUJBQXhCLENBQTlCO0FBQ0EsTUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxXQUFsQyxDQUE4QyxpQkFBOUM7QUFFQSxNQUFBLGlCQUFpQixDQUFDLFdBQWxCLENBQThCLGdCQUFPLGlCQUFQLENBQXlCLG1CQUF6QixDQUE5QjtBQUNBLE1BQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsV0FBbEMsQ0FBOEMsaUJBQTlDO0FBQ0gsS0FyQkQ7QUFzQkQ7O0FBeEJnQixDQUFuQjtlQTJCZSxVOzs7Ozs7QUNoQ2Y7Ozs7QUFFQSxvQkFBVyxZQUFYIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9HaXZlbiBhIHNpbmdsZSBvYmplY3QsIHRoaXMgY29tcG9uZW50IGJ1aWxkcyBvdXQgdGhlIEhUTUwgYW5kIHJldHVybnMgaXRcbmltcG9ydCBkZWFsZXJMaXN0IGZyb20gXCIuL2RlYWxlckxpc3RcIlxuXG5jb25zdCBkZWFsZXIgPSB7XG4gIGFkZFByb2ZpdChmcm9tRGVhbGVyKSB7XG4gICAgbGV0IGFkZFByb2ZpdCA9IDA7XG4gICAgY29uc3Qgc3RhcnRPZlllYXIgPSBuZXcgRGF0ZShcIjIwMTctMDEtMDFcIik7XG4gICAgY29uc3QgZW5kT2ZZZWFyID0gbmV3IERhdGUoXCIyMDE3LTEyLTMxXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0T2ZZZWFyKVxuXG4gICAgZnJvbURlYWxlci5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgbGV0IGRhdGVBZGQgPSBuZXcgRGF0ZSAoaW5mby5wdXJjaGFzZV9kYXRlKVxuICAgICAgaWYgKGRhdGVBZGQgPj0gc3RhcnRPZlllYXIgJiYgZGF0ZUFkZCA8PSBlbmRPZlllYXIpIHtcbiAgICAgIGFkZFByb2ZpdCArPSBpbmZvLmdyb3NzX3Byb2ZpdFxuICAgICAgLy8gY29uc29sZS5sb2coaW5mby5wdXJjaGFzZV9kYXRlKTtcbiAgICB9O1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGFkZFByb2ZpdCk7XG4gICAgbGV0IHByb2ZpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBwcm9maXRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9maXQtY29udGFpbmVyXCIpO1xuICAgIHByb2ZpdENvbnRhaW5lci50ZXh0Q29udGVudCA9IGAyMDE3IFByb2ZpdCBUb3RhbCA9ICR7YWRkUHJvZml0fWA7XG4gICAgcmV0dXJuIHByb2ZpdENvbnRhaW5lcjtcbiAgfSxcbiAgbW9zdFNlbGxzTW9udGggKGRlYWxlck9iamVjdCkge1xuICAgIGxldCBzYWxlc0RhdGVzID0gW107XG4gICAgZGVhbGVyT2JqZWN0LmZvckVhY2goaW5mbyA9PiB7XG4gICAgICBzYWxlc0RhdGVzLnB1c2goaW5mby5wdXJjaGFzZV9kYXRlKVxuICAgIH0pXG4gICAgc2FsZXNEYXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gICtuZXcgRGF0ZShhKSAtICtuZXcgRGF0ZShiKTtcbiAgICB9KVxuICAgIGNvbnN0IGRhdGVPYmplY3QgPSB7XG4gICAgICBqYW46IDAsXG4gICAgICBmZWI6IDAsXG4gICAgICBtYXI6IDAsXG4gICAgICBhcHI6IDAsXG4gICAgICBtYXk6IDAsXG4gICAgICBqdW46IDAsXG4gICAgICBqdWw6IDAsXG4gICAgICBhdWc6IDAsXG4gICAgICBzZXB0OiAwLFxuICAgICAgb2N0OiAwLFxuICAgICAgbm92OiAwLFxuICAgICAgZGVjOiAwXG4gICAgfVxuICAgIHNhbGVzRGF0ZXMuZm9yRWFjaChkYXRlID0+IHtcbiAgICAgIGNvbnN0IG1ha2VEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICBzd2l0Y2ggKG1ha2VEYXRlLmdldE1vbnRoKCkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBkYXRlT2JqZWN0LmphbisrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGRhdGVPYmplY3QuZmViKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgZGF0ZU9iamVjdC5tYXIrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICBkYXRlT2JqZWN0LmFwcisrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGRhdGVPYmplY3QubWF5KytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgZGF0ZU9iamVjdC5qdW4rK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICBkYXRlT2JqZWN0Lmp1bCsrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgIGRhdGVPYmplY3QuYXVnKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgZGF0ZU9iamVjdC5zZXB0KytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgZGF0ZU9iamVjdC5vY3QrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgZGF0ZU9iamVjdC5ub3YrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgZGF0ZU9iamVjdC5kZWMrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2cobWFrZURhdGUuZ2V0TW9udGgoKSlcbiAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGVPYmplY3QpXG4gICAgbGV0IGhpZ2hlc3RNbyA9IE9iamVjdC5rZXlzKGRhdGVPYmplY3QpLnJlZHVjZSgoYSwgYikgPT4gZGF0ZU9iamVjdFthXSA+IGRhdGVPYmplY3RbYl0gPyBhIDogYik7XG4gICAgLy8gY29uc29sZS5sb2coaGlnaGVzdE1vKVxuICAgIGxldCBoaWdoZXN0TW9udGhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGlnaGVzdE1vbnRoQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYmlnLW1vbnRoLWNvbnRhaW5lclwiKTtcbiAgICBoaWdoZXN0TW9udGhDb250YWluZXIudGV4dENvbnRlbnQgPSBgSGlnaGVzdCBNb250aCBvZiBTYWxlcyA9ICR7aGlnaGVzdE1vfSB3aXRoICR7ZGF0ZU9iamVjdC5qdW59IHNhbGVzYDtcbiAgICByZXR1cm4gaGlnaGVzdE1vbnRoQ29udGFpbmVyO1xuICB9LFxuICBtb3N0Q2Fyc1NvbGRCeU1hbiAobWFuU2FsZU9iamVjdCkge1xuICAgIGxldCBzYWxlc1Blb3BsZSA9IFtdXG4gICAgbWFuU2FsZU9iamVjdC5mb3JFYWNoKGFnZW50ID0+IHtcbiAgICBzYWxlc1Blb3BsZS5wdXNoKGAke2FnZW50LnNhbGVzX2FnZW50LmZpcnN0X25hbWV9ICR7YWdlbnQuc2FsZXNfYWdlbnQubGFzdF9uYW1lfWApXG4gIH0pXG4gIC8vIGNvbnNvbGUubG9nKHNhbGVzUGVvcGxlLnNvcnQoKSk7XG5cbiAgY29uc3QgbmFtZVNvcnQgPSBzYWxlc1Blb3BsZS5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuICAgIGlmKCFvYmpbaXRlbV0pIHtcbiAgICAgIG9ialtpdGVtXSA9IDA7XG4gICAgfVxuICAgIG9ialtpdGVtXSsrO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbiAgLy8gY29uc29sZS5sb2cobmFtZVNvcnQpO1xuICBjb25zdCBiaWdnZXN0U2FsZXNtYW4gPSBPYmplY3Qua2V5cyhuYW1lU29ydCkucmVkdWNlKChhLCBiKSA9PiBuYW1lU29ydFthXSA+IG5hbWVTb3J0W2JdID8gYSA6IGIpO1xuICAvLyBjb25zb2xlLmxvZyhiaWdnZXN0U2FsZXNtYW4pXG4gIGxldCBtb3N0Q2Fyc1NvbGRieVRoaXNTYWxlc21hbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbW9zdENhcnNTb2xkYnlUaGlzU2FsZXNtYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb3N0LXNhbGVzLXBlcnNvblwiKTtcbiAgbW9zdENhcnNTb2xkYnlUaGlzU2FsZXNtYW4udGV4dENvbnRlbnQgPSBgVGhlIG1vc3QgY2FycyB3ZXJlIHNvbGQgYnkgPSAke2JpZ2dlc3RTYWxlc21hbn1gO1xuICByZXR1cm4gbW9zdENhcnNTb2xkYnlUaGlzU2FsZXNtYW47XG4gIH0sXG4gIG1vc3RQcm9maXRpbmdTYWxlc21hbiAoc2FsZXNEaWdpdHMpIHtcbiAgICBzYWxlc0RpZ2l0cy5mb3JFYWNoKCBzZWxsID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGwuc2FsZXNfYWdlbnQuZmlyc3RfbmFtZSwgc2VsbC5ncm9zc19wcm9maXQpXG4gICAgfSlcbiAgY29uc3Qgc2hvd1NhbGVzbWFuc1Byb2ZpdCA9IHNhbGVzRGlnaXRzLnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coaXRlbSlcbiAgICBpZighb2JqW2l0ZW0uc2FsZXNfYWdlbnQuZmlyc3RfbmFtZV0pIHtcbiAgICAgIG9ialtpdGVtLnNhbGVzX2FnZW50LmZpcnN0X25hbWVdID0gMDtcbiAgICB9XG4gICAgb2JqW2l0ZW0uc2FsZXNfYWdlbnQuZmlyc3RfbmFtZV0gKz0gaXRlbS5ncm9zc19wcm9maXQ7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuICAvLyBjb25zb2xlLmxvZyhzaG93U2FsZXNtYW5zUHJvZml0KVxuXG4gIGxldCBzb3J0UHJvZml0cyA9IFtdO1xuICBmb3IgKHZhciBzYWxlc01hbiBpbiBzaG93U2FsZXNtYW5zUHJvZml0KSB7XG4gICAgICBzb3J0UHJvZml0cy5wdXNoKFtzYWxlc01hbiwgc2hvd1NhbGVzbWFuc1Byb2ZpdFtzYWxlc01hbl1dKTtcbiAgfVxuXG4gIGxldCBmaW5hbFByb2ZpdExpc3QgPSBzb3J0UHJvZml0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYVsxXSAtIGJbMV07XG4gIH0pO1xuICBcbiAgZmluYWxQcm9maXRMaXN0LnJldmVyc2UoKVswXVxuXG4gIGxldCBwcm9maXRNVlBpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcHJvZml0TVZQaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb3N0LXByb2ZpdGluZy1zYWxlc3BlcnNvblwiKTtcbiAgcHJvZml0TVZQaXMudGV4dENvbnRlbnQgPSBgVGhlIG1vc3QgcHJvZml0IGluIHNhbGVzIHdhcyBieSA9ICR7ZmluYWxQcm9maXRMaXN0WzBdWzBdfSB3aXRoICQke2ZpbmFsUHJvZml0TGlzdFswXVsxXX0gaW4gc2FsZXMuYDtcbiAgcmV0dXJuIHByb2ZpdE1WUGlzO1xuICB9LFxuICBtb3N0UG9wdWxhck1vZGVsIChvYmplY3RzRm9yTW9kZWxzKSB7XG4gICAgLy8gY29uc29sZS5sb2cob2JqZWN0c0Zvck1vZGVscyk7XG4gICAgb2JqZWN0c0Zvck1vZGVscy5mb3JFYWNoKGNhclNlYXJjaCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjYXJTZWFyY2gudmVoaWNsZS5tb2RlbClcbiAgICB9KVxuICAgIGNvbnN0IG1vc3RTb2xkTW9kZWwgPSBvYmplY3RzRm9yTW9kZWxzLnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLnZlaGljbGUubW9kZWwpXG4gICAgICBpZighb2JqW2l0ZW0udmVoaWNsZS5tb2RlbF0pIHtcbiAgICAgICAgb2JqW2l0ZW0udmVoaWNsZS5tb2RlbF0gPSAwO1xuICAgICAgfVxuICAgICAgb2JqW2l0ZW0udmVoaWNsZS5tb2RlbF0rKztcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSwge30pO1xuICAgIC8vIGNvbnNvbGUubG9nKG1vc3RTb2xkTW9kZWwpXG5cbiAgICBsZXQgc29ydENhck1vZGVscyA9IFtdO1xuICAgIGZvciAodmFyIG1vZGVsIGluIG1vc3RTb2xkTW9kZWwpIHtcbiAgICAgICAgc29ydENhck1vZGVscy5wdXNoKFttb2RlbCwgbW9zdFNvbGRNb2RlbFttb2RlbF1dKTtcbiAgICB9XG4gIFxuICAgIGxldCBmaW5hbFByb2ZpdExpc3QgPSBzb3J0Q2FyTW9kZWxzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGFbMV0gLSBiWzFdO1xuICAgIH0pO1xuICAgIGZpbmFsUHJvZml0TGlzdC5yZXZlcnNlKCk7XG4gICAgLy8gY29uc29sZS5sb2coZmluYWxQcm9maXRMaXN0KTtcblxuICAgIGxldCBtb3N0U29sZFZlaGljbGVNb2RlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtb3N0U29sZFZlaGljbGVNb2RlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vc3QtcHJvZml0aW5nLXNhbGVzcGVyc29uXCIpO1xuICAgIG1vc3RTb2xkVmVoaWNsZU1vZGVsLnRleHRDb250ZW50ID0gYFRoZSBtb3N0IHNvbGQgbW9kZWwgb2YgdmVoaWNsZSB3YXMgPSAke2ZpbmFsUHJvZml0TGlzdFswXVswXX0gd2l0aCAke2ZpbmFsUHJvZml0TGlzdFswXVsxXX0gdmVoaWNsZXMgc29sZC5gO1xuICAgIHJldHVybiBtb3N0U29sZFZlaGljbGVNb2RlbDtcbiAgfSxcbiAgbW9zdEJhbmtMb2Fuc0JhbmsgKGdldEJhbmtlZCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGdldEJhbmtlZClcbiAgICBjb25zdCBiYW5rU29ydGluZyA9IGdldEJhbmtlZC5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5jcmVkaXQuY3JlZGl0X3Byb3ZpZGVyKTtcbiAgICAgIGlmKCFvYmpbaXRlbS5jcmVkaXQuY3JlZGl0X3Byb3ZpZGVyXSkge1xuICAgICAgICBvYmpbaXRlbS5jcmVkaXQuY3JlZGl0X3Byb3ZpZGVyXSA9IDA7XG4gICAgICB9XG4gICAgICBvYmpbaXRlbS5jcmVkaXQuY3JlZGl0X3Byb3ZpZGVyXSsrO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gICAgLy8gY29uc29sZS5sb2coYmFua1NvcnRpbmcpO1xuXG4gICAgbGV0IHNvcnRCYW5rTG9hbnMgPSBbXTtcbiAgICBmb3IgKGxldCBiYW5rIGluIGJhbmtTb3J0aW5nKSB7XG4gICAgICAgIHNvcnRCYW5rTG9hbnMucHVzaChbYmFuaywgYmFua1NvcnRpbmdbYmFua11dKTtcbiAgICB9XG4gIFxuICAgIGxldCBmaW5hbEJhbmtMaXN0ID0gc29ydEJhbmtMb2Fucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhWzFdIC0gYlsxXTtcbiAgICB9KTtcbiAgICBmaW5hbEJhbmtMaXN0LnJldmVyc2UoKTtcbiAgICBjb25zb2xlLmxvZyhmaW5hbEJhbmtMaXN0KTtcblxuICAgIGxldCBiYW5rVGhhdExvYW5lZFRoZU1vc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYmFua1RoYXRMb2FuZWRUaGVNb3N0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9zdC1wcm9maXRpbmctc2FsZXNwZXJzb25cIik7XG4gICAgYmFua1RoYXRMb2FuZWRUaGVNb3N0LnRleHRDb250ZW50ID0gYFRoZSBiYW5rIHRoYXQgbG9hbmVkIHRoZSBtb3N0IHRpbWVzIHdhcyA9ICR7ZmluYWxCYW5rTGlzdFswXVswXX0gd2l0aCAke2ZpbmFsQmFua0xpc3RbMF1bMV19IGxvYW5zLmA7XG4gICAgcmV0dXJuIGJhbmtUaGF0TG9hbmVkVGhlTW9zdDtcblxuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlciIsIlxuY29uc3QgZGVhbGVyRGF0YSA9IHtcbiAgZ2V0QWxsRGVhbGVyRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY2FyRGVhbGVySW5mb1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVhbGVyRGF0YSIsIi8vIFRoaXMgY29tcG9uZW50IHdpbGwgZ2V0IHRoZSBkYXRhLCBidWlsZCB0aGUgSFRNTCBmcm9tIHRoZSBkYXRhIGFuZCBhcHBlbmQgaXQgdG8gdGhlIERPTS5cbmltcG9ydCBkZWFsZXJEYXRhIGZyb20gXCIuL2RlYWxlckRhdGFcIlxuaW1wb3J0IGRlYWxlciBmcm9tIFwiLi9kZWFsZXJcIlxuXG5cbmNvbnN0IGRlYWxlckxpc3QgPSB7XG4gIGRlYWxlcmluSXRVUCAoKSB7XG4gICAgZGVhbGVyRGF0YS5nZXRBbGxEZWFsZXJEYXRhKClcbiAgICAudGhlbihkZWFsZXJJbXBvcnRhbnRJbmZvID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGVhbGVySW1wb3J0YW50SW5mbylcbiAgICAgICAgbGV0IGRlYWxlckRvY0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBkZWFsZXJEb2NGcmFnbWVudC5hcHBlbmRDaGlsZChkZWFsZXIuYWRkUHJvZml0KGRlYWxlckltcG9ydGFudEluZm8pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIikuYXBwZW5kQ2hpbGQoZGVhbGVyRG9jRnJhZ21lbnQpO1xuXG4gICAgICAgIGRlYWxlckRvY0ZyYWdtZW50LmFwcGVuZENoaWxkKGRlYWxlci5tb3N0U2VsbHNNb250aChkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmFwcGVuZENoaWxkKGRlYWxlckRvY0ZyYWdtZW50KTtcblxuICAgICAgICBkZWFsZXJEb2NGcmFnbWVudC5hcHBlbmRDaGlsZChkZWFsZXIubW9zdENhcnNTb2xkQnlNYW4oZGVhbGVySW1wb3J0YW50SW5mbykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKS5hcHBlbmRDaGlsZChkZWFsZXJEb2NGcmFnbWVudCk7XG5cbiAgICAgICAgZGVhbGVyRG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGVhbGVyLm1vc3RQcm9maXRpbmdTYWxlc21hbihkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmFwcGVuZENoaWxkKGRlYWxlckRvY0ZyYWdtZW50KTtcblxuICAgICAgICBkZWFsZXJEb2NGcmFnbWVudC5hcHBlbmRDaGlsZChkZWFsZXIubW9zdFBvcHVsYXJNb2RlbChkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmFwcGVuZENoaWxkKGRlYWxlckRvY0ZyYWdtZW50KTtcblxuICAgICAgICBkZWFsZXJEb2NGcmFnbWVudC5hcHBlbmRDaGlsZChkZWFsZXIubW9zdEJhbmtMb2Fuc0JhbmsoZGVhbGVySW1wb3J0YW50SW5mbykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKS5hcHBlbmRDaGlsZChkZWFsZXJEb2NGcmFnbWVudCk7XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFsZXJMaXN0IiwiaW1wb3J0IGRlYWxlckxpc3QgZnJvbSBcIi4vZGVhbGVyTGlzdFwiXG5cbmRlYWxlckxpc3QuZGVhbGVyaW5JdFVQKCk7Il19
