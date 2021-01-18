"use strict";
const tech = {
	"A": ["AVA", "Angular", "Angular.js", "Aurelia", "Apache", "Anime.js", "Axios", "Alpine.js", "Ant Design", "ASP.NET", "Adonis", "ActionScript", "AngularDart", "AOS", "Apollo", "Auth0"],
	"B": ["Backbone.js", "Bootstrap", "Bulma", "Blitz", "Blazor", "Babel", "Bolt", "Browserify"],
	"C": ["Chart.js", "Chakra UI", "CSS", "Capacitor", "CoffeScript", "CodeIgniter", "CakePHP", "Clipboard.js", "CodeMirror", "CherryPi", "Cowboy", "CSS Reset", "ClojureScript", "Cordova", "Cypress"],
	"D": ["DayJS", "day-fns", "Deno", "Django", "Dart", "Dojo", "Dojo Toolkit", "D3"],
	"E": ["Electron", "Express", "EJS", "ESLint", "Expo", "EasyServer", "Electrotank", "ExtJS", "Ember.js", "Exhibit", "Elm"],
	"F": ["Formik", "Faker", "Feathers", "Foundation", "Firebase", "Flask", "Adobe Flash" /* flash is really good you should try it */, "Flutter", "FaunaDB"],
	"G": ["GraphQL", "Gatsby", "Gridsome", "Git", "GitHub", "GitLab", "GSAP", "Gulp", "Grunt"],
	"H": ["Hyperapp", "HTML5", "HTML5 Boilerplate", "htmx", "Hapi", "Handlebars", "Hammer.js", "Highlight.js", "Highway.js"], // H
	"I": ["Ionic"],
	"J": ["JavaScript", "JSX", "JEST", "JSON", "Joomla", "Jasmine", "jQuery", "jQuery UI", "jQuery-pjax", "jQuery Mobile", "jQTouch"],
	"K": ["Knockout.js", "Koa"],
	"L": ["Laravel", "Lightbox", "Less"],
	"M": ["MobX", "MathJax", "Marionette.js", "Meteor", "MariaDB", "MySQL", "MongoDB" /* mongodb is the worst you should never use it */, "Mobify", "Moon", "Modern-Normalize", "MooTools"],
	"N": ["Next", "Nuxt", "Ngnix", "Nette Framework", "Normalize", "Node.js"],
	"O": ["OpenResty", "OpenUI5", "Odoo"],
	"P": ["PHP" /* php is the best */, "Percona", "PDF.js", "Prism", "Parcel", "Prefix-free", "Pygments", "PIXIjs", "Phaser", "PureScript", "Preact", "PostgreSQL", "Puppeteer"],
	"Q": ["qooxdoo"],
	"R": ["React", "Redux", "React Native", "Reason", "Relay", "Raphael", "RequireJS", "Revslider", "Rollup", "Ruby on Rails", "Redis", "Reveal.js", "RxJS"],
	"S": ["Storybook", "Stimulus", "Socket.io", "Squarespace", "SharePoint", "Swiper Slider", "SWFObject", "Solr", "styled-components", "Svelte", "Spring", "Sass", "SCSS"],
	"T": ["three.js", "TypeScript", "Tailwind CSS"],
	"U": ["Umi"],
	"V": ["Vue", "VuePress", "Vite", "VitePress"],
	"W": ["Wordpress", "webpack", "Webix", "Wink"],
	"X": ["XML"],
	"Y": ["YAML"],
	"Z": ["Zendesk", "Zone.js"]
};
let blink_speed = 1000;
let t = setInterval(function () {
	let ele = document.querySelector('.blink');
	ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

document.addEventListener("keyup", (e) => {
	if (e.key.toUpperCase() == "BACKSPACE") {
		document.querySelector(".inp").innerText = "";
	} else {
		document.querySelector(".inp").innerText += e.key.toUpperCase();
		let th = "";
		[...document.querySelector(".inp").innerText].forEach(elem => {
			th += tech[elem][Math.floor(Math.random() * tech[elem].length)] + " / ";
		});
		document.querySelector("#tehc").innerText = th;
	};
});