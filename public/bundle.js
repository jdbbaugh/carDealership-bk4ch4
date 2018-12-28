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
    $(highestMonthContainer).attr("class", "big-month-container");
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
    $(mostCarsSoldbyThisSalesman).attr("class", "most-sales-person");
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
    $(profitMVPis).attr("class", "most-profiting-salesperson");
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
    $(mostSoldVehicleModel).attr("class", "most-profiting-salesperson");
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
      $(dealerDocFragment).append(_dealer.default.addProfit(dealerImportantInfo));
      $(".output").append(dealerDocFragment);
      $(dealerDocFragment).append(_dealer.default.mostSellsMonth(dealerImportantInfo));
      $(".output").append(dealerDocFragment);
      $(dealerDocFragment).append(_dealer.default.mostCarsSoldByMan(dealerImportantInfo));
      $(".output").append(dealerDocFragment);
      $(dealerDocFragment).append(_dealer.default.mostProfitingSalesman(dealerImportantInfo));
      $(".output").append(dealerDocFragment);
      $(dealerDocFragment).append(_dealer.default.mostPopularModel(dealerImportantInfo));
      $(".output").append(dealerDocFragment);
      $(dealerDocFragment).append(_dealer.default.mostBankLoansBank(dealerImportantInfo));
      $(".output").append(dealerDocFragment);
      $(".output").prepend("<header><h1>2017 CARDEALER STATS</h1></header>");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RlYWxlci5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyRGF0YS5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyTGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7OztBQURBO0FBR0EsTUFBTSxNQUFNLEdBQUc7QUFDYixFQUFBLFNBQVMsQ0FBQyxVQUFELEVBQWE7QUFDcEIsUUFBSSxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxVQUFNLFdBQVcsR0FBRyxJQUFJLElBQUosQ0FBUyxZQUFULENBQXBCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFsQixDQUhvQixDQUlwQjs7QUFFQSxJQUFBLFVBQVUsQ0FBQyxPQUFYLENBQW1CLElBQUksSUFBSTtBQUN6QixVQUFJLE9BQU8sR0FBRyxJQUFJLElBQUosQ0FBVSxJQUFJLENBQUMsYUFBZixDQUFkOztBQUNBLFVBQUksT0FBTyxJQUFJLFdBQVgsSUFBMEIsT0FBTyxJQUFJLFNBQXpDLEVBQW9EO0FBQ3BELFFBQUEsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFsQixDQURvRCxDQUVwRDtBQUNEOztBQUFBO0FBQ0EsS0FORCxFQU5vQixDQWFwQjs7QUFDQSxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDLGtCQUF0QztBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLEdBQStCLHVCQUFzQixTQUFVLEVBQS9EO0FBQ0EsV0FBTyxlQUFQO0FBQ0QsR0FuQlk7O0FBb0JiLEVBQUEsY0FBYyxDQUFFLFlBQUYsRUFBZ0I7QUFDNUIsUUFBSSxVQUFVLEdBQUcsRUFBakI7QUFDQSxJQUFBLFlBQVksQ0FBQyxPQUFiLENBQXFCLElB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QkFBUCxDQUE2QixtQkFBN0IsQ0FBNUI7QUFDQSxNQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxNQUFiLENBQW9CLGlCQUFwQjtBQUVBLE1BQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsTUFBckIsQ0FBNEIsZ0JBQU8sZ0JBQVAsQ0FBd0IsbUJBQXhCLENBQTVCO0FBQ0EsTUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsTUFBYixDQUFvQixpQkFBcEI7QUFFQSxNQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLE1BQXJCLENBQTRCLGdCQUFPLGlCQUFQLENBQXlCLG1CQUF6QixDQUE1QjtBQUNBLE1BQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLE1BQWIsQ0FBb0IsaUJBQXBCO0FBRUEsTUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEsT0FBYixDQUFxQixnREFBckI7QUFFSCxLQTFCRDtBQTJCRDs7QUE3QmdCLENBQW5CO2VBZ0NlLFU7Ozs7OztBQ3JDZjs7OztBQUVBLG9CQUFXLFlBQVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL0dpdmVuIGEgc2luZ2xlIG9iamVjdCwgdGhpcyBjb21wb25lbnQgYnVpbGRzIG91dCB0aGUgSFRNTCBhbmQgcmV0dXJucyBpdFxuaW1wb3J0IGRlYWxlckxpc3QgZnJvbSBcIi4vZGVhbGVyTGlzdFwiXG5cbmNvbnN0IGRlYWxlciA9IHtcbiAgYWRkUHJvZml0KGZyb21EZWFsZXIpIHtcbiAgICBsZXQgYWRkUHJvZml0ID0gMDtcbiAgICBjb25zdCBzdGFydE9mWWVhciA9IG5ldyBEYXRlKFwiMjAxNy0wMS0wMVwiKTtcbiAgICBjb25zdCBlbmRPZlllYXIgPSBuZXcgRGF0ZShcIjIwMTctMTItMzFcIik7XG4gICAgLy8gY29uc29sZS5sb2coc3RhcnRPZlllYXIpXG5cbiAgICBmcm9tRGVhbGVyLmZvckVhY2goaW5mbyA9PiB7XG4gICAgICBsZXQgZGF0ZUFkZCA9IG5ldyBEYXRlIChpbmZvLnB1cmNoYXNlX2RhdGUpXG4gICAgICBpZiAoZGF0ZUFkZCA+PSBzdGFydE9mWWVhciAmJiBkYXRlQWRkIDw9IGVuZE9mWWVhcikge1xuICAgICAgYWRkUHJvZml0ICs9IGluZm8uZ3Jvc3NfcHJvZml0XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmZvLnB1cmNoYXNlX2RhdGUpO1xuICAgIH07XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coYWRkUHJvZml0KTtcbiAgICBsZXQgcHJvZml0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHByb2ZpdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2ZpdC1jb250YWluZXJcIik7XG4gICAgcHJvZml0Q29udGFpbmVyLnRleHRDb250ZW50ID0gYDIwMTcgUHJvZml0IFRvdGFsID0gJHthZGRQcm9maXR9YDtcbiAgICByZXR1cm4gcHJvZml0Q29udGFpbmVyO1xuICB9LFxuICBtb3N0U2VsbHNNb250aCAoZGVhbGVyT2JqZWN0KSB7XG4gICAgbGV0IHNhbGVzRGF0ZXMgPSBbXTtcbiAgICBkZWFsZXJPYmplY3QuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgIHNhbGVzRGF0ZXMucHVzaChpbmZvLnB1cmNoYXNlX2RhdGUpXG4gICAgfSlcbiAgICBzYWxlc0RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiAgK25ldyBEYXRlKGEpIC0gK25ldyBEYXRlKGIpO1xuICAgIH0pXG4gICAgY29uc3QgZGF0ZU9iamVjdCA9IHtcbiAgICAgIGphbjogMCxcbiAgICAgIGZlYjogMCxcbiAgICAgIG1hcjogMCxcbiAgICAgIGFwcjogMCxcbiAgICAgIG1heTogMCxcbiAgICAgIGp1bjogMCxcbiAgICAgIGp1bDogMCxcbiAgICAgIGF1ZzogMCxcbiAgICAgIHNlcHQ6IDAsXG4gICAgICBvY3Q6IDAsXG4gICAgICBub3Y6IDAsXG4gICAgICBkZWM6IDBcbiAgICB9XG4gICAgc2FsZXNEYXRlcy5mb3JFYWNoKGRhdGUgPT4ge1xuICAgICAgY29uc3QgbWFrZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgIHN3aXRjaCAobWFrZURhdGUuZ2V0TW9udGgoKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgIGRhdGVPYmplY3QuamFuKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgZGF0ZU9iamVjdC5mZWIrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBkYXRlT2JqZWN0Lm1hcisrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgIGRhdGVPYmplY3QuYXByKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgZGF0ZU9iamVjdC5tYXkrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICBkYXRlT2JqZWN0Lmp1bisrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgIGRhdGVPYmplY3QuanVsKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgZGF0ZU9iamVjdC5hdWcrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICBkYXRlT2JqZWN0LnNlcHQrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICBkYXRlT2JqZWN0Lm9jdCsrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICBkYXRlT2JqZWN0Lm5vdisrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICBkYXRlT2JqZWN0LmRlYysrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhtYWtlRGF0ZS5nZXRNb250aCgpKVxuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2coZGF0ZU9iamVjdClcbiAgICBsZXQgaGlnaGVzdE1vID0gT2JqZWN0LmtleXMoZGF0ZU9iamVjdCkucmVkdWNlKChhLCBiKSA9PiBkYXRlT2JqZWN0W2FdID4gZGF0ZU9iamVjdFtiXSA/IGEgOiBiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhoaWdoZXN0TW8pXG4gICAgbGV0IGhpZ2hlc3RNb250aENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAkKGhpZ2hlc3RNb250aENvbnRhaW5lcikuYXR0cihcImNsYXNzXCIsIFwiYmlnLW1vbnRoLWNvbnRhaW5lclwiKTtcbiAgICBoaWdoZXN0TW9udGhDb250YWluZXIudGV4dENvbnRlbnQgPSBgSGlnaGVzdCBNb250aCBvZiBTYWxlcyA9ICR7aGlnaGVzdE1vfSB3aXRoICR7ZGF0ZU9iamVjdC5qdW59IHNhbGVzYDtcbiAgICByZXR1cm4gaGlnaGVzdE1vbnRoQ29udGFpbmVyO1xuICB9LFxuICBtb3N0Q2Fyc1NvbGRCeU1hbiAobWFuU2FsZU9iamVjdCkge1xuICAgIGxldCBzYWxlc1Blb3BsZSA9IFtdXG4gICAgbWFuU2FsZU9iamVjdC5mb3JFYWNoKGFnZW50ID0+IHtcbiAgICBzYWxlc1Blb3BsZS5wdXNoKGAke2FnZW50LnNhbGVzX2FnZW50LmZpcnN0X25hbWV9ICR7YWdlbnQuc2FsZXNfYWdlbnQubGFzdF9uYW1lfWApXG4gIH0pXG4gIC8vIGNvbnNvbGUubG9nKHNhbGVzUGVvcGxlLnNvcnQoKSk7XG5cbiAgY29uc3QgbmFtZVNvcnQgPSBzYWxlc1Blb3BsZS5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuICAgIGlmKCFvYmpbaXRlbV0pIHtcbiAgICAgIG9ialtpdGVtXSA9IDA7XG4gICAgfVxuICAgIG9ialtpdGVtXSsrO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbiAgLy8gY29uc29sZS5sb2cobmFtZVNvcnQpO1xuICBjb25zdCBiaWdnZXN0U2FsZXNtYW4gPSBPYmplY3Qua2V5cyhuYW1lU29ydCkucmVkdWNlKChhLCBiKSA9PiBuYW1lU29ydFthXSA+IG5hbWVTb3J0W2JdID8gYSA6IGIpO1xuICAvLyBjb25zb2xlLmxvZyhiaWdnZXN0U2FsZXNtYW4pXG4gIGxldCBtb3N0Q2Fyc1NvbGRieVRoaXNTYWxlc21hbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgJChtb3N0Q2Fyc1NvbGRieVRoaXNTYWxlc21hbikuYXR0cihcImNsYXNzXCIsIFwibW9zdC1zYWxlcy1wZXJzb25cIik7XG4gIG1vc3RDYXJzU29sZGJ5VGhpc1NhbGVzbWFuLnRleHRDb250ZW50ID0gYFRoZSBtb3N0IGNhcnMgd2VyZSBzb2xkIGJ5ID0gJHtiaWdnZXN0U2FsZXNtYW59YDtcbiAgcmV0dXJuIG1vc3RDYXJzU29sZGJ5VGhpc1NhbGVzbWFuO1xuICB9LFxuICBtb3N0UHJvZml0aW5nU2FsZXNtYW4gKHNhbGVzRGlnaXRzKSB7XG4gICAgc2FsZXNEaWdpdHMuZm9yRWFjaCggc2VsbCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxsLnNhbGVzX2FnZW50LmZpcnN0X25hbWUsIHNlbGwuZ3Jvc3NfcHJvZml0KVxuICAgIH0pXG4gIGNvbnN0IHNob3dTYWxlc21hbnNQcm9maXQgPSBzYWxlc0RpZ2l0cy5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgaWYoIW9ialtpdGVtLnNhbGVzX2FnZW50LmZpcnN0X25hbWVdKSB7XG4gICAgICBvYmpbaXRlbS5zYWxlc19hZ2VudC5maXJzdF9uYW1lXSA9IDA7XG4gICAgfVxuICAgIG9ialtpdGVtLnNhbGVzX2FnZW50LmZpcnN0X25hbWVdICs9IGl0ZW0uZ3Jvc3NfcHJvZml0O1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbiAgLy8gY29uc29sZS5sb2coc2hvd1NhbGVzbWFuc1Byb2ZpdClcblxuICBsZXQgc29ydFByb2ZpdHMgPSBbXTtcbiAgZm9yICh2YXIgc2FsZXNNYW4gaW4gc2hvd1NhbGVzbWFuc1Byb2ZpdCkge1xuICAgICAgc29ydFByb2ZpdHMucHVzaChbc2FsZXNNYW4sIHNob3dTYWxlc21hbnNQcm9maXRbc2FsZXNNYW5dXSk7XG4gIH1cblxuICBsZXQgZmluYWxQcm9maXRMaXN0ID0gc29ydFByb2ZpdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGFbMV0gLSBiWzFdO1xuICB9KTtcbiAgXG4gIGZpbmFsUHJvZml0TGlzdC5yZXZlcnNlKClbMF1cblxuICBsZXQgcHJvZml0TVZQaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICQocHJvZml0TVZQaXMpLmF0dHIoXCJjbGFzc1wiLCBcIm1vc3QtcHJvZml0aW5nLXNhbGVzcGVyc29uXCIpO1xuICBwcm9maXRNVlBpcy50ZXh0Q29udGVudCA9IGBUaGUgbW9zdCBwcm9maXQgaW4gc2FsZXMgd2FzIGJ5ID0gJHtmaW5hbFByb2ZpdExpc3RbMF1bMF19IHdpdGggJCR7ZmluYWxQcm9maXRMaXN0WzBdWzFdfSBpbiBzYWxlcy5gO1xuICByZXR1cm4gcHJvZml0TVZQaXM7XG4gIH0sXG4gIG1vc3RQb3B1bGFyTW9kZWwgKG9iamVjdHNGb3JNb2RlbHMpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhvYmplY3RzRm9yTW9kZWxzKTtcbiAgICBvYmplY3RzRm9yTW9kZWxzLmZvckVhY2goY2FyU2VhcmNoID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNhclNlYXJjaC52ZWhpY2xlLm1vZGVsKVxuICAgIH0pXG4gICAgY29uc3QgbW9zdFNvbGRNb2RlbCA9IG9iamVjdHNGb3JNb2RlbHMucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0udmVoaWNsZS5tb2RlbClcbiAgICAgIGlmKCFvYmpbaXRlbS52ZWhpY2xlLm1vZGVsXSkge1xuICAgICAgICBvYmpbaXRlbS52ZWhpY2xlLm1vZGVsXSA9IDA7XG4gICAgICB9XG4gICAgICBvYmpbaXRlbS52ZWhpY2xlLm1vZGVsXSsrO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gICAgLy8gY29uc29sZS5sb2cobW9zdFNvbGRNb2RlbClcblxuICAgIGxldCBzb3J0Q2FyTW9kZWxzID0gW107XG4gICAgZm9yICh2YXIgbW9kZWwgaW4gbW9zdFNvbGRNb2RlbCkge1xuICAgICAgICBzb3J0Q2FyTW9kZWxzLnB1c2goW21vZGVsLCBtb3N0U29sZE1vZGVsW21vZGVsXV0pO1xuICAgIH1cbiAgXG4gICAgbGV0IGZpbmFsUHJvZml0TGlzdCA9IHNvcnRDYXJNb2RlbHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gYVsxXSAtIGJbMV07XG4gICAgfSk7XG4gICAgZmluYWxQcm9maXRMaXN0LnJldmVyc2UoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhmaW5hbFByb2ZpdExpc3QpO1xuXG4gICAgbGV0IG1vc3RTb2xkVmVoaWNsZU1vZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICQobW9zdFNvbGRWZWhpY2xlTW9kZWwpLmF0dHIoXCJjbGFzc1wiLCBcIm1vc3QtcHJvZml0aW5nLXNhbGVzcGVyc29uXCIpO1xuICAgIG1vc3RTb2xkVmVoaWNsZU1vZGVsLnRleHRDb250ZW50ID0gYFRoZSBtb3N0IHNvbGQgbW9kZWwgb2YgdmVoaWNsZSB3YXMgPSAke2ZpbmFsUHJvZml0TGlzdFswXVswXX0gd2l0aCAke2ZpbmFsUHJvZml0TGlzdFswXVsxXX0gdmVoaWNsZXMgc29sZC5gO1xuICAgIHJldHVybiBtb3N0U29sZFZlaGljbGVNb2RlbDtcbiAgfSxcbiAgbW9zdEJhbmtMb2Fuc0JhbmsgKGdldEJhbmtlZCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGdldEJhbmtlZClcbiAgICBjb25zdCBiYW5rU29ydGluZyA9IGdldEJhbmtlZC5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5jcmVkaXQuY3JlZGl0X3Byb3ZpZGVyKTtcbiAgICAgIGlmKCFvYmpbaXRlbS5jcmVkaXQuY3JlZGl0X3Byb3ZpZGVyXSkge1xuICAgICAgICBvYmpbaXRlbS5jcmVkaXQuY3JlZGl0X3Byb3ZpZGVyXSA9IDA7XG4gICAgICB9XG4gICAgICBvYmpbaXRlbS5jcmVkaXQuY3JlZGl0X3Byb3ZpZGVyXSsrO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gICAgLy8gY29uc29sZS5sb2coYmFua1NvcnRpbmcpO1xuXG4gICAgbGV0IHNvcnRCYW5rTG9hbnMgPSBbXTtcbiAgICBmb3IgKGxldCBiYW5rIGluIGJhbmtTb3J0aW5nKSB7XG4gICAgICAgIHNvcnRCYW5rTG9hbnMucHVzaChbYmFuaywgYmFua1NvcnRpbmdbYmFua11dKTtcbiAgICB9XG4gIFxuICAgIGxldCBmaW5hbEJhbmtMaXN0ID0gc29ydEJhbmtMb2Fucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhWzFdIC0gYlsxXTtcbiAgICB9KTtcbiAgICBmaW5hbEJhbmtMaXN0LnJldmVyc2UoKTtcbiAgICBjb25zb2xlLmxvZyhmaW5hbEJhbmtMaXN0KTtcblxuICAgIGxldCBiYW5rVGhhdExvYW5lZFRoZU1vc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYmFua1RoYXRMb2FuZWRUaGVNb3N0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9zdC1wcm9maXRpbmctc2FsZXNwZXJzb25cIik7XG4gICAgYmFua1RoYXRMb2FuZWRUaGVNb3N0LnRleHRDb250ZW50ID0gYFRoZSBiYW5rIHRoYXQgbG9hbmVkIHRoZSBtb3N0IHRpbWVzIHdhcyA9ICR7ZmluYWxCYW5rTGlzdFswXVswXX0gd2l0aCAke2ZpbmFsQmFua0xpc3RbMF1bMV19IGxvYW5zLmA7XG4gICAgcmV0dXJuIGJhbmtUaGF0TG9hbmVkVGhlTW9zdDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVhbGVyIiwiXG5jb25zdCBkZWFsZXJEYXRhID0ge1xuICBnZXRBbGxEZWFsZXJEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jYXJEZWFsZXJJbmZvXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFsZXJEYXRhIiwiLy8gVGhpcyBjb21wb25lbnQgd2lsbCBnZXQgdGhlIGRhdGEsIGJ1aWxkIHRoZSBIVE1MIGZyb20gdGhlIGRhdGEgYW5kIGFwcGVuZCBpdCB0byB0aGUgRE9NLlxuaW1wb3J0IGRlYWxlckRhdGEgZnJvbSBcIi4vZGVhbGVyRGF0YVwiXG5pbXBvcnQgZGVhbGVyIGZyb20gXCIuL2RlYWxlclwiXG5cblxuY29uc3QgZGVhbGVyTGlzdCA9IHtcbiAgZGVhbGVyaW5JdFVQICgpIHtcbiAgICBkZWFsZXJEYXRhLmdldEFsbERlYWxlckRhdGEoKVxuICAgIC50aGVuKGRlYWxlckltcG9ydGFudEluZm8gPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZWFsZXJJbXBvcnRhbnRJbmZvKVxuXG4gICAgICAgIFxuICAgICAgICBsZXQgZGVhbGVyRG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICQoZGVhbGVyRG9jRnJhZ21lbnQpLmFwcGVuZChkZWFsZXIuYWRkUHJvZml0KGRlYWxlckltcG9ydGFudEluZm8pKTtcbiAgICAgICAgJChcIi5vdXRwdXRcIikuYXBwZW5kKGRlYWxlckRvY0ZyYWdtZW50KTtcbiAgICAgICAgXG4gICAgICAgICQoZGVhbGVyRG9jRnJhZ21lbnQpLmFwcGVuZChkZWFsZXIubW9zdFNlbGxzTW9udGgoZGVhbGVySW1wb3J0YW50SW5mbykpO1xuICAgICAgICAkKFwiLm91dHB1dFwiKS5hcHBlbmQoZGVhbGVyRG9jRnJhZ21lbnQpO1xuICAgICAgICBcbiAgICAgICAgJChkZWFsZXJEb2NGcmFnbWVudCkuYXBwZW5kKGRlYWxlci5tb3N0Q2Fyc1NvbGRCeU1hbihkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgICQoXCIub3V0cHV0XCIpLmFwcGVuZChkZWFsZXJEb2NGcmFnbWVudCk7XG4gICAgICAgIFxuICAgICAgICAkKGRlYWxlckRvY0ZyYWdtZW50KS5hcHBlbmQoZGVhbGVyLm1vc3RQcm9maXRpbmdTYWxlc21hbihkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgICQoXCIub3V0cHV0XCIpLmFwcGVuZChkZWFsZXJEb2NGcmFnbWVudCk7XG4gICAgICAgIFxuICAgICAgICAkKGRlYWxlckRvY0ZyYWdtZW50KS5hcHBlbmQoZGVhbGVyLm1vc3RQb3B1bGFyTW9kZWwoZGVhbGVySW1wb3J0YW50SW5mbykpO1xuICAgICAgICAkKFwiLm91dHB1dFwiKS5hcHBlbmQoZGVhbGVyRG9jRnJhZ21lbnQpO1xuICAgICAgICBcbiAgICAgICAgJChkZWFsZXJEb2NGcmFnbWVudCkuYXBwZW5kKGRlYWxlci5tb3N0QmFua0xvYW5zQmFuayhkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgICQoXCIub3V0cHV0XCIpLmFwcGVuZChkZWFsZXJEb2NGcmFnbWVudCk7XG4gICAgICAgIFxuICAgICAgICAkKFwiLm91dHB1dFwiKS5wcmVwZW5kKFwiPGhlYWRlcj48aDE+MjAxNyBDQVJERUFMRVIgU1RBVFM8L2gxPjwvaGVhZGVyPlwiKVxuICAgICAgICBcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlckxpc3QiLCJpbXBvcnQgZGVhbGVyTGlzdCBmcm9tIFwiLi9kZWFsZXJMaXN0XCJcblxuZGVhbGVyTGlzdC5kZWFsZXJpbkl0VVAoKTsiXX0=
