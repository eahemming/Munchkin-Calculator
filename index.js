var app = document.getElementById("app");
app.style.width="100%";
app.style.height=""+app.clientWidth/16*9+"px";

window.onresize=function(){
	app.style.height=""+app.clientWidth/16*9+"px";
}

var players = [];

function addPlayer() {
	if (players.length < 5) {
		var player = new PlayerCard(players.length);
		players.push(player);
		app.appendChild(player.card);
		$(".player-card").draggable();
	}
}

$(".combat-tray").droppable({
	tolerance:'touch',
	over: function(event, ui){
		$(this).addClass('combat-tray-hover');
		$(this).removeClass('combat-tray');
	},
	out: function(event, ui){
		$(this).addClass('combat-tray');
		$(this).removeClass('combat-tray-hover');
	}
});