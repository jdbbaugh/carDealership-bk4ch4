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
    finalProfitList.reverse();
    console.log(finalProfitList);
    let mostSoldVehicleModel = document.createElement("h2");
    mostSoldVehicleModel.setAttribute("class", "most-profiting-salesperson");
    mostSoldVehicleModel.textContent = `The most sold model of vehicle was = ${finalProfitList[0][0]} with ${finalProfitList[0][1]} vehicles sold.`;
    return mostSoldVehicleModel;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RlYWxlci5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyRGF0YS5qcyIsIi4uL3NjcmlwdHMvZGVhbGVyTGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7OztBQURBO0FBR0EsTUFBTSxNQUFNLEdBQUc7QUFDYixFQUFBLFNBQVMsQ0FBQyxVQUFELEVBQWE7QUFDcEIsUUFBSSxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxVQUFNLFdBQVcsR0FBRyxJQUFJLElBQUosQ0FBUyxZQUFULENBQXBCO0FBQ0EsVUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFsQixDQUhvQixDQUlwQjs7QUFFQSxJQUFBLFVBQVUsQ0FBQyxPQUFYLENBQW1CLElBQUksSUFBSTtBQUN6QixVQUFJLE9BQU8sR0FBRyxJQUFJLElBQUosQ0FBVSxJQUFJLENBQUMsYUFBZixDQUFkOztBQUNBLFVBQUksT0FBTyxJQUFJLFdBQVgsSUFBMEIsT0FBTyxJQUFJLFNBQXpDLEVBQW9EO0FBQ3BELFFBQUEsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFsQixDQURvRCxDQUVwRDtBQUNEOztBQUFBO0FBQ0EsS0FORCxFQU5vQixDQWFwQjs7QUFDQSxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDLGtCQUF0QztBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLEdBQStCLHVCQUFzQixTQUFVLEVBQS9EO0FBQ0EsV0FBTyxlQUFQO0FBQ0QsR0FuQlk7O0FBb0JiLEVBQUEsY0FBYyxDQUFFLFlBQUYsRUFBZ0I7QUFDNUIsUUFBSSxVQUFVLEdBQUcsRUFBakI7QUFDQSxJQUFBLFlBQVksQ0FBQyxPQUFiLENBQXFCLElB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QVAsQ0FBd0IsbUJBQXhCLENBQTlCO0FBQ0EsTUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxXQUFsQyxDQUE4QyxpQkFBOUM7QUFDSCxLQWxCRDtBQW1CRDs7QUFyQmdCLENBQW5CO2VBd0JlLFU7Ozs7OztBQzdCZjs7OztBQUVBLG9CQUFXLFlBQVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL0dpdmVuIGEgc2luZ2xlIG9iamVjdCwgdGhpcyBjb21wb25lbnQgYnVpbGRzIG91dCB0aGUgSFRNTCBhbmQgcmV0dXJucyBpdFxuaW1wb3J0IGRlYWxlckxpc3QgZnJvbSBcIi4vZGVhbGVyTGlzdFwiXG5cbmNvbnN0IGRlYWxlciA9IHtcbiAgYWRkUHJvZml0KGZyb21EZWFsZXIpIHtcbiAgICBsZXQgYWRkUHJvZml0ID0gMDtcbiAgICBjb25zdCBzdGFydE9mWWVhciA9IG5ldyBEYXRlKFwiMjAxNy0wMS0wMVwiKTtcbiAgICBjb25zdCBlbmRPZlllYXIgPSBuZXcgRGF0ZShcIjIwMTctMTItMzFcIik7XG4gICAgLy8gY29uc29sZS5sb2coc3RhcnRPZlllYXIpXG5cbiAgICBmcm9tRGVhbGVyLmZvckVhY2goaW5mbyA9PiB7XG4gICAgICBsZXQgZGF0ZUFkZCA9IG5ldyBEYXRlIChpbmZvLnB1cmNoYXNlX2RhdGUpXG4gICAgICBpZiAoZGF0ZUFkZCA+PSBzdGFydE9mWWVhciAmJiBkYXRlQWRkIDw9IGVuZE9mWWVhcikge1xuICAgICAgYWRkUHJvZml0ICs9IGluZm8uZ3Jvc3NfcHJvZml0XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmZvLnB1cmNoYXNlX2RhdGUpO1xuICAgIH07XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coYWRkUHJvZml0KTtcbiAgICBsZXQgcHJvZml0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHByb2ZpdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2ZpdC1jb250YWluZXJcIik7XG4gICAgcHJvZml0Q29udGFpbmVyLnRleHRDb250ZW50ID0gYDIwMTcgUHJvZml0IFRvdGFsID0gJHthZGRQcm9maXR9YDtcbiAgICByZXR1cm4gcHJvZml0Q29udGFpbmVyO1xuICB9LFxuICBtb3N0U2VsbHNNb250aCAoZGVhbGVyT2JqZWN0KSB7XG4gICAgbGV0IHNhbGVzRGF0ZXMgPSBbXTtcbiAgICBkZWFsZXJPYmplY3QuZm9yRWFjaChpbmZvID0+IHtcbiAgICAgIHNhbGVzRGF0ZXMucHVzaChpbmZvLnB1cmNoYXNlX2RhdGUpXG4gICAgfSlcbiAgICBzYWxlc0RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiAgK25ldyBEYXRlKGEpIC0gK25ldyBEYXRlKGIpO1xuICAgIH0pXG4gICAgY29uc3QgZGF0ZU9iamVjdCA9IHtcbiAgICAgIGphbjogMCxcbiAgICAgIGZlYjogMCxcbiAgICAgIG1hcjogMCxcbiAgICAgIGFwcjogMCxcbiAgICAgIG1heTogMCxcbiAgICAgIGp1bjogMCxcbiAgICAgIGp1bDogMCxcbiAgICAgIGF1ZzogMCxcbiAgICAgIHNlcHQ6IDAsXG4gICAgICBvY3Q6IDAsXG4gICAgICBub3Y6IDAsXG4gICAgICBkZWM6IDBcbiAgICB9XG4gICAgc2FsZXNEYXRlcy5mb3JFYWNoKGRhdGUgPT4ge1xuICAgICAgY29uc3QgbWFrZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgIHN3aXRjaCAobWFrZURhdGUuZ2V0TW9udGgoKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgIGRhdGVPYmplY3QuamFuKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgZGF0ZU9iamVjdC5mZWIrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBkYXRlT2JqZWN0Lm1hcisrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgIGRhdGVPYmplY3QuYXByKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgZGF0ZU9iamVjdC5tYXkrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICBkYXRlT2JqZWN0Lmp1bisrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgIGRhdGVPYmplY3QuanVsKytcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgZGF0ZU9iamVjdC5hdWcrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICBkYXRlT2JqZWN0LnNlcHQrK1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICBkYXRlT2JqZWN0Lm9jdCsrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICBkYXRlT2JqZWN0Lm5vdisrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICBkYXRlT2JqZWN0LmRlYysrXG4gICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhtYWtlRGF0ZS5nZXRNb250aCgpKVxuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2coZGF0ZU9iamVjdClcbiAgICBsZXQgaGlnaGVzdE1vID0gT2JqZWN0LmtleXMoZGF0ZU9iamVjdCkucmVkdWNlKChhLCBiKSA9PiBkYXRlT2JqZWN0W2FdID4gZGF0ZU9iamVjdFtiXSA/IGEgOiBiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhoaWdoZXN0TW8pXG4gICAgbGV0IGhpZ2hlc3RNb250aENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoaWdoZXN0TW9udGhDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiaWctbW9udGgtY29udGFpbmVyXCIpO1xuICAgIGhpZ2hlc3RNb250aENvbnRhaW5lci50ZXh0Q29udGVudCA9IGBIaWdoZXN0IE1vbnRoIG9mIFNhbGVzID0gJHtoaWdoZXN0TW99IHdpdGggJHtkYXRlT2JqZWN0Lmp1bn0gc2FsZXNgO1xuICAgIHJldHVybiBoaWdoZXN0TW9udGhDb250YWluZXI7XG4gIH0sXG4gIG1vc3RDYXJzU29sZEJ5TWFuIChtYW5TYWxlT2JqZWN0KSB7XG4gICAgbGV0IHNhbGVzUGVvcGxlID0gW11cbiAgICBtYW5TYWxlT2JqZWN0LmZvckVhY2goYWdlbnQgPT4ge1xuICAgIHNhbGVzUGVvcGxlLnB1c2goYCR7YWdlbnQuc2FsZXNfYWdlbnQuZmlyc3RfbmFtZX0gJHthZ2VudC5zYWxlc19hZ2VudC5sYXN0X25hbWV9YClcbiAgfSlcbiAgLy8gY29uc29sZS5sb2coc2FsZXNQZW9wbGUuc29ydCgpKTtcblxuICBjb25zdCBuYW1lU29ydCA9IHNhbGVzUGVvcGxlLnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG4gICAgaWYoIW9ialtpdGVtXSkge1xuICAgICAgb2JqW2l0ZW1dID0gMDtcbiAgICB9XG4gICAgb2JqW2l0ZW1dKys7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuICAvLyBjb25zb2xlLmxvZyhuYW1lU29ydCk7XG4gIGNvbnN0IGJpZ2dlc3RTYWxlc21hbiA9IE9iamVjdC5rZXlzKG5hbWVTb3J0KS5yZWR1Y2UoKGEsIGIpID0+IG5hbWVTb3J0W2FdID4gbmFtZVNvcnRbYl0gPyBhIDogYik7XG4gIC8vIGNvbnNvbGUubG9nKGJpZ2dlc3RTYWxlc21hbilcbiAgbGV0IG1vc3RDYXJzU29sZGJ5VGhpc1NhbGVzbWFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBtb3N0Q2Fyc1NvbGRieVRoaXNTYWxlc21hbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vc3Qtc2FsZXMtcGVyc29uXCIpO1xuICBtb3N0Q2Fyc1NvbGRieVRoaXNTYWxlc21hbi50ZXh0Q29udGVudCA9IGBUaGUgbW9zdCBjYXJzIHdlcmUgc29sZCBieSA9ICR7YmlnZ2VzdFNhbGVzbWFufWA7XG4gIHJldHVybiBtb3N0Q2Fyc1NvbGRieVRoaXNTYWxlc21hbjtcbiAgfSxcbiAgbW9zdFByb2ZpdGluZ1NhbGVzbWFuIChzYWxlc0RpZ2l0cykge1xuICAgIHNhbGVzRGlnaXRzLmZvckVhY2goIHNlbGwgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coc2VsbC5zYWxlc19hZ2VudC5maXJzdF9uYW1lLCBzZWxsLmdyb3NzX3Byb2ZpdClcbiAgICB9KVxuICBjb25zdCBzaG93U2FsZXNtYW5zUHJvZml0ID0gc2FsZXNEaWdpdHMucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtKVxuICAgIGlmKCFvYmpbaXRlbS5zYWxlc19hZ2VudC5maXJzdF9uYW1lXSkge1xuICAgICAgb2JqW2l0ZW0uc2FsZXNfYWdlbnQuZmlyc3RfbmFtZV0gPSAwO1xuICAgIH1cbiAgICBvYmpbaXRlbS5zYWxlc19hZ2VudC5maXJzdF9uYW1lXSArPSBpdGVtLmdyb3NzX3Byb2ZpdDtcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG4gIC8vIGNvbnNvbGUubG9nKHNob3dTYWxlc21hbnNQcm9maXQpXG5cbiAgbGV0IHNvcnRQcm9maXRzID0gW107XG4gIGZvciAodmFyIHNhbGVzTWFuIGluIHNob3dTYWxlc21hbnNQcm9maXQpIHtcbiAgICAgIHNvcnRQcm9maXRzLnB1c2goW3NhbGVzTWFuLCBzaG93U2FsZXNtYW5zUHJvZml0W3NhbGVzTWFuXV0pO1xuICB9XG5cbiAgbGV0IGZpbmFsUHJvZml0TGlzdCA9IHNvcnRQcm9maXRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhWzFdIC0gYlsxXTtcbiAgfSk7XG4gIFxuICBmaW5hbFByb2ZpdExpc3QucmV2ZXJzZSgpWzBdXG5cbiAgbGV0IHByb2ZpdE1WUGlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9maXRNVlBpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vc3QtcHJvZml0aW5nLXNhbGVzcGVyc29uXCIpO1xuICBwcm9maXRNVlBpcy50ZXh0Q29udGVudCA9IGBUaGUgbW9zdCBwcm9maXQgaW4gc2FsZXMgd2FzIGJ5ID0gJHtmaW5hbFByb2ZpdExpc3RbMF1bMF19IHdpdGggJCR7ZmluYWxQcm9maXRMaXN0WzBdWzFdfSBpbiBzYWxlcy5gO1xuICByZXR1cm4gcHJvZml0TVZQaXM7XG4gIH0sXG4gIG1vc3RQb3B1bGFyTW9kZWwgKG9iamVjdHNGb3JNb2RlbHMpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhvYmplY3RzRm9yTW9kZWxzKTtcbiAgICBvYmplY3RzRm9yTW9kZWxzLmZvckVhY2goY2FyU2VhcmNoID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNhclNlYXJjaC52ZWhpY2xlLm1vZGVsKVxuICAgIH0pXG4gICAgY29uc3QgbW9zdFNvbGRNb2RlbCA9IG9iamVjdHNGb3JNb2RlbHMucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0udmVoaWNsZS5tb2RlbClcbiAgICAgIGlmKCFvYmpbaXRlbS52ZWhpY2xlLm1vZGVsXSkge1xuICAgICAgICBvYmpbaXRlbS52ZWhpY2xlLm1vZGVsXSA9IDA7XG4gICAgICB9XG4gICAgICBvYmpbaXRlbS52ZWhpY2xlLm1vZGVsXSsrO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gICAgLy8gY29uc29sZS5sb2cobW9zdFNvbGRNb2RlbClcblxuICAgIGxldCBzb3J0Q2FyTW9kZWxzID0gW107XG4gICAgZm9yICh2YXIgbW9kZWwgaW4gbW9zdFNvbGRNb2RlbCkge1xuICAgICAgICBzb3J0Q2FyTW9kZWxzLnB1c2goW21vZGVsLCBtb3N0U29sZE1vZGVsW21vZGVsXV0pO1xuICAgIH1cbiAgXG4gICAgbGV0IGZpbmFsUHJvZml0TGlzdCA9IHNvcnRDYXJNb2RlbHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gYVsxXSAtIGJbMV07XG4gICAgfSk7XG4gICAgZmluYWxQcm9maXRMaXN0LnJldmVyc2UoKTtcbiAgICBjb25zb2xlLmxvZyhmaW5hbFByb2ZpdExpc3QpO1xuXG4gICAgbGV0IG1vc3RTb2xkVmVoaWNsZU1vZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1vc3RTb2xkVmVoaWNsZU1vZGVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9zdC1wcm9maXRpbmctc2FsZXNwZXJzb25cIik7XG4gICAgbW9zdFNvbGRWZWhpY2xlTW9kZWwudGV4dENvbnRlbnQgPSBgVGhlIG1vc3Qgc29sZCBtb2RlbCBvZiB2ZWhpY2xlIHdhcyA9ICR7ZmluYWxQcm9maXRMaXN0WzBdWzBdfSB3aXRoICR7ZmluYWxQcm9maXRMaXN0WzBdWzFdfSB2ZWhpY2xlcyBzb2xkLmA7XG4gICAgcmV0dXJuIG1vc3RTb2xkVmVoaWNsZU1vZGVsO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlciIsIlxuY29uc3QgZGVhbGVyRGF0YSA9IHtcbiAgZ2V0QWxsRGVhbGVyRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY2FyRGVhbGVySW5mb1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVhbGVyRGF0YSIsIi8vIFRoaXMgY29tcG9uZW50IHdpbGwgZ2V0IHRoZSBkYXRhLCBidWlsZCB0aGUgSFRNTCBmcm9tIHRoZSBkYXRhIGFuZCBhcHBlbmQgaXQgdG8gdGhlIERPTS5cbmltcG9ydCBkZWFsZXJEYXRhIGZyb20gXCIuL2RlYWxlckRhdGFcIlxuaW1wb3J0IGRlYWxlciBmcm9tIFwiLi9kZWFsZXJcIlxuXG5cbmNvbnN0IGRlYWxlckxpc3QgPSB7XG4gIGRlYWxlcmluSXRVUCAoKSB7XG4gICAgZGVhbGVyRGF0YS5nZXRBbGxEZWFsZXJEYXRhKClcbiAgICAudGhlbihkZWFsZXJJbXBvcnRhbnRJbmZvID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGVhbGVySW1wb3J0YW50SW5mbylcbiAgICAgICAgbGV0IGRlYWxlckRvY0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBkZWFsZXJEb2NGcmFnbWVudC5hcHBlbmRDaGlsZChkZWFsZXIuYWRkUHJvZml0KGRlYWxlckltcG9ydGFudEluZm8pKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIikuYXBwZW5kQ2hpbGQoZGVhbGVyRG9jRnJhZ21lbnQpO1xuXG4gICAgICAgIGRlYWxlckRvY0ZyYWdtZW50LmFwcGVuZENoaWxkKGRlYWxlci5tb3N0U2VsbHNNb250aChkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmFwcGVuZENoaWxkKGRlYWxlckRvY0ZyYWdtZW50KTtcblxuICAgICAgICBkZWFsZXJEb2NGcmFnbWVudC5hcHBlbmRDaGlsZChkZWFsZXIubW9zdENhcnNTb2xkQnlNYW4oZGVhbGVySW1wb3J0YW50SW5mbykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKS5hcHBlbmRDaGlsZChkZWFsZXJEb2NGcmFnbWVudCk7XG5cbiAgICAgICAgZGVhbGVyRG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGVhbGVyLm1vc3RQcm9maXRpbmdTYWxlc21hbihkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmFwcGVuZENoaWxkKGRlYWxlckRvY0ZyYWdtZW50KTtcblxuICAgICAgICBkZWFsZXJEb2NGcmFnbWVudC5hcHBlbmRDaGlsZChkZWFsZXIubW9zdFBvcHVsYXJNb2RlbChkZWFsZXJJbXBvcnRhbnRJbmZvKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmFwcGVuZENoaWxkKGRlYWxlckRvY0ZyYWdtZW50KTtcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYWxlckxpc3QiLCJpbXBvcnQgZGVhbGVyTGlzdCBmcm9tIFwiLi9kZWFsZXJMaXN0XCJcblxuZGVhbGVyTGlzdC5kZWFsZXJpbkl0VVAoKTsiXX0=
