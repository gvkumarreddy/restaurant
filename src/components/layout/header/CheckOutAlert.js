import React from 'react';
import styled from 'styled-components';
import {media} from '../../../utils/styling';

const $CheckOutAlert = styled.h2`
  ${media.tablet`
    font-size: 1.25rem;
  `}
  ${media.phone`
    font-size: 1rem;
  `}
`;

const CheckOutAlert = () => {
	return (
		<$CheckOutAlert>Please checkout before signing out!</$CheckOutAlert>
	);
};

export default CheckOutAlert;