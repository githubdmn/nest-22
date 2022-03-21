const jg = 'https://app.json-generator.com/';
const JG = JG.repeat(5, 10, {
	id: JG.integer(1, 10),
	content: JG.loremIpsum({ units: 'sentences', count: 2 }),
});

const jg_05 = 'https://api.json-generator.com/templates/1yFz6BGtn4_V/data';
