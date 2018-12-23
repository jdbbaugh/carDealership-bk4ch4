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

        dealerDocFragment.appendChild(dealer.mostSellsMonth(dealerImportantInfo));
        document.querySelector(".output").appendChild(dealerDocFragment);

        dealerDocFragment.appendChild(dealer.mostCarsSoldByMan(dealerImportantInfo));
        document.querySelector(".output").appendChild(dealerDocFragment);

        dealerDocFragment.appendChild(dealer.mostProfitingSalesman(dealerImportantInfo));
        document.querySelector(".output").appendChild(dealerDocFragment);


    })
  }
}

export default dealerList