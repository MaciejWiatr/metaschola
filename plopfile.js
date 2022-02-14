module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Create a new component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the component?',
			},
			{
				type: 'input',
				name: 'domain',
				message: 'What is the domain of the component?',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/features/{{domain}}/components/{{properCase name}}/{{properCase name}}.tsx',
				templateFile: '.plop/templates/Component.hbs',
			},
			{
				type: 'add',
				path: 'src/features/{{domain}}/components/{{properCase name}}/{{properCase name}}.styles.tsx',
				templateFile: '.plop/templates/Component.styles.hbs',
			},
			{
				type: 'add',
				path: 'src/features/{{domain}}/components/{{properCase name}}/index.tsx',
				templateFile: '.plop/templates/Component.index.hbs',
			},
		],
	});
};
