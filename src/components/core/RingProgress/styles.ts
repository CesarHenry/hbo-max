import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .box {
      position: relative;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100px;
      height: 100px;
      margin: auto;
      font-size: 24px;
      font-family: 'Lato', sans-serif;
      border-radius: 50%;
      box-shadow: inset 0 0 0px 10px ${theme.colors.LIGHT};
      /* overflow: hidden; */
    }
    .box:before {
      content: attr(data-percentage) '%';
      display: block;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      border-radius: 50%;
    }

    .completed {
      position: absolute;
      top: 0;
      left: 0;
    }
    .completed:before,
    .completed:after {
      content: '';
      position: absolute;
      width: 100px;
      height: 100px;
      box-shadow: inset 0 0 0px 10px ${theme.colors.GOLD};
      border-radius: 50%;
    }
    .completed:before {
      clip: rect(0 100px 100px 50px);
    }
    .completed:after {
      clip: rect(0 50px 100px 0);
    }

    [data-percentage='0'] .completed {
      clip: rect(0 100px 100px 50px);
    }
    [data-percentage='0'] .completed.active:before {
      -webkit-transform: rotate(-180deg);
      -ms-transform: rotate(-180deg);
      transform: rotate(-180deg);
      -webkit-animation: first-0 2s 1 ease-out;
      animation: first-0 2s 1 ease-out;
    }

    @-webkit-keyframes first-0 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
    }
    @keyframes first-0 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
    }
    [data-percentage='5'] .completed {
      clip: rect(0 100px 100px 50px);
    }
    [data-percentage='5'] .completed.active:before {
      -webkit-transform: rotate(-162deg);
      -ms-transform: rotate(-162deg);
      transform: rotate(-162deg);
      -webkit-animation: first-5 2s 1 ease-out;
      animation: first-5 2s 1 ease-out;
    }

    @-webkit-keyframes first-5 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-162deg);
        transform: rotate(-162deg);
      }
    }
    @keyframes first-5 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-162deg);
        transform: rotate(-162deg);
      }
    }
    [data-percentage='10'] .completed {
      clip: rect(0 100px 100px 50px);
    }
    [data-percentage='10'] .completed.active:before {
      -webkit-transform: rotate(-144deg);
      -ms-transform: rotate(-144deg);
      transform: rotate(-144deg);
      -webkit-animation: first-10 2s 1 ease-out;
      animation: first-10 2s 1 ease-out;
    }

    @-webkit-keyframes first-10 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-144deg);
        transform: rotate(-144deg);
      }
    }
    @keyframes first-10 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-144deg);
        transform: rotate(-144deg);
      }
    }
    [data-percentage='15'] .completed {
      clip: rect(0 100px 100px 50px);
    }
    [data-percentage='15'] .completed.active:before {
      -webkit-transform: rotate(-126deg);
      -ms-transform: rotate(-126deg);
      transform: rotate(-126deg);
      -webkit-animation: first-15 2s 1 ease-out;
      animation: first-15 2s 1 ease-out;
    }

    @-webkit-keyframes first-15 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-126deg);
        transform: rotate(-126deg);
      }
    }
    @keyframes first-15 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-126deg);
        transform: rotate(-126deg);
      }
    }
    [data-percentage='20'] .completed {
      clip: rect(0 100px 100px 50px);
    }
    [data-percentage='20'] .completed.active:before {
      -webkit-transform: rotate(-108deg);
      -ms-transform: rotate(-108deg);
      transform: rotate(-108deg);
      -webkit-animation: first-20 2s 1 ease-out;
      animation: first-20 2s 1 ease-out;
    }

    @-webkit-keyframes first-20 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-108deg);
        transform: rotate(-108deg);
      }
    }
    @keyframes first-20 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-108deg);
        transform: rotate(-108deg);
      }
    }
    [data-percentage='25'] .completed {
      clip: rect(0 100px 100px 50px);
    }
    [data-percentage='25'] .completed.active:before {
      -webkit-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      transform: rotate(-90deg);
      -webkit-animation: first-25 2s 1 ease-out;
      animation: first-25 2s 1 ease-out;
    }

    @-webkit-keyframes first-25 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
      }
    }
    @keyframes first-25 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
      }
    }
    [data-percentage='30'] .completed {
      clip: rect(0 100px 100px 50px);
    }
    [data-percentage='30'] .completed.active:before {
      -webkit-transform: rotate(-72deg);
      -ms-transform: rotate(-72deg);
      transform: rotate(-72deg);
      -webkit-animation: first-30 2s 1 ease-out;
      animation: first-30 2s 1 ease-out;
    }

    @-webkit-keyframes first-30 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-72deg);
        transform: rotate(-72deg);
      }
    }
    @keyframes first-30 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-72deg);
        transform: rotate(-72deg);
      }
    }
    [data-percentage='35'] .completed {
      clip: rect(0 100px 100px 50px);
    }
    [data-percentage='35'] .completed.active:before {
      -webkit-transform: rotate(-54deg);
      -ms-transform: rotate(-54deg);
      transform: rotate(-54deg);
      -webkit-animation: first-35 2s 1 ease-out;
      animation: first-35 2s 1 ease-out;
    }

    @-webkit-keyframes first-35 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-54deg);
        transform: rotate(-54deg);
      }
    }
    @keyframes first-35 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-54deg);
        transform: rotate(-54deg);
      }
    }
    [data-percentage='40'] .completed {
      clip: rect(0 100px 100px 50px);
    }
    [data-percentage='40'] .completed.active:before {
      -webkit-transform: rotate(-36deg);
      -ms-transform: rotate(-36deg);
      transform: rotate(-36deg);
      -webkit-animation: first-40 2s 1 ease-out;
      animation: first-40 2s 1 ease-out;
    }

    @-webkit-keyframes first-40 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-36deg);
        transform: rotate(-36deg);
      }
    }
    @keyframes first-40 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-36deg);
        transform: rotate(-36deg);
      }
    }
    [data-percentage='45'] .completed {
      clip: rect(0 100px 100px 50px);
    }
    [data-percentage='45'] .completed.active:before {
      -webkit-transform: rotate(-18deg);
      -ms-transform: rotate(-18deg);
      transform: rotate(-18deg);
      -webkit-animation: first-45 2s 1 ease-out;
      animation: first-45 2s 1 ease-out;
    }

    @-webkit-keyframes first-45 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-18deg);
        transform: rotate(-18deg);
      }
    }
    @keyframes first-45 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(-18deg);
        transform: rotate(-18deg);
      }
    }
    [data-percentage='50'] .completed {
      clip: rect(0 100px 100px 50px);
    }
    [data-percentage='50'] .completed.active:before {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: first-50 2s 1 ease-out;
      animation: first-50 2s 1 ease-out;
    }

    @-webkit-keyframes first-50 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
    }
    @keyframes first-50 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
    }
    [data-percentage='55'] .completed {
      clip: rect(0 100px 100px 0px);
    }
    [data-percentage='55'] .completed.active {
      -webkit-animation: mask-55 2s linear;
      animation: mask-55 2s linear;
    }
    [data-percentage='55'] .completed.active:before {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: first-55 2s 1 linear;
      animation: first-55 2s 1 linear;
    }
    [data-percentage='55'] .completed.active:after {
      -webkit-transform: rotate(-162deg);
      -ms-transform: rotate(-162deg);
      transform: rotate(-162deg);
      -webkit-animation: second-55 2s 1 ease-out;
      animation: second-55 2s 1 ease-out;
    }

    @-webkit-keyframes mask-55 {
      0%,
      50% {
        clip: rect(0 100px 100px 50px);
      }
      50.01%,
      100% {
        clip: rect(0 100px 100px 0px);
      }
    }

    @keyframes mask-55 {
      0%,
      50% {
        clip: rect(0 100px 100px 50px);
      }
      50.01%,
      100% {
        clip: rect(0 100px 100px 0px);
      }
    }
    @-webkit-keyframes first-55 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
    }
    @keyframes first-55 {
      0% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      50%,
      100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
    }
    @-webkit-keyframes second-55 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-162deg);
        transform: rotate(-162deg);
      }
    }
    @keyframes second-55 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-162deg);
        transform: rotate(-162deg);
      }
    }
    [data-percentage='60'] .completed {
      clip: rect(0 100px 100px 0px);
    }
    [data-percentage='60'] .completed.active {
      -webkit-animation: mask-55 2s linear;
      animation: mask-55 2s linear;
    }
    [data-percentage='60'] .completed.active:before {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: first-55 2s 1 linear;
      animation: first-55 2s 1 linear;
    }
    [data-percentage='60'] .completed.active:after {
      -webkit-transform: rotate(-144deg);
      -ms-transform: rotate(-144deg);
      transform: rotate(-144deg);
      -webkit-animation: second-60 2s 1 ease-out;
      animation: second-60 2s 1 ease-out;
    }

    @-webkit-keyframes second-60 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-144deg);
        transform: rotate(-144deg);
      }
    }
    @keyframes second-60 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-144deg);
        transform: rotate(-144deg);
      }
    }
    [data-percentage='65'] .completed {
      clip: rect(0 100px 100px 0px);
    }
    [data-percentage='65'] .completed.active {
      -webkit-animation: mask-55 2s linear;
      animation: mask-55 2s linear;
    }
    [data-percentage='65'] .completed.active:before {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: first-65 2s 1 linear;
      animation: first-65 2s 1 linear;
    }
    [data-percentage='65'] .completed.active:after {
      -webkit-transform: rotate(-126deg);
      -ms-transform: rotate(-126deg);
      transform: rotate(-126deg);
      -webkit-animation: second-65 2s 1 ease-out;
      animation: second-65 2s 1 ease-out;
    }

    @-webkit-keyframes second-65 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-126deg);
        transform: rotate(-126deg);
      }
    }
    @keyframes second-65 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-126deg);
        transform: rotate(-126deg);
      }
    }
    [data-percentage='70'] .completed {
      clip: rect(0 100px 100px 0px);
    }
    [data-percentage='70'] .completed.active {
      -webkit-animation: mask-55 2s linear;
      animation: mask-55 2s linear;
    }
    [data-percentage='70'] .completed.active:before {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: first-55 2s 1 linear;
      animation: first-55 2s 1 linear;
    }
    [data-percentage='70'] .completed.active:after {
      -webkit-transform: rotate(-108deg);
      -ms-transform: rotate(-108deg);
      transform: rotate(-108deg);
      -webkit-animation: second-70 2s 1 ease-out;
      animation: second-70 2s 1 ease-out;
    }

    @-webkit-keyframes second-70 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-108deg);
        transform: rotate(-108deg);
      }
    }
    @keyframes second-70 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-108deg);
        transform: rotate(-108deg);
      }
    }
    [data-percentage='75'] .completed {
      clip: rect(0 100px 100px 0px);
    }
    [data-percentage='75'] .completed.active {
      -webkit-animation: mask-55 2s linear;
      animation: mask-55 2s linear;
    }
    [data-percentage='75'] .completed.active:before {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: first-55 2s 1 linear;
      animation: first-55 2s 1 linear;
    }
    [data-percentage='75'] .completed.active:after {
      -webkit-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      transform: rotate(-90deg);
      -webkit-animation: second-75 2s 1 ease-out;
      animation: second-75 2s 1 ease-out;
    }

    @-webkit-keyframes second-75 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
      }
    }
    @keyframes second-75 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
      }
    }
    [data-percentage='80'] .completed {
      clip: rect(0 100px 100px 0px);
    }
    [data-percentage='80'] .completed.active {
      -webkit-animation: mask-55 2s linear;
      animation: mask-55 2s linear;
    }
    [data-percentage='80'] .completed.active:before {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: first-55 2s 1 linear;
      animation: first-55 2s 1 linear;
    }
    [data-percentage='80'] .completed.active:after {
      -webkit-transform: rotate(-72deg);
      -ms-transform: rotate(-72deg);
      transform: rotate(-72deg);
      -webkit-animation: second-80 2s 1 ease-out;
      animation: second-80 2s 1 ease-out;
    }

    @-webkit-keyframes second-80 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-72deg);
        transform: rotate(-72deg);
      }
    }
    @keyframes second-80 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-72deg);
        transform: rotate(-72deg);
      }
    }
    [data-percentage='85'] .completed {
      clip: rect(0 100px 100px 0px);
    }
    [data-percentage='85'] .completed.active {
      -webkit-animation: mask-55 2s linear;
      animation: mask-55 2s linear;
    }
    [data-percentage='85'] .completed.active:before {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: first-55 2s 1 linear;
      animation: first-55 2s 1 linear;
    }
    [data-percentage='85'] .completed.active:after {
      -webkit-transform: rotate(-54deg);
      -ms-transform: rotate(-54deg);
      transform: rotate(-54deg);
      -webkit-animation: second-85 2s 1 ease-out;
      animation: second-85 2s 1 ease-out;
    }

    @-webkit-keyframes second-85 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-54deg);
        transform: rotate(-54deg);
      }
    }
    @keyframes second-85 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-54deg);
        transform: rotate(-54deg);
      }
    }
    [data-percentage='90'] .completed {
      clip: rect(0 100px 100px 0px);
    }
    [data-percentage='90'] .completed.active {
      -webkit-animation: mask-55 2s linear;
      animation: mask-55 2s linear;
    }
    [data-percentage='90'] .completed.active:before {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: first-55 2s 1 linear;
      animation: first-55 2s 1 linear;
    }
    [data-percentage='90'] .completed.active:after {
      -webkit-transform: rotate(-36deg);
      -ms-transform: rotate(-36deg);
      transform: rotate(-36deg);
      -webkit-animation: second-90 2s 1 ease-out;
      animation: second-90 2s 1 ease-out;
    }

    @-webkit-keyframes second-90 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-36deg);
        transform: rotate(-36deg);
      }
    }
    @keyframes second-90 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-36deg);
        transform: rotate(-36deg);
      }
    }
    [data-percentage='95'] .completed {
      clip: rect(0 100px 100px 0px);
    }
    [data-percentage='95'] .completed.active {
      -webkit-animation: mask-55 2s linear;
      animation: mask-55 2s linear;
    }
    [data-percentage='95'] .completed.active:before {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: first-55 2s 1 linear;
      animation: first-55 2s 1 linear;
    }
    [data-percentage='95'] .completed.active:after {
      -webkit-transform: rotate(-18deg);
      -ms-transform: rotate(-18deg);
      transform: rotate(-18deg);
      -webkit-animation: second-95 2s 1 ease-out;
      animation: second-95 2s 1 ease-out;
    }

    @-webkit-keyframes second-95 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-18deg);
        transform: rotate(-18deg);
      }
    }
    @keyframes second-95 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(-18deg);
        transform: rotate(-18deg);
      }
    }
    [data-percentage='100'] .completed {
      clip: rect(0 100px 100px 0px);
    }
    [data-percentage='100'] .completed.active {
      -webkit-animation: mask-55 2s linear;
      animation: mask-55 2s linear;
    }
    [data-percentage='100'] .completed.active:before {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: first-55 2s 1 linear;
      animation: first-55 2s 1 linear;
    }
    [data-percentage='100'] .completed.active:after {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-animation: second-100 2s 1 ease-out;
      animation: second-100 2s 1 ease-out;
    }

    @-webkit-keyframes second-100 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
    }
    @keyframes second-100 {
      0%,
      50% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50.01% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
      }
      100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
    }
  `}
`;
