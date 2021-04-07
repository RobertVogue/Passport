# Passport
Passport Global, cloned from GoodReads, is a collections of countries.
These countries have the same attributes of a book. The countries are stored
in passports like bookshelves and have a series of stamps like reviews. Countries and their stamps
are publically available. There is also an option for users to see their own stamps easily via a profile page.

### Technologies used
* JavaScript
* Pug
* CSS
* Heroku

### Link to live site
https://passport-global.herokuapp.com/

### Link to Wiki docs
https://github.com/RobertVogue/Passport/wiki

### Discussion of two features that show off the team's technical abilities
1. The stamp creation feature
2. Writing complex queries

### Discussion of both challenges faced and the way the team solved them
Thankfully we faced very few challenges in our group dynamics. We faced the standard code bugs which we worked together to solve. We had pages break without our understanding why, but we were able to fix or rebuild where necessary. We were able to successfully create complex queries and link them to complex routes. Each challenge we faced, we approached as a group and worked together to solve.

### Code snippets to highlight the best code
* Routes logic to get top 3 countries that people want to visit 
```js
router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const wantToVisit = await topWantToVisit();
  const visited = await topVisited();
  const nearby = await topNearBy();
  res.render('index', { csrfToken: req.csrfToken(), wantToVisit, visited, nearby });
}));

const topNearBy = async () => {
  const topCountries = await Stamp.findAll({
    where: { rating: 5 },
    include: [{
      model: Passport,
      where: { passport_status: "Near By" },
    },
    {
      model: Country
    }
    ],
  });
  const countryObj = {};

  const countryNames = topCountries.map(data => {
    return data.Country.dataValues.name
  });

  countryNames.forEach(country => {
    if (countryObj[country]) {
      countryObj[country]++;
    } else {
      countryObj[country] = 1;
    };
  });

  let countriesArr = Object.entries(countryObj).sort((a, b) => b[1] - a[1]).map(el => el[0])
  return countriesArr.splice(0, 10);
}
```
