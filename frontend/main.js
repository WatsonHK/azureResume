window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://watsongetresumecounter.azurewebsites.net/api/GetResumeCounter?code=hvTojuMP9Dsl21Cyl7Wjuq4MZXYFDGU9we_XGbYrbqUGAzFusaEqbw==';
const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 7;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response=> {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });

        return count;
}