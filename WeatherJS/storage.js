class Storage {
    constructor() {
        this.city;
        this.countryCode;
        this.defaultCity = 'Gdansk';
        this.defaultCountry = 'PL';
    }

    getLocationData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        if(localStorage.getItem('country') === null){
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = localStorage.getItem('country');
        }

        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }

    setLocationData(city, country) {
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
}