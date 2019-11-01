import React, { PureComponent } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Advertise from './components/Advertise';
import Banner from './components/Banner';
import DetailBox from './components/DetailBox';
import RegisterBox from './components/RegisterBox';

class HomePage extends PureComponent {
	render() {
		return (
			<div>
				<Header />
				<Banner />
				<RegisterBox />
				<DetailBox />
				<Advertise />
				<Footer />
			</div>  
		);
	}
}

export default HomePage;