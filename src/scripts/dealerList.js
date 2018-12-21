// This component will get the data, build the HTML from the data and append it to the DOM.
import dealerData from "./dealerData"
import dealer from "./dealer"


const dealerList = {
  dealerinItUP () {
    dealerData.getAllDealerData()
    .then(dealerImportantInfo => {
        // console.log(dealerImportantInfo)
        let dealerDocFragment = document.createDocumentFragment();
        dealer.addProfit(dealerImportantInfo);
        dealerDocFragment.appendChild(dealer.addProfit(dealerImportantInfo));
        document.querySelector(".output").appendChild(dealerDocFragment);

        dealerImportantInfo.forEach(info => {
          console.log(info.purchase_date);
        })


    })
  }
}

export default dealerList