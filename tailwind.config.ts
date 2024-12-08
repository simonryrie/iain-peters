import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Lato'],
			serif: ['Gentium'],
			body: ['Lato']
		},
		extend: {
			fontFamily: {
				Courgette: ['courgette'],
				ContrailOne: ['contrail-one'],
				Bentham: ['bentham'],
				Signika: ['signika'],
				Thasadith: ['thasadith'],
				Cabin: ['cabin'],
				Lato: ['lato'],
				Bitter: ['bitter'],
				Junge: ['junge'],
				Gentium: ['gentium']
			},
			colors: {
				'off-white': '#ebe9e6',
				'dark-brown': '#241c11'
			}
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} as Config;
