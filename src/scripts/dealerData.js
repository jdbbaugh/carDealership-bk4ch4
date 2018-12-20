
const dealerData = {
  getAllDealerData() {
    return fetch("http://localhost:8088/carDealerInfo")
    .then(response => response.json())
  },
}

export default dealerData