var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
	var xmlHttpA;
	if (window.ActiveXObject) {
		try{
			xmlHttpA = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			xmlHttpA = false;
		}
	}else{
		try{
			xmlHttpA = new XMLHttpRequest();
		}catch(e){
			xmlHttpA = false;
		}
	}

	if (!xmlHttpA) 
		alert("Fail to build XMLHttpRequest object ");
	else
		return xmlHttpA;
}


function process() {
	if (xmlHttp.readyState==4 || xmlHttp.readyState==0) {
		var name = encodeURIComponent(document.getElementById('name').value);
		xmlHttp.open("GET", "check.php?name="+name, true);
		xmlHttp.onreadystatechange = handleServerResponse;
		xmlHttp.send(null);
	}
	else{
		setTimeout('process()', 1000);
	}
}

function handleServerResponse() {
	if (xmlHttp.readyState==4) {
		if (xmlHttp.status==200) {
			xmlResponse = xmlHttp.responseXML;
			// xmlDocumentElement = xmlResponse.documentElement;
			// hasil = xmlDocumentElement.firstChild.data;
			document.getElementById("response").innerHTML = "<i>"+xmlHttp.responseText+"</i>";
			setTimeout('process()', 1000);
		}else{
			alert("Server access error : "+xmlHttp.statusText);
		}
	}
}