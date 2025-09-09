const experiences = [
	{
		title: 'Analyst Programmer',
		at: { title: 'Schooltracs Co. Ltd (Singapore)', url: 'https://www.linkedin.com/company/schooltracs-ltd' },
		time: '2024 Nov - 2025 Jun',
		summary:
			'Developed backend features in Laravel, maintained automated tests, resolved issues across platforms, and delivered UX improvements while collaborating on scheduling, notifications, and reporting.',
		description: `-x- Designed and built backend features using Laravel and different tools, such as configurable lesson schedules, leave rules, package fee logic, and journal exports for schools.
        -x- Provided bi-weekly on-call support to troubleshoot and resolve live production issues.
        -x- Maintained automated tests (Playwright) and ensured data consistency across modules.
        -x- Resolved frontend and backend issues across web platforms and mobile apps.
        -x- Delivered UX improvements and feature enhancements based on stakeholder feedback.
        -x- Collaborated with other developers to ship improvements in scheduling, notifications, and reporting.`,
	},
	{
		title: 'Frontend Web Developer',
		at: { title: 'Schooltracs Co. Ltd (Singapore)', url: 'https://www.linkedin.com/company/schooltracs-ltd' },
		time: '2022 Nov - 2024 Nov',
		summary:
			'Redesigned and refactored React apps to improve UX, collaborated on UI/UX updates, and migrated a student app to Expo while helping launch a new teacher app. Implemented a Stripe/Xero checkout system, built features across Laravel + GraphQL backends and frontends, and rebuilt the company website with Hugo and TailwindCSS for better usability.',
		description: `-x- Worked on redesigning and refactoring several React web applications, improving the user experience.
-x- Collaborated with designers to implement UI/UX updates, ensuring alignment with project goals.
-x- Migrated a student mobile app to an Expo-managed codebase, contributing to the launch of a new mobile app for teachers.
-x- Implemented an online checkout system with Stripe and Xero, improving overall payment experience.
-x- Developed features for the frontend while implementing backend functionality using Laravel and GraphQL.
-x- Rebuilt the company website using Hugo and TailwindCSS, resulting better usability and design.`,
	},
]

const educations = [
	{
		title: 'Computer Science (B.Sc.)',
		at: { title: "King Mongkut's University of Technology Thonburi", url: 'https://www.kmutt.ac.th/en' },
		time: '<span>2025 Aug - 2029 July</span>',
		description: 'Java, OOP, Calculus, Discrete Mathematics',
		// 'Learned the history of computing, fundamental of programming, algorithms and problem solving tactics using C programming language',
	},
	{
		title: 'Electronic and Communication Engineering, B.E. (Hons.)',
		at: { title: 'Myanmar Institute of Information Technology', url: 'https://miit.edu.mm/' },
		time: '<span>2019 Dec - 2020 May</span>',
		description: 'Learned the history of computing, fundamental of programming, algorithms and problem solving tactics using C programming language',
	},
]

const projects = [
	{
		id: 0,
		title: 'QR Dine',
		content: `Restaurant QR menu and ordering system`,

		thumbnail: 'https://raw.githubusercontent.com/zayarlyn/qrdine/8cdb3b7511b7fba0b69decb3edeccef2d8aa0ed1/doc/logo.svg',
		// date: '2024 Nov 23',
		// location: 'Bangkok',
		link: 'https://github.com/zayarlyn/qrdine',
		tech_stack: ['Fastify', 'Postgres', 'Docker', 'React (NextJS)', 'GraphQL'],
	},
	{
		id: 1,
		title: 'Myanmar Unicode Keyboard',
		content: `Online keyboard for Myanmar Unicode layout
    - bind to physical keyboard/touch
    - easy key mappings`,

		thumbnail: '/img/111.png',
		// date: '2024 Nov 23',
		// location: 'Bangkok',
		link: 'https://zayarlyn.github.io/Unicode-Myanmar-Keyboard/',
		tech_stack: ['Javascript', 'CSS', 'HTML'],
	},
]

const highlights = [
	{
		id: 'aws-community-day-myanmar-2024',
		title: 'AWS Community Day Myanmar 2024',
		content:
			'The event brought together some of the most brilliant minds in Myanmar’s tech community, and the sessions were packed with valuable insights on AWS, cloud best practices, and real-world success stories. From networking with fellow tech enthusiasts to learning from industry leaders, it was truly a day of growth and innovation.',
		media: [{ uri: '/img/highlight-1.webp', type: 'image/webp', alt: '' }],
		// date: '2024 Nov 23',
		timestamp: '2024-11-23T00:00:00Z',
		location: '',
		link: 'https://www.linkedin.com/posts/kaungthant1083_awsugmm-awscommunity-awsusergroupmeetup-activity-7202878134067630080-ztQt',
	},
]

const socials = [
	{ type: 'email', title: 'Email', link: 'mailto:hello@zayarlyn.com', ariaLabel: "View Zayar Lin's Twitter" },
	{ type: 'github', title: 'Github', link: 'https://github.com/zayarlyn', ariaLabel: "View Zayar Lin's Github" },
	{
		type: 'linkedin',
		title: 'Linkedin',
		link: 'https://linkedin.com/in/zayarlyn',
		ariaLabel: "View Zayar Lin's Linkedin",
	},
	// { icon: IconBrandX, title: 'Twitter', link: 'https://twitter.com/zayarlyn', ariaLabel: "View Zayar Lin's Twitter" },
]

export const db = {
	name: 'Zayar Lin',
	nameIpa: '/Zayar lɪn/',
	role: 'Software Engineer',
	location: 'Bangkok, Thailand',
	bio: 'As a programmer, I am on a voyage to develop tools with real-world impact.<br /> I expertise in <b>React</b>, <b>React Native (Expo)</b>, <b>NextJS</b>, <b>NestJS</b> and <b>GraphQL</b> and actively expanding my scope into backend development and system design. <br />',
	experiences,
	educations,
	projects,
	highlights,
	socials,
}
