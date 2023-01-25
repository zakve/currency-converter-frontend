# Currency Converter 
Basic currency converter using openexchangerates.org. 

## Research
- Convert From/To Currency
- Amount for conversion
- View Exchange rate history (+ graphs)
- Show time of last update
- Show the last conversions
- Internationalization

XE: [https://www.xe.com/currencyconverter/](https://www.xe.com/currencyconverter/)

Oanda: [https://www.oanda.com/currency-converter/](https://www.oanda.com/currency-converter/)

## Design
![Design](/src/assets/screenshots/currency-converter.png)

## Stack/Features
> - React
> - Typescript
> - Hooks
> - Material UI
> - Vercel Automatic Deployment
> - React flags - TODO

## Demo
![Convert](/src/assets/screenshots/convert.png)
![Statistics](/src/assets/screenshots/statistics.png)

## Instalation
### Clone and install packages
Backend

```
git clone https://github.com/zakve/currency-converter-backend.git
cd currency-converter-backend
npm i
npm run dev
```

Frontend

```
git clone https://github.com/zakve/currency-converter-frontend.git
cd currency-converter-frontend
npm i
npm start
```

### TODO
- write more tests
- Update design
- limited conversion only from USD (free version of openexchangerates.org)