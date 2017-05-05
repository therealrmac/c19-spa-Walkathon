console.log('donor has loaded');
Donor= (function(donor){

var donInf= [];
var divCont;

	return{
		newDonor: function(name, ammount, pledge){
			donInf.push({"name": name,"ammount": ammount,"pledge": pledge});
			for(var i=0; i<donInf.length; i++){
				divCont ="<tr>"+
				 "<td>"+ donInf[i].name+ "</td>"+
				 "<td>"+ donInf[i].ammount+ "</td>"+
				"<td>"+ donInf[i].pledge+ "</td>"+
				"</tr>";
			}
		},
		getDonor: function(){
			return divCont;
		}
	}

})()