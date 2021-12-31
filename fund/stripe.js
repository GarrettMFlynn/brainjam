


const contributeToFund = (userData) => {

    userData.href = location.href
    fetch(`${SERVER_URI}/stripe/checkout`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(userData)
    }).then(async res => {
        let response = await res.json()
        if (response.error){
            console.error(response.error)
        } else window.location = response.url
    }).catch(e => {
        console.error(e)
    })

}