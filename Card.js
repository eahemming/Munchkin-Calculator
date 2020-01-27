function PlayerCard(ID) {
	this.card = document.getElementById("card-template").content.cloneNode(true);
	this.id=ID;
	this.dragging = false;
	this.mousein = false;
}