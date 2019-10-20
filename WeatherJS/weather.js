class Weather {
    constructor(cityName, countryCode) {
        this.apiKey = '';
        this.cityName = cityName;
        this.countryCode = countryCode;
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName},${this.countryCode}&APPID=${this.apiKey}`);
        const responseData = await response.json();

        return responseData;
    }

    changeLocation(cityName, countryCode){
        this.cityName = cityName;
        this.countryCode = countryCode;
    }
}