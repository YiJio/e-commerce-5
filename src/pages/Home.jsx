import React from 'react';

import { LandingSection, HighlightsSection, FeaturedSection, DiscountedSection, ExploreSection } from '../components/sections';

const Home = ({ books }) => {
	return (
		<main>
			<LandingSection />
			<HighlightsSection />
			<FeaturedSection />
			<DiscountedSection />
			<ExploreSection />
		</main>
	)
}

export default Home;