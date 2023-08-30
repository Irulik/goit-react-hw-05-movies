import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Common Styles
export const LinkItem = styled(Link)`
	max-width: 200px;
	background-color: #ffdab9;
	display: flex;
	position: relative;
	justify-content: space-between;
	flex-direction: column;
	text-decoration: none;
	border-radius: 5px;
	transition: scale 250ms linear, box-shadow 250ms linear;
	&:hover {
		scale: calc(1.03);
		box-shadow: 0px 0px 20px 8px gray;
	}
	&:nth-last-child(-n + 4) {
		margin-bottom: 0;
	}
`;
export const MoviesList = styled('div')`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
`;
export const MovieTitle = styled('h2')`
	text-align: left;
	font-size: 20px;
	color: coral;
	padding: 10px;  
				
`;
export const LinkButton = styled(Link)`
	display: inline-block;
	padding: 10px;
	text-decoration: none;
	border-radius: 5px;
	font-size: 20px;
	font-weight: 700;
	color: coral;
	border: 1px solid blue;
	background-color: lightblue;
	transition: background-color 250ms linear, color 250ms linear;
	&:hover, :focus {
		background-color: #ffdab9;
		color: blue;
	}
`;

// Movies Styles
export const MoviesSearchButton = styled('button')`
	font-size: 20px;
	background-color: #ffdab9;
	color: blue;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	border: 1px solid ffdab9;
	transition: background-color 250ms linear, color 250ms linear;
	&:hover, focus {
		color: blue;
		background-color: lightblue;
	}
`;
export const MoviesForm = styled('form')`
	display: flex;
	gap: 20px;
	padding: 20px;
`;
export const MoviesInput = styled('input')`
	padding: 10px;
	font-size: 20px;
	outline: none;
	border: 1px solid blue;
	border-radius: 5px;
`;


export const MovieDetailsAdditional = styled('div')`
	padding: 50px;
`;
export const MovieDetailsAdditionalTitle = styled('h3')`
	margin-top: 0;
	font-size: 20px;
`;


export const LinkBox = styled('div')`
	padding: 20px;
`;
