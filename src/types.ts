import { StyledComponentProps } from 'styled-components';
  
  // Dear reader please feel free to improve this... 🕵️‍♂️
  export type StyledComponentPropsWithAs<
    C extends keyof JSX.IntrinsicElements | React.ElementType,
    T extends object,
    O extends object,
    A extends keyof any
  > = StyledComponentProps<C, T, O, A> & { as?: C; forwardedAs?: C };