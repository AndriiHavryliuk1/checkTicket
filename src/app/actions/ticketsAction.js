export function findTicket(tripInfo) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    let bodyText = "from=2208001&to=2218000&date=2018-07-31&time=00:00";
    return dispatch => {
        fetch("https://booking.uz.gov.ua/train_search/", {
            method: "POST",
            body: bodyText,
            headers: myHeaders,
            mode: 'no-cors'
        })
        .then((result) => {
            console.log(result)
            return dispatch({
                searchID: tripInfo.fromNumber + tripInfo.toNumber,
                ticketInfo: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
              console.log("Error: ", error)
          }
        )
/*
        setTimeout(() => {
            return dispatch({
                type: "SET_NAME",
                payload: name
            });
        }, 2000)
        */
    }
}