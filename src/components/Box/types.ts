import { StyledComponentProps } from 'styled-components';
import {
  BackgroundColorProps,
  SpaceProps,
  BorderRadiusProps,
  DisplayProps,
  FlexboxProps,
  MinHeightProps,
  WidthProps,
} from 'styled-system';

export type StyledSystemBoxProps = BackgroundColorProps &
  SpaceProps &
  BorderRadiusProps &
  DisplayProps &
  FlexboxProps &
  MinHeightProps &
  WidthProps;

// Dear reader please feel free to improve this... 🕵️‍♂️
export type StyledComponentPropsWithAs<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  T extends object,
  O extends object,
  A extends keyof any
> = StyledComponentProps<C, T, O, A> & { as?: C; forwardedAs?: C };
