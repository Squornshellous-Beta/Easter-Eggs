module.exports = {
	title:"Easter Eggs",
	summary:"Notifies the reader of hidden easter eggs in interactive Flashes.",
	author:"Squornshellous Beta",
	modVersion:1.1,
	
	edit(archive) {
		for (var i in eggs) archive.mspa.story[i].content+="<br /><br /><i>(This page contains an easter egg! "+eggs[i]+")</i>";
	},
};
eggs={
	"002153":"Press ctrl-T in the flash to activate/deactivate. Click on the house's chimney to find a secret area.",
	"002297":"Press ctrl-T in the flash and enter code 024913 to activate.",
	"002838":"Click the link in the corner at the end to activate.",
	"004692":"Press ctrl-T in the flash to activate; exit room to deactivate.",
	"004979":"Press ctrl-T in the mushroom farm area and enter code \"shoosh:doof\" to activate.",
	"005221":"Press ctrl-T in the flash to activate/deactivate.",
	"006273":"Click the link in the corner at the end to activate.",
	"006517":"Click the link in the corner at the end to activate.",
	"006927":"Click the link in the corner at the end to activate.",
	"007298":"Visit the exposition booth as Damara to activate.",
	"007931":"Click the replay button at the end of the flash to activate.",
	"007946":"Catch the replay button at the end of the flash to activate.",
	"007966":"Click the replay button at the end of the flash to activate.",
	"007973":"Click the replay buttons at the end of the flash to activate.",
	"008143":"Click the ==> before the end of the flash to activate. (There are two messages during the song, and one during the applause.)",
};
