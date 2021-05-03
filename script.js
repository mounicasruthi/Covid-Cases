const container = document.querySelector(".container");

let array=[];

const url = "https://api.covid19api.com/live/country/india/status/confirmed/date/2021-05-02T13:13:30Z";

fetch(url)
.then((data) => {
    return data.text();
})
.then((result) => {
array = JSON.parse(result);

array.forEach((ele) => {
    const card = document.createElement("div");
    card.classList.add("card");
   card.innerHTML = `
   <div class="container1">
   <div class="hstate">State</div>
   <div class="state">${ele.Province}</div>     
</div>
<div class="container1">  
   <div class="hconfirmed">Confirmed</div>
   <div class="confirmed">${ele.Confirmed}</div>
</div> 
   <div class="container1">
   <div class="hdeaths">Deaths</div>
   <div class="deaths">${ele.Deaths}</div>
</div>
<div class="container1">
   <div class="hrecovered">Recovered</div>
   <div class="recovered">${ele.Recovered}</div>
</div>
<div class="container1">
   <div class="hactive">Active</div>
   <div class="active">${ele.Active}</div>

</div>`

    container.appendChild(card);
});
});

