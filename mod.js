module.exports = {
	title:"Easter Eggs",
	summary:"Notifies the reader of hidden easter eggs in interactive Flashes.",
	author:"Squornshellous Beta",
	modVersion:1.0,
	
	edit(archive) {
		for (var i in eggs) archive.mspa.story[i].content+="<br /><br /><i>(This page contains an easter egg! "+eggs[i]+")</i>";
	},
};
eggs={
	"002153":"Press ctrl-T in the flash to activate/deactivate.",
	"002297":"Press ctrl-T in the flash and enter code 024913 to activate.",
	"002838":"Click the link in the corner at the end to activate.",
	"004692":"Press ctrl-T in the flash to activate; exit room to deactivate.",
	"004979":"Press ctrl-T in the mushroom farm area and enter code \"shoosh:doof\" to activate.",
	"005221":"Press ctrl-T in the flash to activate/deactivate.",
	"006273":"Click the link in the corner at the end to activate.",
	"006517":"Click the link in the corner at the end to activate.",
	"006927":"Click the link in the corner at the end to activate.",
	"007298":"Visit the exposition booth as Damara to activate."
};