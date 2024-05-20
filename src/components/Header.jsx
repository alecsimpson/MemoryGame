import {useEffect} from "react";


export default function Header({ score, highScore, setHighscore, size, setSize }) {

	useEffect(() => {
		if(score > highScore) setHighscore(score);
	}, [score]);

	return (
		<>
			<div className='header'>
				<div className='size-section'>
					<label>Game Size</label>
					<input
						className='size-input'
						type='number'
						name='size'
						id='size'
						min='8'
						max='24'
						step='4'
						placeholder='16'
						value={size}
						onChange={(e) => setSize(e.target.value)}
					></input>
				</div>
				<h3 className='title'>Pokemon Memory Game</h3>
				<div className='score-section'>
					<p><b>Score:</b> {score}</p>
					<p><b>Highscore:</b> {highScore}</p>
				</div>
			</div>
		</>
	)

}