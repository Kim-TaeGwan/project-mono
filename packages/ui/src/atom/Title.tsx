import { css } from '@emotion/react';
import styled from '@emotion/styled';

type TTitleType = 'display' | 'heading' | 'title';
type TTitleSize =
  | 'xxLarge'
  | 'xLarge'
  | 'large'
  | 'medium'
  | 'small'
  | 'xSmall';

interface IBaseButton {
  titleType?: TTitleType;
  titleSize?: TTitleSize;
}

const getCurrentType = ({ titleType, titleSize }: IBaseButton) => {
  if (titleType === 'display') {
    if (titleSize === 'large') {
      return css`
        font-size: 66px;
        @media (max-width: 720px) {
          font-size: 40px;
        }
      `;
    }
    if (titleSize === 'medium') {
      return css`
        font-size: 50px;
        @media (max-width: 720px) {
          font-size: 32px;
        }
      `;
    }
    return css`
      font-size: 40px;
      @media (max-width: 720px) {
        font-size: 25px;
      }
    `;
  }

  if (titleType === 'heading') {
    if (titleSize === 'large') {
      return css`
        font-size: 50px;
        @media (max-width: 720px) {
          font-size: 40px;
        }
      `;
    }
    if (titleSize === 'medium') {
      return css`
        font-size: 40px;
        @media (max-width: 720px) {
          font-size: 32px;
        }
      `;
    }
    return css`
      font-size: 32px;
      @media (max-width: 720px) {
        font-size: 25px;
      }
    `;
  }

  if (titleType === 'title') {
    if (titleSize === 'xxLarge') {
      return css`
        font-size: 32px;
        @media (max-width: 720px) {
          font-size: 25px;
        }
      `;
    }
    if (titleSize === 'xLarge') {
      return css`
        font-size: 25px;
        @media (max-width: 720px) {
          font-size: 25px;
        }
      `;
    }
    if (titleSize === 'large') {
      return css`
        font-size: 21px;
        @media (max-width: 720px) {
          font-size: 21px;
        }
      `;
    }
    if (titleSize === 'medium') {
      return css`
        font-size: 19px;
        @media (max-width: 720px) {
          font-size: 19px;
        }
      `;
    }

    if (titleSize === 'xSmall') {
      return css`
        font-size: 15px;
        @media (max-width: 720px) {
          font-size: 15px;
        }
      `;
    }
    return css`
      font-size: 17px;
      @media (max-width: 720px) {
        font-size: 17px;
      }
    `;
  }
};

const Title = styled.h1<{
  titleType?: TTitleType;
  titleSize?: TTitleSize;
}>`
  ${getCurrentType};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export { Title };
export type { TTitleSize, TTitleType };
