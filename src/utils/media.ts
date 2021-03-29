// source https://www.petarstefanov.com/blog/2020-03-10-react-styled-components-mobile-first-aproach/

import { css, CSSObject, SimpleInterpolation } from "styled-components";

const sizes: { [key: string]: number } = {
  uhd: 1980,
  widescreen: 1366,
  desktop: 1024,
  tablet: 768,
};

export default Object.keys(sizes).reduce(
  (acc: { [key: string]: any }, label) => {
    acc[label] = (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)};
      }
    `;
    return acc;
  },
  {}
);
