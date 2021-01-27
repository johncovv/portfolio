export interface Project {
	name: string;
	alias?: string;
	url?: string;
	detailsUrl?: string;
	uiDesign?: { type: 'Figma' | 'Adobe XD' | 'Photoshop'; url: string };
	github?: string;
	alert?: { type: 'error' | 'warning' | 'success'; message: string };
	description: string;
	images?: Array<{ title?: string; url: string }>;
	technologies?: Array<{ name: string; url: string }>;
	partners?: Array<{ name: string; url: string; job: string }>;
}

export default [
	{
		name: 'ExReality',
		alert: {
			type: 'error',
			message: 'Este projeto saiu do ar em Dezembro de 2020!',
		},
		url:
			'https://www.teatroportoseguro.com.br/programacao/realizados/exreality.html',
		detailsUrl: '/project/ExReality',
		github: '',
		description:
			'O projecto **ExReality** foi criado para apresentação de uma peça de teatro online em meio a pandemia de 2020.\nO objetivo do projeto era apresentar a peça onde o público tivesse acesso 24h/s por dia a interações com os atores via Chat e Enquetes, tento impacto direto na apresentação.',
		images: [
			{ url: 'https://i.imgur.com/QjAbbvY.png' },
			{ url: 'https://i.imgur.com/ai7RtMT.png' },
		],
		partners: [
			{
				name: 'BNP Soluções',
				url: 'https://bnpsolucoes.com.br/',
				job: 'Desenvolvimento de infra e backend em NodeJs.',
			},
		],
		technologies: [
			{ name: 'React', url: 'https://pt-br.reactjs.org/' },
			{
				name: 'React Icons',
				url: 'https://react-icons.github.io/react-icons/',
			},
			{
				name: 'Axios',
				url: 'https://github.com/axios/axios',
			},
			{
				name: 'Styled Components',
				url: 'https://styled-components.com/',
			},
		],
	},
	{
		name: 'Mp Auto',
		alias: 'MpAuto',
		url: 'https://mpauto.com.br',
		detailsUrl: '/project/MpAuto',
		github: '',
		description:
			'Neste projeto o objetivo era montar uma plataforma para apresentação de veículos da concessionária **Mp Auto** estabelecida na cidade de **Cotia - SP**.\n\nA plataforma tem ferramentas avançadas como pesquisa com filtros, galeria de fotos com carrossel, criação dinâmica de panfleto com informações do veículo para download e etc.',
		images: [
			{ title: 'Pagina Home', url: 'https://i.imgur.com/n3i8Zop.png' },
			{
				title: 'Detalhes do veículo (popup)',
				url: 'https://i.imgur.com/GGqbcBA.png',
			},
			{
				title: 'Pesquisa de veículos (popup)',
				url: 'https://i.imgur.com/dZgd4Fb.png',
			},
			{ title: 'Pagina de estoque', url: 'https://i.imgur.com/RFQFyRm.png' },
			{ title: 'Pagina de notícias', url: 'https://i.imgur.com/i0aVEXU.png' },
			{ title: 'Notícia aberta', url: 'https://i.imgur.com/QY0fu8m.png' },
		],
		partners: [
			{
				name: 'Lucas Nicolau',
				url: 'https://ndev.cf/',
				job: 'Desenvolveu Back-End do sistema em PHP.',
			},
		],
		technologies: [
			{ name: 'Html5', url: 'https://github.com/topics/html5' },
			{
				name: 'Javascript',
				url: 'https://github.com/topics/javascript',
			},
			{
				name: 'Scss (Sass)',
				url: 'https://sass-lang.com/',
			},
			{
				name: 'Carousel Slick',
				url: 'https://kenwheeler.github.io/slick/',
			},
		],
	},
	{
		name: 'Devian Bot',
		alias: 'Devian',
		alert: { type: 'warning', message: 'Projeto em desenvolvimento!' },
		url: 'https://devian.johncovv.com',
		detailsUrl: '/project/Devian',
		uiDesign: {
			type: 'Figma',
			url:
				'https://www.figma.com/file/tOYHJHpGJ9s4vBL6sqbRnG/Devian-Frontend?node-id=1%3A21',
		},
		github: 'https://github.com/johncovv/devian/',
		description:
			'Este é um projeto **pessoal**, onde o objetivo inicial era aprender a desenvolver um bot para **Discord** rodando em **Nodejs**.\nApós terminar os comandos básicos, decidi criar também um correspondente web, onde os administradores de servidores(Discord) poderiam configurar o bot facilmente pela plataforma.',
		images: [
			{
				title: 'Site completo com menus fechados',
				url: 'https://i.imgur.com/BBHW1TL.png',
			},
			{
				title: 'Site completo com menus abertos',
				url: 'https://i.imgur.com/otW2X59.png',
			},
			{ title: 'Painel de convite', url: 'https://i.imgur.com/QzUrDFu.png' },
			{
				title: 'Menu grupo de comandos',
				url: 'https://i.imgur.com/nTWj6uC.png',
			},
			{
				title: 'Output no terminal',
				url: 'https://i.imgur.com/4Tvscnq.png',
			},
		],
		technologies: [
			{ name: 'React', url: 'https://pt-br.reactjs.org/' },
			{
				name: 'React Icons',
				url: 'https://react-icons.github.io/react-icons/',
			},
			{
				name: 'Axios',
				url: 'https://github.com/axios/axios',
			},
			{
				name: 'Styled Components',
				url: 'https://styled-components.com/',
			},
		],
	},
] as Array<Project>;
