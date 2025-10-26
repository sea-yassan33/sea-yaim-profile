import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images:{
	  remotePatterns:[
		{
		  protocol: "https",
		  hostname: "i.gyazo.com",
		},
		{
		  protocol: "https",
		  hostname: "dummyimage.com",
		},
		{
		  protocol: "https",
		  hostname: "images.unsplash.com",
		},
		{
		  protocol: "https",
		  hostname: "img.youtube.com",
		}
	  ]
	}
};

export default nextConfig;
