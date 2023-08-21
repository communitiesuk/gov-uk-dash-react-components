import React from 'react';
import styled from 'styled-components';
import{ ComponentType } from 'react';


export const Article = (() =>
    styled.article`
        max-width: 50em;
    `
)();


export const Heading = ({ className = '', ...props }) => (
    <h2 className={ `govuk-heading-m ${className}` } { ...props }/>
);