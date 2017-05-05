console.log('main.js has loaded');
$(document).ready(function (){
var inputName= $("#name");
var donateBtn= $("#donate");
var cancelBtn= $("#cancel");
var single= $("#single");
var perlap= $("#perlap");
var output= $("#output");
var ammount= $("#ammount");
var selected;
var pledge="";

single.on('click', function(event){
	single.prop('checked', true);
});
perlap.on('click', function(event){
	perlap.prop('checked', true);
});
donateBtn.on('click', function(event){
	var donName= inputName.val();
	var donAmmount= ammount.val();
	console.log(single.prop("checked"))
	if(single.prop("checked")){
		pledge= "Single Donation";
	} else if(perlap.prop("checked")){
		pledge= "Per lap";
	};
	Donor.newDonor(donName, donAmmount, pledge);
	output.append(Donor.getDonor);
});
 
cancelBtn.on('click', function(event){
	inputName.val("");
	single.prop('checked', false);
	perlap.prop("checked", false);
	ammount.val("");
});
});