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
      console.log(makeDate.getMonth())
    })
    console.log(dateObject)
    let highestMo = Object.keys(dateObject).reduce((a, b) => dateObject[a] > dateObject[b] ? a : b);
    console.log(highestMo)
    let highestMonthContainer = document.createElement("h2");
    highestMonthContainer.setAttribute("class", "profit-container");
    highestMonthContainer.textContent = `Highest Month of Sales = ${highestMo}`;
    return highestMonthContainer;
  }

}

export default dealer