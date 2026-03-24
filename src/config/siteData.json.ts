export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "RinggitRealms",
	// Your website's title and description (meta fields)
	title: "RinggitRealms - Your Ultimate Guide to Malaysian News",
	description:
		"RinggitRealms is your go-to source for the latest news, insights, and analysis on all things Malaysian. From politics and economy to culture and lifestyle, we cover it all. Stay informed and engaged with RinggitRealms, where we bring Malaysia to your fingertips.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "RinggitRealms Team",
		email: "ringgitrealms@gmail.com",
		twitter: "RinggitRealms",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/ringgitrealms-logo.jpg", 
		alt: "RinggitRealms logo",
	},
};

export default siteData;
