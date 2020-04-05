import React from 'react';
import { DisplayProps, MarginBottomProps } from 'styled-system';

export type PropsOf<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

export interface PolymorphicLinkOwnProps<E extends React.ElementType = React.ElementType> {
  component?: E;
  display?: DisplayProps;
  marginBottom?: MarginBottomProps;
}

export type PolymorphicLinkProps<E extends React.ElementType> = PolymorphicLinkOwnProps<E> &
  Omit<PropsOf<E>, keyof PolymorphicLinkOwnProps>;

const defaultElement = 'a';

export const PolymorphicLink = React.forwardRef(
  ({ display, marginBottom, component, ...restProps }: PolymorphicLinkOwnProps, ref: React.Ref<Element>) => {
    const Element = component || defaultElement;

    return <Element ref={ref} {...restProps} />;
  }
) as <E extends React.ElementType = typeof defaultElement>(props: PolymorphicLinkProps<E>) => JSX.Element;
