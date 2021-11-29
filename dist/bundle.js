/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let btn= document.getElementById('search');\r\n\r\nbtn.onclick = async function getData() {\r\n\r\n    let city = document.getElementById('input-field').value;\r\n\r\n    const api_key = 'YOUR_API_KEY';\r\n\r\n        //API CALL  with axios                   \r\n            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)\r\n                        \r\n            .then(\r\n                \r\n            async response => {\r\n                \r\n            let data = await response.data\r\n\r\n        //if the request can't be processed (city is not found)\r\n\r\n            if (response.status !== 200) {\r\n            \r\n                throw new Error(response.status);\r\n            \r\n                } else {\r\n            \r\n\r\n        //if the call works and the request is being \r\n            console.log(data);\r\n\r\n            //collecting data from API\r\n            let weather = data.weather[0].main;\r\n            let humidity = data.main.humidity;\r\n            let feels_like = data.main.feels_like;\r\n            let temperature = data.main.temp;\r\n            let maxTemp = data.main.temp_max;\r\n            let minTemp = data.main.temp_min;\r\n            let country = data.sys.country;\r\n            maxTemp = parseInt(maxTemp) - 273.15;\r\n            maxTemp = Math.ceil(maxTemp);\r\n            minTemp = parseInt(minTemp) - 273.15;\r\n            minTemp = Math.floor(minTemp); \r\n            temperature = parseInt(temperature) - 273;\r\n            feels_like = parseInt(feels_like) -273.15;\r\n            feels_like = Math.ceil(feels_like);\r\n\r\n            //data on screen\r\n            document.getElementById('city').textContent = city;\r\n            document.getElementById('country').textContent = country;\r\n            document.getElementById('hum').textContent = humidity;\r\n            document.getElementById('feels-like').textContent = feels_like;\r\n            document.getElementById('weather').textContent = weather;\r\n            document.getElementById('max-temp').textContent = maxTemp;\r\n            document.getElementById('min-temp').textContent = minTemp;\r\n\r\n                }})\r\n                \r\n\r\n                //In case of errors, shows \r\n                .catch (error =>\r\n                    alert('Please type a valid city name'));\r\n                \r\n                    \r\n\r\n            }\r\n                   \r\n        \r\n        ;\r\n\r\n\r\n\r\n        \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-map/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;