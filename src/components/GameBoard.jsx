import {useEffect, useState} from "react";
import _, { sample, shuffle } from "underscore";
import Tile from "./Tile.jsx";


export default function GameBoard({ pokemon, score, setScore, size }) {
	const [subset, setSubset] = useState([]);
	const [selectedPkmn, setSelectedPkmn] = useState([]);

	function shuffleSubset () {
		setSubset(_.shuffle(subset))
	}

	function hasNoDuplicates(arr) {
		return arr.every(num => arr.indexOf(num) === arr.lastIndexOf(num));
	}

	function resetGame() {
		setSubset(sample(pokemon, size));
		setScore(0);
		setSelectedPkmn([]);
	}

	useEffect(() => {
		setSubset(sample(pokemon, size));
	}, [size])

	useEffect(() => {
		if(selectedPkmn.length === 0) return

		hasNoDuplicates(selectedPkmn)
			? setScore(score + 1)
			: resetGame()
	}, [selectedPkmn]);




	return (
		<>
			<div className="game-container">
				{
					subset
						? subset.map(pokemon =>
							<Tile
								key={pokemon.name}
								pokemon={pokemon}
								selected={selectedPkmn}
								setSelected={setSelectedPkmn}
								shuffle={shuffleSubset}
							/>
						)
						: <p>Loading...</p>

				}
			</div>
		</>
	)
}