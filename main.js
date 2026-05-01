const input = document.querySelector("input")
const addbtn = document.querySelector("#btn")
const output = document.querySelector(".result")



addbtn.addEventListener("click",weather)
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") weather()
})

async function weather() {
    
    const apiCall = await fetch(`https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=$${input.value}&aqi=no;`)
    const data = await apiCall.json()
    output.innerHTML=""
    output.innerHTML += `
    <div><b>
    city location :
    ${data.location.name}
    </b>
    </div>
    <div>
    <b>
    Temparature :
    ${data.current.temp_c}
    </b>
    </div>
    <div>
    <b>
    Weather :
    ${data.current.condition.text}
    </b>
    </div>`
    
    
    
    console.log(data)
    console.log(data.location.name)
    console.log(data.current.temp_c)
    console.log(data.current.condition.text)
    input.value =""
    
    
}
