import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Piedepagina from "./piedepagina";

import rigoImage from "../../img/rigo-baby.jpg"

const Home = () => {

	return (
		<>
			<Navbar />
			<div className="container d-flex flex-column gap-3">
			<Jumbotron />
			<div className="d-flex gap-5 flex-wrap justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			</div>
			<Piedepagina />

		</>
	);
};

export default Home;