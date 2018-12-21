//Given a single object, this component builds out the HTML and returns it
import dealerList from "./dealerList"

const dealer = {
  addProfit(fromDealer) {
    // const profitSum = fromDealer.gross_profit.reduce((total, amount) => {total +amount});
    let addProfit = 0
    fromDealer.forEach(info => {
      addProfit += info.gross_profit
    })
    // console.log(addProfit);
    let profitContainer = document.createElement("h2");
    profitContainer.setAttribute("class", "profit-container");
    profitContainer.textContent = `Profit Total = ${addProfit}`;
    return profitContainer;
  },
  mostSellsMonth () {
    
  }

}

export default dealer