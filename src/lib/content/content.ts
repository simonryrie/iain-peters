export const description: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis dui mauris. Etiam a purus facilisis, tincidunt arcu eget, hendrerit eros. Aliquam id imperdiet ante, eget cursus orci. Aliquam venenatis, libero vel feugiat interdum, tortor risus volutpat elit, id imperdiet neque enim vel mi. Curabitur volutpat mi non nibh eleifend, non sollicitudin erat condimentum. Nullam ullamcorper, elit id maximus suscipit, justo enim consectetur elit, non aliquet ex orci at lorem. Nunc eget augue vel tellus consectetur ultrices. Fusce eu odio id lectus sagittis efficitur et a tortor.

Donec pellentesque eget nibh sit amet imperdiet. Phasellus ac commodo velit. Vestibulum diam sem, ullamcorper ut luctus ut, hendrerit sit amet elit. Proin accumsan porta lacinia. Sed placerat maximus luctus. Phasellus sit amet dolor at est maximus fringilla eu in eros. Aenean iaculis lorem nec tortor vulputate, vitae condimentum ipsum feugiat. Sed tempus risus non sem elementum gravida. In rhoncus, risus a suscipit dapibus, lectus velit efficitur mi, non eleifend quam tellus at nisl. Aenean tellus magna, cursus ut lectus et, posuere semper turpis. Sed ornare interdum tortor, sed consectetur ipsum luctus id. Fusce tincidunt nulla vel mi tristique vestibulum. Cras condimentum ullamcorper massa, et semper tellus eleifend in.`;

export type Quote = {
	quote: string;
	author: string;
	position: string;
};
export const quotes: Quote[] = [
	{
		quote:
			'The Corridor is beautifully written, full of detail that paints a vivid picture of place, time, events and relationships without a consuming focus on the brutality. It is both intelligent and compassionate, portraying the long-term impact of the abuse through his life as a climber. The focus on survival strategies and reflective analysis is what makes it possible to read this book without falling into a pit of despair and instead to recognise a life fulfilled and lived with joy despite its early trauma.',
		author: 'Dr. Joanna Liddle',
		position:
			"Co-founder of the Centre for the Study of Women and Gender: University of Warwick. Founder member of Hereford Women's Aid Refuges"
	},
	{
		quote:
			"Iain Peters's pitch perfect writing leads you into his world. There is a universal quality to the book, which makes it widely accessible and gives voice - and hope - to the men and women who have experiences that echo his own.",
		author: 'Dr. Elizabeth Peretz',
		position: 'Associate fellow, Department of Social Policy and Intervention, University of Oxford'
	}
];
