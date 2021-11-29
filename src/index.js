let btn= document.getElementById('search');

btn.onclick = async function getData() {

    let city = document.getElementById('input-field').value;

    const api_key = 'YOUR_API_KEY';

        //API CALL  with axios                   
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
                        
            .then(
                
            async response => {
                
            let data = await response.data

        //if the request can't be processed (city is not found)

            if (response.status !== 200) {
            
                throw new Error(response.status);
            
                } else {
            

        //if the call works and the request is being 
            console.log(data);

            //collecting data from API
            let weather = data.weather[0].main;
            let humidity = data.main.humidity;
            let feels_like = data.main.feels_like;
            let temperature = data.main.temp;
            let maxTemp = data.main.temp_max;
            let minTemp = data.main.temp_min;
            let country = data.sys.country;
            maxTemp = parseInt(maxTemp) - 273.15;
            maxTemp = Math.ceil(maxTemp);
            minTemp = parseInt(minTemp) - 273.15;
            minTemp = Math.floor(minTemp); 
            temperature = parseInt(temperature) - 273;
            feels_like = parseInt(feels_like) -273.15;
            feels_like = Math.ceil(feels_like);

            //data on screen
            document.getElementById('city').textContent = city;
            document.getElementById('country').textContent = country;
            document.getElementById('hum').textContent = humidity;
            document.getElementById('feels-like').textContent = feels_like;
            document.getElementById('weather').textContent = weather;
            document.getElementById('max-temp').textContent = maxTemp;
            document.getElementById('min-temp').textContent = minTemp;

                }})
                

                //In case of errors, shows 
                .catch (error =>
                    alert('Please type a valid city name'));
                
                    

            }
                   
        
        ;



        









