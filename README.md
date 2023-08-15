## About Travelogo Service

### How to dev

1. run the command `npm run start:dev`
2. open http://localhost:3030

### Project Structure

```bash
- assets #for assets or mock data
- controllers #business logic
- middlewere #for midleware hook, will execute on every request before go to router
- router #router management
- server.ts #index file for serve/configure middleware and router
```

### Api List

```
http://localhost:3030/api/booking
http://localhost:3030/api/currency
http://localhost:3030/api/guest
http://localhost:3030/api/review
http://localhost:3030/api/transaction

# dashboard api
http://localhost:3030/api/oneYearSeasonalIncomeData
http://localhost:3030/api/threeYearsSeasonalIncomeData

http://localhost:3030/api/sixMonthsTurnupRatioData
http://localhost:3030/api/oneYearTurnupRatioData
http://localhost:3030/api/twoYearsTurnupRatioData

http://localhost:3030/api/sixMonthsGuestPerCountryData
http://localhost:3030/api/oneYearGuestPerCountryData
http://localhost:3030/api/twoYearsGuestPerCountryData

http://localhost:3030/api/visitorTypeData
http://localhost:3030/api/roomTypesData
http://localhost:3030/api/visitPurposeData
http://localhost:3030/api/stayingLengthData
```

### Testing in Postman

Join this Postman workspace:
[LSEG-TH](https://app.getpostman.com/join-team?invite_code=87fbfa66b16956a929013677f23e7894&target_code=55f4e2a3100a027658ec308613405922)
