// This component will get the data, build the HTML from the data and append it to the DOM.
import dealerData from "./dealerData"
import dealer from "./dealer"


const dealerList = {
  dealerinItUP () {
    dealerData.getAllDealerData()
    .then(dealerImportantInfo => {
        // console.log(dealerImportantInfo)
        let dealerDocFragment = document.createDocumentFragment();
        dealerDocFragment.appendChild(dealer.addProfit(dealerImportantInfo));
        document.querySelector(".output").appendChild(dealerDocFragment);

        let salesDates = [];
        dealerImportantInfo.forEach(info => {
          salesDates.push(info.purchase_date)
        })
        salesDates.sort(function(a, b) {
          // convert date object into number to resolve issue in typescript
          return  +new Date(a.date) - +new Date(b.date);
        })
        // console.log(salesDates)

        


    })
  }
}

export default dealerList