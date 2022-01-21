// JavaScript Document
function mostrarValoracion()
{
	alert("Has valorado con " +document.getElementById('rango').value+ " puntos");
}

	
 function mostrarCuenta()
{
	var banco1=document.getElementById('banco1').value;
	var banco2=document.getElementById('banco2').value;
	var banco3=document.getElementById('banco3').value;
	var banco4=document.getElementById('banco4').value;
	var banco5=document.getElementById('banco5').value;
	var banco6=document.getElementById('banco6').value;
	
	alert("Le informamos que su cuenta bancaria es: " + banco1+banco2+"-"+banco3+"-"+banco4+"-"+banco5+"-"+banco6 );
	
}


function mostrarDia()
{
	var d = new Date (document.getElementById("fecha").value);
	var dia= new Array(7);
	dia[0]= "Domingo";
	dia[1]= "Lunes";
	dia[2]= "Martes";
	dia[3]= "Miercoles";
	dia[4]= "Jueves";
	dia[5]= "Viernes";
	dia[6]= "Sabado";
	var ds=dia[d.getDay()];	
	alert('La fecha seleccionada en el elemento de fecha es un '+ (document.getElementById("fecha").innerHTML=ds) );
}

