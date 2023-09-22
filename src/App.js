import './App.sass';
import {
	collectionDataWomen,
	collectionDataMen,
	inlineBannerData,
	showcaseData,
	followUsData
} from './consts'
import Nav from './Components/Sections/Nav'
import Carousel from './Components/Sections/Showcase';
import Collection from './Components/Sections/Collection';
import InlineBanner from './Components/Sections/InlineBanner';
import FollowUs from './Components/Sections/FollowUs';
import Footer from './Components/Sections/Footer';

function App() {
	return (
		<div className="App mb-5">
			<Nav/>
			<Carousel data={showcaseData}/>
			<div className='container-lg'>
				<Collection data={collectionDataWomen}/>
				<InlineBanner data={inlineBannerData}/>
				<Collection data={collectionDataMen}/>
				<FollowUs data={followUsData}/>
				<hr/>
				<Footer />
			</div>
		</div>
	);
}

export default App;
