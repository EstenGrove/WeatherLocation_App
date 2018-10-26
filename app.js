let input = document.querySelector('.search');

let link = 'https://api.openweathermap.org/data/2.5/forecast?zip=';

let apiKey = 'APPID=010ae88646bcfcdd48ef3f00793d1858';

let format = ',us&';

const btn = document.querySelector('.btn');

btn.addEventListener('click', loadData);

function loadData(e) {
    
     

    let search = input.value;

    let url = link + search + format + apiKey;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);


    xhr.onload = function () {
        if (this.status === 200) {

            const weather = JSON.parse(this.responseText);
                console.log(weather);

            
            // Card 1
            const text1 = document.querySelector('.text-1');
            const subTxt1 = document.querySelector('.sub_text-1');
            const li1 = document.querySelector('.listItem-1');
            const li2 = document.querySelector('.listItem-2');
            const li3 = document.querySelector('.listItem-3');
            const li4 = document.querySelector('.listItem-4');
            const dateEl = document.querySelector('.date-1');
            const icon1 = document.querySelector('.icon-1');
            
            const kelvin = weather.list[0].main.temp;
            const kelvinMin = weather.list[0].main.temp_min;
            const kelvinMax = weather.list[0].main.temp_max;
            
            const fMin = Math.round((kelvinMin - 273.15) * 9/5 + 32);
            const fMax = Math.round((kelvinMax - 273.15) * 9/5 + 32);
            
            const rawDate = weather.list[0].dt_txt;
                console.log(rawDate);
            const date = rawDate.split(' ')[0];
                console.log(date);
            
            const humidity = weather.list[0].main.humidity;
//                console.log('Humidity: ' + humidity);
            
            const wType = weather.list[0].weather[0].main;
//                console.log('Condition Type: ' + wType);
            const wTypeDesc = weather.list[0].weather[0].description;
//                console.log('Condition Desc: ' + wTypeDesc);
            
            const wind = weather.list[0].wind.speed;
//                console.log('Wind: ' + wind + 'mph');

            const fahrenheit = (kelvin - 273.15) * 9/5 + 32;

            text1.innerHTML = weather.city.name;
            subTxt1.innerHTML = Math.round(fahrenheit) + '°' + ' F';
            dateEl.innerHTML = date;
            li1.innerHTML = 'Max Temp: ' + fMax + '°F, Min Temp: ' + fMin + '°F';
            li2.innerHTML = 'Precipitation: ' + wType + ', ' + wTypeDesc;
            li3.innerHTML = 'Humidity: ' + humidity + '%';
            li4.innerHTML = 'Wind: ' + wind + 'mph';
            
            
            // Card 2
            const text2 = document.querySelector('.text-2');
            const subTxt2 = document.querySelector('.sub_text-2');
            const li21 = document.querySelector('.listItem-21');
            const li22 = document.querySelector('.listItem-22');
            const li23 = document.querySelector('.listItem-23');
            const li24 = document.querySelector('.listItem-24');
            const dateEl2 = document.querySelector('.date-21');
            const icon2 = document.querySelector('.icon-2');            
            
            const kelvin2 = weather.list[8].main.temp;
            const kelvinMin2 = weather.list[8].main.temp_min;
            const kelvinMax2 = weather.list[8].main.temp_max;
            
            const fMin2 = Math.round((kelvinMin2 - 273.15) * 9/5 + 32);
            const fMax2 = Math.round((kelvinMax2 - 273.15) * 9/5 + 32);
            
            const rawDate2 = weather.list[8].dt_txt;
            const date2 = rawDate2.split(' ')[0];
            
            const humidity2 = weather.list[8].main.humidity;
            
            const wType2 = weather.list[8].weather[0].main;
            const wTypeDesc2 = weather.list[8].weather[0].description;
            
            const wind2 = weather.list[8].wind.speed;

            const fahrenheit2 = (kelvin2 - 273.15) * 9/5 + 32;

            text2.innerHTML = weather.city.name;
            subTxt2.innerHTML = Math.round(fahrenheit2) + '°' + ' F';
            dateEl2.innerHTML = date2;
            li21.innerHTML = 'Max Temp: ' + fMax2 + '°F, Min Temp: ' + fMin2 + '°F';
            li22.innerHTML = 'Precipitation: ' + wType2 + ', ' + wTypeDesc2;
            li23.innerHTML = 'Humidity: ' + humidity2 + '%';
            li24.innerHTML = 'Wind: ' + wind2 + 'mph';
            
            
            // Card 3
            const text3 = document.querySelector('.text-3');
            const subTxt3 = document.querySelector('.sub_text-3');
            const li31 = document.querySelector('.listItem-31');
            const li32 = document.querySelector('.listItem-32');
            const li33 = document.querySelector('.listItem-33');
            const li34 = document.querySelector('.listItem-34');
            const dateEl3 = document.querySelector('.date-31');
            const icon3 = document.querySelector('.icon-3');
            
            const kelvin3 = weather.list[16].main.temp;
            const kelvinMin3 = weather.list[16].main.temp_min;
            const kelvinMax3 = weather.list[16].main.temp_max;
            
            const fMin3 = Math.round((kelvinMin3 - 273.15) * 9/5 + 32);
            const fMax3 = Math.round((kelvinMax3 - 273.15) * 9/5 + 32);
            
            const rawDate3 = weather.list[16].dt_txt;
            const date3 = rawDate3.split(' ')[0];
            
            const humidity3 = weather.list[16].main.humidity;
            
            const wType3 = weather.list[16].weather[0].main;
            const wTypeDesc3 = weather.list[16].weather[0].description;
            
            const wind3 = weather.list[16].wind.speed;

            const fahrenheit3 = (kelvin3 - 273.15) * 9/5 + 32;

            text3.innerHTML = weather.city.name;
            subTxt3.innerHTML = Math.round(fahrenheit3) + '°' + ' F';
            dateEl3.innerHTML = date3;
            li31.innerHTML = 'Max Temp: ' + fMax3 + '°F, Min Temp: ' + fMin3 + '°F';
            li32.innerHTML = 'Precipitation: ' + wType3 + ', ' + wTypeDesc3;
            li33.innerHTML = 'Humidity: ' + humidity3 + '%';
            li34.innerHTML = 'Wind: ' + wind3 + 'mph';

        }
    }
    const card_container = document.querySelector('.card_container');
        card_container.style.opacity = '1';

    xhr.send();
    input.value = '';

}
