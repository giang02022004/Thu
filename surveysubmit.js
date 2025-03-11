function survey_submit(frm, objname, qid, ckid, title)
{
	var obj = getIndexCheck(frm, objname).value;
	var value = obj.substring(obj.indexOf("_") + 1);
	if (value == "1")
	{
		frm.action = "surveycomment.asp?ckid="+ckid+"&qid=" +qid + "&title=" + title + "&rqsurvey=" + obj;				
	}
}

function getIndexCheck(frm, objname)
{
	for(i=0; i<frm.elements.length; i++){
		obj = frm.elements[i];
		if(obj.name ==objname ){
			if (obj.checked==true) break;
		}
	}
	return obj;	//frm.elements[i];
}		