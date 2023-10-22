import Button from 'react-bootstrap/Button';
import potOfGold from '../assets/pot-of-gold.jpeg';

const Home = () => {
	return (
		<article className='home'>
			<h2>💰 Welcome to Michael Kleemoff&apos;s Budgtr App 💰</h2>
			<h4>There is no place like Home...</h4>
			<img className='mt-4' src={potOfGold} alt='Pot of Gold' />
			<Button
				// href='/transactions'
				className='btn-home'
				variant='success'
				size='lg'
			>
				🏦 See All Transactions 🏦
			</Button>
		</article>
	);
};

export default Home;
