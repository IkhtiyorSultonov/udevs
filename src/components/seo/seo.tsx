import Head from 'next/head';
import { SeoProps } from './seo.props';
import { siteConfig } from '@/config/site.config';
const Seo = (props: SeoProps) => {
	const {
		children,
		metaTitle = siteConfig.metaData.title,
		metaDescription = siteConfig.metaData.description,
		metaKeyword = siteConfig.metaData.keyword,
	} = props;

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />
				<title>{metaTitle}</title>

				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				<meta name='keyword' content={metaKeyword} />
				<meta name='author' content={siteConfig.metaData.author} />
				<meta name='description' content={metaDescription} />

				<meta property='og:title' content={metaTitle} />
				<meta property='og:description' content={metaDescription} />
				<meta property='og:image:height' content='630' />
				<meta property='og:image:width' content='1200' />
				<meta property='og:locale' content='uz_UZ' />

				<meta name='twitter:title' content={metaTitle} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:description' content={metaDescription} />
				<link rel='shortcut icon' href={siteConfig.favicon} type='image/x-icon' />
			</Head>
			<>{children}</>
		</>
	);
};

export default Seo;