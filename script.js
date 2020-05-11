
var vdpret = [
'0032','0127','0237','0422','0440','0454','0505','0515','0525','0535','0545',
'0555','0605','0615','0625','0635','0645','0655','0705','0715','0725','0735',
'0745','0755','0805','0815','0825','0837','0845','0855','0905','0916','0927',
'0939','0951','1003','1015','1027','1039','1051','1105','1119','1133','1148',
'1204','1219','1234','1249','1303','1318','1333','1348','1403','1418','1433',
'1448','1503','1518','1533','1547','1601','1615','1629','1643','1655','1705',
'1718','1733','1750','1802','1815','1835','1849','1902','1917','1928','1940',
'1953','2003','2016','2030','2045','2059','2115','2133','2159','2223','2248',
'2313','2345']

var retvdp = [
'0130','0311','0331','0401','0414','0428','0441','0457','0509','0523',
'0544','0614','0624','0640','0654','0709','0734','0744','0800','0816',
'0832','0846','0858','0914','0926','0940','0955','1010','1026','1041',
'1056','1111','1125','1140','1155','1210','1225','1240','1255','1310',
'1324','1339','1353','1407','1421','1434','1447','1459','1511','1521',
'1531','1543','1555','1605','1615','1625','1635','1645','1655','1705',
'1715','1725','1735','1745','1757','1808','1818','1829','1841','1853',
'1905','1917','1929','1941','1953','2005','2018','2030','2042','2056',
'2110','2125','2140','2159','2230','2310','2340']

var curet = [
'0022','0422','0447','0509','0532','0547','0604','0619','0633','0646','0700','0714',
'0727','0740','0752','0805','0817','0830','0842','0856','0908','0920','0932','0946',
'0958','1013','1028','1043','1057','1116','1130','1146','1202','1219','1232','1248',
'1304','1319','1334','1349','1410','1424','1440','1456','1510','1526','1542','1555',
'1610','1627','1640','1655','1710','1723','1739','1752','1805','1818','1831','1844',
'1857','1910','1923','1936','1949','2002','2015','2028','2041','2054','2111','2126',
'2141','2156','2212','2226','2245','2305','2326','2352']

var retcu = [
'0015','0050','0440','0505','0529','0552','0614',
'0628','0640','0658','0708','0723','0738','0751','0803','0814','0830','0847','0900',
'0916','0933','0946','1003','1018','1036','1049','1105','1122','1138','1151','1208',
'1221','1240','1255','1310','1327','1340','1355','1410','1429','1444','1459','1510',
'1525','1540','1553','1606','1619','1632','1645','1658','1711','1724','1737','1750',
'1803','1816','1829','1842','1855','1908','1921','1934','1947','2000','2015','2030',
'2045','2100','2115','2130','2145','2200','2215','2230','2250','2315','2345']

function clock(){
	var c = document.getElementById("clock");
	setInterval(
		timeIs
		,1);
	function timeIs(){		
		var d = new Date();
		if (d.getMinutes()<10) {

			if (d.getSeconds()<10) {
				c.innerHTML = d.getHours()+":0"+d.getMinutes()+":0"+d.getSeconds();
			}else{
				c.innerHTML = d.getHours()+":0"+d.getMinutes()+":"+d.getSeconds();
			};
		}else{
			if (d.getSeconds()<10) {
				c.innerHTML = d.getHours()+":"+d.getMinutes()+":0"+d.getSeconds();
			}else{
				c.innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
			};
		};
	}
}


		
function horarios(ramal, linea, bases){
		var name1 = ramal+"1";
		var name2 = ramal+"2";
		var name3 = ramal+"3";
		var name4 = ramal+"4";
		var sp = document.getElementById(name1);
		var sp2 = document.getElementById(name2);
		var sp3 = document.getElementById(name3);
		var sp4 = document.getElementById(name4);
		var sch = document.getElementById(ramal);
		var base = bases;
		var f = new Date();
		var comp = "";
		var tiemp = "";

		switch(ramal){
			case 'vdpretsch': var tiemp = "24"; break;
			case 'retvdpsch': var tiemp = "24"; break;
			case 'curetsch': var tiemp = "12"; break;
			case 'retcusch': var tiemp = "12"; break;
		}
		
		if (sch.classList.contains("show")) {
			sch.classList.remove("show");	
		}else{
			sch.className = "show";		
		}

		if(f.getHours()<10){
			if(f.getMinutes()<10){
				var comp = "0"+f.getHours()+"0"+f.getMinutes();
			}else{
			var comp = "0"+f.getHours()+f.getMinutes();
			};
		}else{
			if(f.getMinutes()<10){
				var comp = f.getHours()+"0"+f.getMinutes();
				}else{
				var comp = ""+f.getHours()+f.getMinutes();
				};
		};
		
	
		if (sch.classList.contains("show")) {
			sch.style.display = "grid";
			for (var i = 0; i < base.length; i++) {
					
						if (i<base.length-2) {
								if (comp<Number(base[i])) {
									sp.innerHTML = "<small>Proximo tren a</small><br><strong>"+linea+"</strong><br>"+base[i]+" hs";
									sp2.innerHTML = "Siguiente: "+base[i+1]+" hs";
									sp3.innerHTML = "Siguiente: "+base[i+2]+" hs";
									sp4.innerHTML = "Tiempo a "+linea+": "+tiemp+" min";
								break;
							

								};
						}else{
						if (i=base.length-2) {
								if (comp<Number(base[i])) {
									sp.innerHTML = "<small>Proximo tren a</small><br><strong>"+linea+"</strong><br>"+base[i]+" hs";
									sp2.innerHTML = "Siguiente: "+base[i+1]+" hs";
									sp3.innerHTML = "Siguiente: "+base[0]+" hs";
									sp4.innerHTML = "Tiempo a "+linea+": "+tiemp+" min";
								break;
								};
						}
						if (i=base.length-1) {
							if (comp<base[i]) {
									sp.innerHTML = "<small>Proximo tren a</small><br><strong>"+linea+"</strong><br>"+base[i]+" hs";
									sp2.innerHTML = "Siguiente: "+base[0]+" hs";
									sp3.innerHTML = "Siguiente: "+base[1]+" hs";
									sp4.innerHTML = "Tiempo a "+linea+": "+tiemp+" min";
								break;
								};
						}
						if (i=base.length) {
							
									sp.innerHTML = "<small>Proximo tren a</small><br><strong>"+linea+"</strong><br>"+base[0]+" hs";
									sp2.innerHTML = "Siguiente: "+base[1]+" hs";
									sp3.innerHTML = "Siguiente: "+base[2]+" hs";
									sp4.innerHTML = "Tiempo a "+linea+": "+tiemp+" min";
								break;
			
						}
				}
			}
	
		};

	if (sch.classList.contains("show") == false) {
			sch.style.display = "none";
			/*sp.innerHTML = "";
			sp2.innerHTML = "";
			sp3.innerHTML = "";
			sp4.innerHTML = "";*/
		}


}



