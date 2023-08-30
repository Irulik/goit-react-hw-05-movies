import styled from "styled-components";

export const Movie = styled.div``;
export const MovieDesc = styled.div`
display: flex;
gap: 12px;
margin-top: 10px;
margin-bottom: 10px;;`;
export const MovieLeft = styled.div`
display: inline-block;
border: 1px solid #ffdab9;
border-radius: 14px;
margin: 2px;
max-width: 300px;
width: 100%;`;
export const MovieRight = styled.div`
display: inline-block;
border: 1px solid #ffdab9;
border-radius: 14px;
margin: 2px;`;
export const GoBack = styled.button``;
export const MoviePoster = styled.div`
display: flex;
gap: 12px;
margin-top: 12px;
margin-bottom: 12px;
max-width: 300px;
background: rgb(66, 66, 66);
border-radius: 15px;`
export const MovieTitle = styled.div`
font-size: 26px;
margin-bottom: 12px;`;
export const MovieRating = styled.div`
font-size: 16px;
margin-bottom: 6px;`;
export const MovieGenre = styled.div`    
font-size: 16px;
margin-bottom: 6px;`;
export const MovieDescription = styled.div`
font-size: 16px;
color: rgb(136, 136, 136);
margin-bottom: 12px;`;
export const MovieButtons = styled.div`
display: flex; 
gap: 10px`;
export const MovieCast = styled.button`
display: inline-block;
padding: 10px;
text-decoration: none;
border-radius: 5px;
font-size: 20px;
font-weight: 700;
color: coral;
border: 1px solid #ffdab9;
background-color: lightblue;
transition: background-color 250ms linear, color 250ms linear;
&:hover,
:focus {
	background-color: #ffdab9;
	color: blue;
}`;
export const MovieReviews = styled.button`display: inline-block;
padding: 10px;
text-decoration: none;
border-radius: 5px;
font-size: 20px;
font-weight: 700;
color: coral;
border: 1px solid #ffdab9;
background-color: lightblue;
transition: background-color 250ms linear, color 250ms linear;
&:hover,
:focus {
	background-color: #ffdab9;
	color: blue;
}`;
export const CastGroup = styled.div` 
margin-top: 12px;
display: flex;
flex-wrap: wrap;
gap: 12px;
`;
export const ReviewsGroup = styled.div` 
display: none;
`;