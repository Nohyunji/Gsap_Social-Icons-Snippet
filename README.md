# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<br/>

### `Install`

- npm i gsap
- import

```
import { gsap } from "gsap";
```

https://greensock.com/react

<br/>

### `Get started`

`TimeLine`

```
gsap.timeline();
```

타임라인을 가져온 이후 Methods를 사용할 수 있습니다.\
https://greensock.com/docs/v2/TimelineLite

<br/>

`Methods`

##### 에니메이션 실행 주기

```
el = gsap.timeline({ paused: true });
```

기본은 false이며 애니메이션이 생성되자마자 바로 실행, ture일 경우 애니메이션 생성 후 실행되지 않습니다.

https://greensock.com/docs/v2/TimelineLite/paused()

<br/>

##### 에니메이션 속도 조절 Methods 사용법

```
import { Power1, Expo } from "gsap";
```

https://greensock.com/docs/v2/Easing
