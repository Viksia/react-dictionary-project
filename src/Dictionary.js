import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	function handleDictionResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleDictionResponse);

		let pexelsApiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
		let pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsApiKey}`;
		let header = { Authorization: `Bearer ${pexelsApiKey}` };
		axios.get(pexelsApiUrl, { headers: header }).then(handlePexelsResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<h1>What word do you want to look up?</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="search"
							onChange={handleKeywordChange}
							defaultValue={props.defaultKeyword}
						/>
					</form>
					<div className="hint">
						<strong>Suggested words:</strong> sunset, wine, sunrise, forest,
						plants
					</div>
				</section>
				<Photos photos={photos} />
				<Results results={results} />
			</div>
		);
	} else {
		load();
		return "Loading..";
	}
}
