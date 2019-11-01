import React from 'react';
import { useFetch } from '../../utils/fetchData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Advertise from './components/Advertise';
import Banner from './components/Banner';
import DetailBox from './components/DetailBox';
import RegisterBox from './components/RegisterBox';

const HomePage = () => {
	const [data, loading] = useFetch();
	const { navbarItems, duration, detail, condition } = data

	return (
		<div>
			<Header navbarItems={navbarItems}/>
			<Banner />
			<RegisterBox duration={duration} />
			<DetailBox detail={detail} condition={condition} />
			<Advertise />
			<Footer />
		</div>  
	);
}

export default HomePage;