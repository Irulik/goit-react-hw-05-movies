import styled from 'styled-components';

export const ListFilms = styled.ul`
	margin-top: 12px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px;
`;
export const ItemFilms = styled.li`
	flex-grow: 1;
	&:hover a, &:focus a{
		background-color: var(--hover-accent-2);
		color: var(--cta-text);
	}
	a{
		position: relative;
		padding: 16px;
		font-weight: 700;
		font-size: 20px;
		display: flex;
		align-items: center;
		overflow: hidden;
	  	position: relative;
	  	border-radius: 8px;
	}
`;
export const MovieMiniPoster = styled.div`
	opacity: 0.2;
	position: absolute;
	left: 0;
	top: -100%;
	width: 100%;
	height: auto;
	img{
		width: 100%;
	}
`