export const responseCurrentWeather = {
  "coord": {
    "lon": -75.1925,
    "lat": -12.0767
  },
  "weather": [
    {
      "id": 802,
      "main": "Clouds",
      "description": "nubes dispersas",
      "icon": "03d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 291.62,
    "feels_like": 290.57,
    "temp_min": 291.62,
    "temp_max": 291.62,
    "pressure": 1013,
    "humidity": 40,
    "sea_level": 1013,
    "grnd_level": 695
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.09,
    "deg": 98,
    "gust": 3.48
  },
  "clouds": {
    "all": 45
  },
  "dt": 1695831850,
  "sys": {
    "country": "PE",
    "sunrise": 1695811623,
    "sunset": 1695855394
  },
  "timezone": -18000,
  "id": 3939459,
  "name": "Huancayo",
  "cod": 200
}

export const responseFiveDaysItem = {
  "dt": 1695848400,
  "main": {
    "temp": 289.26,
    "feels_like": 288.36,
    "temp_min": 289.26,
    "temp_max": 289.26,
    "pressure": 1012,
    "sea_level": 1012,
    "grnd_level": 692,
    "humidity": 55,
    "temp_kf": 0
  },
  "weather": [
    {
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }
  ],
  "clouds": {
    "all": 92
  },
  "wind": {
    "speed": 1.38,
    "deg": 57,
    "gust": 3.1
  },
  "visibility": 10000,
  "pop": 0.91,
  "rain": {
    "3h": 1.36
  },
  "sys": {
    "pod": "d"
  },
  "dt_txt": "2023-09-27 21:00:00"
}

export const responseFiveDays = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  // "list": [],
  "city": {
    "id": 3939459,
    "name": "Huancayo",
    "coord": {
      "lat": -12.0767,
      "lon": -75.1925
    },
    "country": "PE",
    "population": 376657,
    "timezone": -18000,
    "sunrise": 1695811623,
    "sunset": 1695855394
  }
}

export const responseLocationsFoundItem = {
  "name": "City of London",
  "local_names": {
    "es": "City de Londres",
    "ru": "Сити",
    "ur": "لندن شہر",
    "zh": "倫敦市",
    "en": "City of London",
    "pt": "Cidade de Londres",
    "fr": "Cité de Londres",
    "uk": "Лондонське Сіті",
    "he": "הסיטי של לונדון",
    "hi": "सिटी ऑफ़ लंदन",
    "ko": "시티 오브 런던",
    "lt": "Londono Sitis"
  },
  "lat": 51.5156177,
  "lon": -0.0919983,
  "country": "GB",
  "state": "England"
} 
