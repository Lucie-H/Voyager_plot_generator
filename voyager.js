
var what = [
	"a xenophobic alien race.",
	"a dark nebula.", 
	"a technically superior alien race.", 
	"a technically inferior alien race.", 
	"a war that isn't their own.",
	"reliving the memories of an alien race.", 
	"B'elanna getting very angry.", 
	"Tom Paris getting bored.", 
	"Harry Kim trying to get rid of his good-boy-image.", 
	"something with time travel.", 
	"an alien race consisting only of energy.",
	"a telepathic alien race.",
	"Neelix' dark past.",
	"the borg, or some unexpected variation of the borg.", 
	"a very hostile alien race.", 
	"a suspiciously friendly alien race.",
	"the Doctor fiddling with his holomatrix.", 
	"a distress call.",
	"Sevens struggle between borg and humanity.",
	"an unknown anomaly.",
	"a murderous AI.",
	"Neelix' cooking.",
	"Tom Paris' new Holodeck program.",
	"a temporal distortion.",
	"the Doctor falling in love. Again.",
	"the Vulcan Pon Farr causing an emotional hubbub.",
	"a potential wormhole to the alpha quadrant.",
	"a group of travelers from the alpha quadrant.",
	"a shortage of dilithium.",
	"a Y-class planet."
];

var during = [
	"the shields drop to 13%.",
	"there are hull breaches on decks nine and ten.", 
	"everyone falls asleep.", 
	"B'elanna gets very angry.",
	"someone gets imprisoned by an alien race for a crime they didn't commit.", 
	"Voyager is close to a warp core breach.", 
	"Tom Paris spends a lot of time on the Holodeck.",
	"someone gets infected by an alien parasite.", 
	"someone is suddenly acting strange.", 
	"they really believe for a moment they will get home soon.", 
	"Cpt. Janeway has a moment of weakness.", 
	"someone is on the brink of death.", 
	"someone has a love affair without future.", 
	"Neelix cooks something very disgusting.", 
	"the warp drive goes offline.", 
	"they realize they were deceived.", 
	"they lose yet another shuttle.",
	"some unnamed Crew member lose their live.",
	"the Voyager Crew has to reevaluate what it means to be human.",
	"the warp core has to be ejected.",
	"they send an away-team lead by Commander Tuvok.",
	"an away team of currently quarreling crew members gets trapped somewhere.",
	"they have to beam down to the planets' surface.",
	"the Holodeck malfunctions.",
	"the bioneural gel packs malfunction.",
	"Tom Paris develops an obsession.",
	"Seven of Nine commits a social faux-pas.",
	"the voyager is pulled into subspace.",
	"Harry Kim dies.",
	"Seven stands up to the Borg Queen.",
	"Cpt. Janeway does something ruthless.",
	"Seven of Nine accidentally shoots people.",
	"the Doctor experiments with daydreaming.",
	"Seven's Borg implants malfunction.",
	"Harry Kim gets put in charge.",
	"Chakotay says something spiritiually inspiring, with pan flutes playing in the background.", 
	"Chakotay contacts his spirit people.",
	"Chakotay explains the plot conundrum with a metaphor.",
	"B'elanna has an altercation with an artificial lifeform.",
	"Lieutenant Tuvok has to team up with Neelix.",
	"a crew member is possessed by an alien intelligence.",
	"a superior alien race infiltrates Voyager."
];


var solved = [
	"rerouting all power to the shields.",
	"a Vulcan mind meld.", 
	"a spirit quest.", 
	"the Doctor, who can't be harmed by the lethal radiation.", 
	"facing the fear.", 
	"a clever deception by Cpt. Janeway.", 
	"a containment field.", 
	"venting the plasma manifolds.", 
	"Kes leaving the ship.", 
	"banana pancakes.", 
	"giving up the hope of a fast way home.", 
	"sticking to their principles.",
	"reintegrating all the timelines.", 
	"doing what's right.", 
	"the power of diplomacy.", 
	"an unexpected alliance.", 
	"an antimatter explosion.", 
	"Borg technology.",
	"a last-minute launch of the Delta Flyer.",
	"Tuvok reminding everyone that fear is not rational.",
	"Neelix' cooking.",
	"photon torpedos, full spread.",
	"the Doctor's mobile emitter.",
	"Seven of Nine's Borg implants.",
	"Kes' telepathic abilities.",
	"B'elanna beating people up.",
	"Tuvok instructing someone in meditative techniques.",
	"Seven of Nine teaming up with Naomi Wildman.",
	"adapting Seven's nanoprobes.",
	"reversing Voyager's shield polarity.",
	"reversing Voyager's shield polarity.",
	"a sacrifice by a new ally."
];

var end = [
	"Harry Kim doesn't get the girl.", 
	"the Prime Directive once again proves to be right.", 
	"everyone laughs at Tom Paris.", 
	"Seven of Nine learns something about humanity.", 
	"everyone is humbled by the experience.", 
	"a lucky twist cuts a couple of years off their journey.", 
	"the Doctor develops a new subroutine.", 
	"everything is explained in a final Captain's Log-Voiceover.", 
	"the Borg are once more defeated.", 
	"the Voyager crew has made some new friends.", 
	"everything happened only to a crew of Doppelgangers.", 
	"time is turned back and nothing has happened.",  
	"they realize they won't get home any time soon.", 
	"they go to warp 9.", 
	"repair crews are on their way.", 
	"they go for drinks on the holodeck.",  
	"nothing has really changed.",
	"Harry Kim still doesn't get a promotion.",
	"Tom Paris gets demoted.",
	"Tom Paris gets promoted.",
	"Cpt. Janeway and Chakotay reconcile over dinner.",
	"B'elanna makes peace with her Klingon heritage.",
	"Cpt. Janeway has a chat with Leonardo DaVinci.",
	"Tom Paris conquers his inner demons.",
	"Neelix tries to get Tuvok to smile.",
	"Neelix gains renewed confidence in himself."
]

var makePlot = function(){
	var first = what[Math.floor(Math.random()*what.length)];
	var second = during[Math.floor(Math.random()*during.length)];
	var third = solved[Math.floor(Math.random()*solved.length)];
	var fourth = end[Math.floor(Math.random()*end.length)];
	var text = "<p>On their long voyage home, the crew of Voyager faces " + first + " During the encounter " 
		+ second + " Finally they can be saved by " + third + " In the end " + fourth + "</p>";
	$('.plot').html(text);
}


$('.plotbutton').click(function(){
	makePlot();
});

