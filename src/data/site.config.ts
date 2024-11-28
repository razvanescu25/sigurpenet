interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: 'Your Name', // Site author
	title: 'Sigur Pe Net', // Site title.
	description: 'The place where we discuss internet safety and best practices to stay tech-healthy', // Description to display in the meta tags
	lang: 'ro-RO',
	ogLocale: 'ro_RO',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
