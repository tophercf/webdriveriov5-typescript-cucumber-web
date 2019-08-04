# Webdriverio v5, Typescript, Cucumber, Web

Inspired by [WarleyGabrie](https://github.com/WarleyGabriel) for his template https://github.com/WarleyGabriel/demo-webdriverio-cucumber, I wanted to create a boilerplate project for webdriverio using typescript and cucumber. Mainly for the intellisense :).

Boilerplate project uses the following:

- typescript
- webdriverio and sync settings
- cucumber
- chai.js assertions

Includes page object pattern for ease of framework maintainence.

## Getting Started

```
npm install
npm test
```

## Reporters

This projects uses both the [spec-reporter](https://webdriver.io/docs/spec-reporter.html) and [allure-reporter](https://webdriver.io/docs/allure-reporter.html). The spec reporter offers great feedback when running from terminal and the allure reporter provides you with a nice report and screenshots that are automatically attached to failed tests. After running your the tests, run `npm run report` to generate the allure report. It's nifty.

Allure Overview:
![allure](https://github.com/jpolley/WebdriverIO_v5_TypeScript/blob/master/src/assets/allure.png)

Example of failed test with screenshot:
![screenshot](https://github.com/jpolley/WebdriverIO_v5_TypeScript/blob/master/src/assets/screenshot.png)

## Acknowledgements

[Christian Bromann](https://github.com/christian-bromann) for his work on WebdriverIO.

[Dave Haeffner](https://github.com/tourdedave) for his work on [the-internet](http://the-internet.herokuapp.com) which is used in the examples.

[Kevin Lamping](https://github.com/klamping) for creating a neat [course](https://learn.webdriver.io/) on WebdriverIO that helped me learn it more quickly.

[Will Luce](https://github.com/WillLuce) for creating an [example project](https://github.com/WillLuce/WebdriverIO_Typescript) of WebdriverIO v4 & TypeScript that was helpful to me.

[Wildbit](https://wildbit.com/) for being a super rad place to work and giving me two weeks to work on whatever I wanted, which ultimately led to this project.
