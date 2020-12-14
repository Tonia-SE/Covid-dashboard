export const total = document.createElement('p')

export const table = document.createElement('table')
// api url 
const api_url = "https://api.covid19api.com/summary"; 

// Defining async function 
async function getapi(url) { 
    
    const response = await fetch(url);
    var data = await response.json();
    total.textContent = data.Global.TotalConfirmed;

} 
// Calling that async function 
getapi(api_url);