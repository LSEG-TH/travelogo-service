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

### API List

```
http://localhost:3030/api/v1/booking
http://localhost:3030/api/v1/currency
http://localhost:3030/api/v1/guest
http://localhost:3030/api/v1/review
http://localhost:3030/api/v1/transaction

# Summary API
http://localhost:3030/api/v1/oneYearSeasonalIncomeData
http://localhost:3030/api/v1/threeYearsSeasonalIncomeData

http://localhost:3030/api/v1/sixMonthsTurnupRatioData
http://localhost:3030/api/v1/oneYearTurnupRatioData
http://localhost:3030/api/v1/twoYearsTurnupRatioData

http://localhost:3030/api/v1/sixMonthsGuestPerCountryData
http://localhost:3030/api/v1/oneYearGuestPerCountryData
http://localhost:3030/api/v1/twoYearsGuestPerCountryData

http://localhost:3030/api/v1/visitorTypeData
http://localhost:3030/api/v1/roomTypesData
http://localhost:3030/api/v1/visitPurposeData
http://localhost:3030/api/v1/stayingLengthData
```

### Testing in Postman

- API Document: https://documenter.getpostman.com/view/29390573/2s9Y5ZuMPE
- Postman Collection: [LSEG-TH](https://app.getpostman.com/join-team?invite_code=07ae5441f8a6b12e3c07289da80c3cc6)
