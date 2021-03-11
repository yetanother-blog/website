import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';

export type StatsProps = MarginProps;

export const Stats = styled.div<StatsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${margin}

  @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
    flex-direction: row;
  }

  & > * {
    position: relative;
    padding-right: ${(props) => props.theme.space.xl}px;
    padding-left: ${(props) => props.theme.space.xl}px;
    margin-bottom: ${(props) => props.theme.space.xl}px;

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
      padding-right: ${(props) => props.theme.space.xxl}px;
      padding-left: ${(props) => props.theme.space.xxl}px;
      margin-bottom: 0;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
    & > *::after {
      content: '';
      width: 8px;
      height: 80%;
      position: absolute;
      right: -4px;
      top: 10%;
      background-color: ${(props) => props.theme.colors.grey300};
    }

    & > *:last-child::after {
      display: none;
    }
  }
`;
