import monstera from '../assets/monstera.jpg'
import ficus from '../assets/ficus.webp'
import pothos from '../assets/pothos.png'
import yucca from '../assets/yucca.webp'
import olivier from '../assets/olivier.jpg'
import geranium from '../assets/geranium.jpg'
import basilic from '../assets/basilic.webp'
import aloe from '../assets/aloe.jpg'
import succulente from '../assets/succulente.jpg'

const plantList = [
	{
		name: 'Monstera',
		cover: monstera,
		category: 'Classique',
		id: '1ed',
		light: 2,
		water: 3,
		price: 13
	},
	{
		name: 'Ficus lyrata',
		cover: ficus,
		category: 'Classique',
		id: '2ab',
		light: 3,
		water: 1,
		price: 16
	},
	{
		name: 'Pothos argenté',
		cover: pothos,
		category: 'Classique',
		id: '3sd',
		isSpecialOffer: true,
		light: 1,
		water: 2,
		price: 14
	},
	{
		name: 'Yucca',
		cover: yucca,
		category: 'Classique',
		id: '4kk',
		light: 3,
		water: 1,
		price: 25
	},
	{
		name: 'Olivier',
		cover: olivier,
		category: 'Extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		price: 34
	},
	{
		name: 'Géranium',
		cover: geranium,
		category: 'Extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		price: 8
	},
	{
		name: 'Basilic',
		cover: basilic,
		category: 'Extérieur',
		id: '7ie',
		isSpecialOffer: true,
		light: 2,
		water: 3,
		price: 7
	},
	{
		name: 'Aloe',
		cover: aloe,
		category: 'Plante grasse',
		id: '8fp',
		isSpecialOffer: true,
		light: 2,
		water: 1,
		price: 12
	},
	{
		name: 'Succulente',
		cover: succulente,
		category: 'Plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		price: 10
	}
]

export default plantList