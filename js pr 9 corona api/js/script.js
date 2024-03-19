const onState = () => {

    fetch('https://data.covid19india.org/data.json').then((res) => {

        return res.json();
    }).then((data) => {

        console.log(data);

        const stateData = data.statewise;
        
        stateData.forEach(states => {
            const covid = document.createElement('tr');

         covid.innerHTML = `<td>${states.state}</td>
                            <td>${states.active}</td>
                            <td>${states.lastupdatedtime}</td>
                            <td>${states.confirmed}</td>
                            <td>${states.deaths}</td>`;

            theState.appendChild(covid);
        });
    }).catch((err) => {

        console.log("Err", err);
    })

}

onState();
