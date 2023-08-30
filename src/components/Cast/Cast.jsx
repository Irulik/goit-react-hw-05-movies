import { fetchCast } from '../../api/fetchApi';
import {
	CastPerson,
	CastImg,
	CastActor,
	CastCharacter,
} from "./Cast.styled.jsx"
import { useState, useEffect } from 'react';

const Cast = ({ id }) => {
	const [cast, setCast] = useState([]);

	useEffect(() => {
		fetchCast(id).then((data) => {
			setCast(data.cast);
		});
	}, []);
	// console.log(cast);
	// const top20Cast = cast.slice(0, 20); //на випадок обмеження кількості акторів
	return (
		cast.map((person, index) => (
			<CastPerson key={index}>
				<CastImg>
					<img
						src={person.profile_path
							? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
							: 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'}
						alt={person.name} />
				</CastImg>
				<CastActor>Actor: {person.name}</CastActor>
				<CastCharacter>Character: {person.character}</CastCharacter>
			</CastPerson>
		))
	);
};
export default Cast;
