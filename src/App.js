import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<img src={logo} className="App-logo img-fluid" alt="logo" />
				</header>
				<main>
					<Dictionary defaultKeyword="sunset" />
				</main>
				<footer className="App-footer">
					<a
						href="https://github.com/Viksia/react-dictionary-project"
						target="_blank"
						rel="noreferrer"
					>
						Coded by Viksy
					</a>
				</footer>
			</div>
		</div>
	);
}
