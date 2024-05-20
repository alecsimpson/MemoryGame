import {useEffect, useState} from "react";


export default function Tile({ pokemon, selected, setSelected, shuffle }) {

	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(pokemon.url);
			const result = await response.json();
			setImageUrl(result.sprites.front_default);
		}
		fetchData()
	}, [])




	return (
		<>
			<div
				className="tile"
				onClick={() => {
					shuffle()
					setSelected([...selected, pokemon])
				}}>
				<img src={imageUrl} alt=''/>
			</div>
		</>
	)
}