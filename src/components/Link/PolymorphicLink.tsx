import React from 'react';

export type PolymorphicLinkProps<C extends React.ElementType> = {
  component: C;
} & React.ComponentPropsWithRef<C>;
export function PolymorphicLink<C extends React.ElementType = 'a'>(props: PolymorphicLinkProps<C>) {
  const { display, marginBottom, component: Component, ...rest } = props;
  return <Component {...rest} />;
}
PolymorphicLink.defaultProps = {
  component: 'a',
};
