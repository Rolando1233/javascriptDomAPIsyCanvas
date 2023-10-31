const UrlBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKey="128c6513979e1f31bb2cfe7c9b8566d2"

const inputCity = document.querySelector('#city');
const btnBuscar = document.querySelector('#btnBuscar');

const fetchApi = url => fetch(url).then(response => response.json());

async function getclima(lat,lon){
    const url=`${UrlBase}lat=${lat}&lon=${lon}&appid=${ApiKey}`;
    console.log(url);
    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('#left h2').innerHTML = clima.name;
    document.querySelector('#left h3').innerHTML = clima.main.temp;

    const temperaturaKelvin = clima.main.temp;
    const temperaturaCelsius = temperaturaKelvin - 273.15;
    document.querySelector('h3').innerHTML = temperaturaCelsius.toFixed(2)+"°C";

    if (temperaturaCelsius < 10) {
        document.body.style.backgroundColor = "blue"; // Color azul para temperaturas bajas
    } else if (temperaturaCelsius >= 10 && temperaturaCelsius < 25) {
        document.body.style.backgroundColor = "orange"; // Color naranja para temperaturas moderadas
    } else {
        document.body.style.backgroundColor = "red"; // Color rojo para temperaturas altas
    }

};

async function getClimaByCity(city){
    const url =`${ UrlBase }q=${city}&appid=${ ApiKey }`;
    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('#left h2').innerHTML = clima.name;
    document.querySelector('#left h3').innerHTML = clima.main.temp;

    const temperaturaKelvin = clima.main.temp;
    const temperaturaCelsius = temperaturaKelvin - 273.15;
    document.querySelector('h3').innerHTML = temperaturaCelsius.toFixed(2)+"°C";

    if (temperaturaCelsius < 10) {
        document.body.style.backgroundColor = "blue"; // Color azul para temperaturas bajas
    } else if (temperaturaCelsius >= 10 && temperaturaCelsius < 25) {
        document.body.style.backgroundColor = "orange"; // Color naranja para temperaturas moderadas
    } else {
        document.body.style.backgroundColor = "red"; // Color rojo para temperaturas altas
    }

}

navigator.geolocation.getCurrentPosition(
    position=>{
        const lat= position.coords.latitude;
        const lon= position.coords.longitude;
        getclima(lat,lon);
    }
);

btnBuscar.addEventListener('click', () =>{
    const city = inputCity.value;
    if(city){
        getClimaByCity(city);
    }
});