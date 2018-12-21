// This component will get the data, build the HTML from the data and append it to the DOM.
import dealerData from "./dealerData"
import dealer from "./dealer"


const dealerList = {
  dealerinItUP () {
    dealerData.getAllDealerData()
    .then(dealerImportantInfo => {
        // console.log(dealerImportantInfo)
      dealerImportantInfo.forEach(madDataFlow => {
        // console.log(madDataFlow.gross_profit)
        dealer.showProfit(madDataFlow);
      })
    })
  }
}

export default dealerList