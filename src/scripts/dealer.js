//Given a single object, this component builds out the HTML and returns it
import dealerList from "./dealerList"

const dealer = {
  addProfit(fromDealer) {
    let addProfit = 0;
    const startOfYear = new Date("2017-01-01");
    const endOfYear = new Date("2017-12-31");
    // console.log(startOfYear)

    fromDealer.forEach(info => {
      let dateAdd = new Date (info.purchase_date)
      if (dateAdd >= startOfYear && dateAdd <= endOfYear) {
      addProfit += info.gross_profit
      // console.log(info.purchase_date);
    };
    });
    // console.log(addProfit);
    let profitContainer = document.createElement("h2");
    profitContainer.setAttribute("class", "profit-container");
    profitContainer.textContent = `2017 Profit Total = ${addProfit}`;
    return profitContainer;
  },
  mostSellsMonth (dealerObject) {
    let salesDates = [];
    dealerObject.forEach(info => {
      salesDates.push(info.purchase_date)
    })
    salesDates.sort((a, b) => {
      return  +new Date(a) - +new Date(b);
    })
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
    }
    salesDates.forEach(date => {
      const makeDate = new Date(date);
      switch (makeDate.getMonth()) {
        case 0:
        dateObject.jan++
        break;
        case 1:
        dateObject.feb++
        break;
        case 2:
        dateObject.mar++
        break;
        case 3:
        dateObject.apr++
        break;
        case 4:
        dateObject.may++
        break;
        case 5:
        dateObject.jun++
        break;
        case 6:
        dateObject.jul++
        break;
        case 7:
        dateObject.aug++
        break;
        case 8:
        dateObject.sept++
        break;
        case 9:
        dateObject.oct++
        break;
        case 10:
        dateObject.nov++
        break;
        case 11:
        dateObject.dec++
        break;
        }
      // console.log(makeDate.getMonth())
    })
    // console.log(dateObject)
    let highestMo = Object.keys(dateObject).reduce((a, b) => dateObject[a] > dateObject[b] ? a : b);
    // console.log(highestMo)
    let highestMonthContainer = document.createElement("h2");
    highestMonthContainer.setAttribute("class", "big-month-container");
    highestMonthContainer.textContent = `Highest Month of Sales = ${highestMo} with ${dateObject.jun} sales`;
    return highestMonthContainer;
  },
  mostCarsSoldByMan (manSaleObject) {
    let salesPeople = []
    manSaleObject.forEach(agent => {
    salesPeople.push(`${agent.sales_agent.first_name} ${agent.sales_agent.last_name}`)
  })
  // console.log(salesPeople.sort());

  const nameSort = salesPeople.reduce((obj, item) => {
    if(!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
  // console.log(nameSort);
  const biggestSalesman = Object.keys(nameSort).reduce((a, b) => nameSort[a] > nameSort[b] ? a : b);
  // console.log(biggestSalesman)
  let mostCarsSoldbyThisSalesman = document.createElement("h2");
  mostCarsSoldbyThisSalesman.setAttribute("class", "most-sales-person");
  mostCarsSoldbyThisSalesman.textContent = `The most cars were sold by = ${biggestSalesman}`;
  return mostCarsSoldbyThisSalesman;
  },
  mostProfitingSalesman (salesDigits) {
    salesDigits.forEach( sell => {
      // console.log(sell.sales_agent.first_name, sell.gross_profit)
    })
  const showSalesmansProfit = salesDigits.reduce((obj, item) => {
    // console.log(item)
    if(!obj[item.sales_agent.first_name]) {
      obj[item.sales_agent.first_name] = 0;
    }
    obj[item.sales_agent.first_name] += item.gross_profit;
    return obj;
  }, {});
  // console.log(showSalesmansProfit)

  let sortProfits = [];
  for (var salesMan in showSalesmansProfit) {
      sortProfits.push([salesMan, showSalesmansProfit[salesMan]]);
  }

  let finalProfitList = sortProfits.sort((a, b) => {
      return a[1] - b[1];
  });
  
  finalProfitList.reverse()[0]

  let profitMVPis = document.createElement("h2");
  profitMVPis.setAttribute("class", "most-profiting-salesperson");
  profitMVPis.textContent = `The most profit in sales was by = ${finalProfitList[0][0]} with $${finalProfitList[0][1]} in sales.`;
  return profitMVPis;
  },
  mostPopularModel (objectsForModels) {
    // console.log(objectsForModels);
    objectsForModels.forEach(carSearch => {
      // console.log(carSearch.vehicle.model)
    })
    const mostSoldModel = objectsForModels.reduce((obj, item) => {
      // console.log(item.vehicle.model)
      if(!obj[item.vehicle.model]) {
        obj[item.vehicle.model] = 0;
      }
      obj[item.vehicle.model]++;
      return obj;
    }, {});
    // console.log(mostSoldModel)

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

export default dealer