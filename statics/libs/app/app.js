APPNAME = 'lab'
getPartial = function( path )
{
	return './statics/partials/' + path;
} 

angular
	.module( APPNAME, ['ui.router'])
;

console.group('Good day to you sir!');
console.log("         #              ");
console.log("        ###             ");
console.log("      ### ###           ");
console.log("     ###   ###          ");
console.log("   ###         #######  ");
console.log("  ###       #######     ");
console.log(" #########     ###      ");
console.log("###.            ###     ");
console.log('');
console.log("I'm a freelance creative technologist.");
console.log("You have a project? Let's talk!");
console.log('hello@alexandremasy.com');
console.log('http://linkedin.com/in/amasy/');
console.log('');
console.log("You want more ?");
console.log("http://github.com/ahsx");
console.log("http://twitter.com/beg_sleep");
console.log('');
console.groupEnd('Good day to you sir!')