import React from 'react';
import {NextPage} from 'next'

interface Props {
  children?: any;
  className?: string;
  type?: string;
}

const Container: NextPage<Props> = ({ children, className, type }) => {
  let containerClassName = 'container';

  if ( typeof type === 'string' ) {
    containerClassName = `${containerClassName} container-${type}`;
  }

  if ( typeof className === 'string' ) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return <div className={containerClassName}>{ children }</div>;
};



export default Container;
