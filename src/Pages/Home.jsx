import Button from 'react-bootstrap/Button';
import potOfGold from '../assets/pot-of-gold.jpeg';

function Home() {
	return (
		<>
			<aside className='Home'>
				<h2>💰 Welcome to Michael Kleemoff&apos;s Budgeting App 💰</h2>
				<h4>There is no place like Home...</h4>
				<img className='mt-4' src={potOfGold} alt='Pot of Gold' />
			</aside>
			<aside className='home-link mt-4'>
				<Button
					href='/transactions'
					className='home-link-button'
					variant='success'
					size='lg'
				>
					🏦 See All My Transactions 🏦
				</Button>
			</aside>
		</>
	);
}

export default Home;
