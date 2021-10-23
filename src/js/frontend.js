function showHideTitle(){
	let btn = document.getElementById('my-btn');
	if(btn){
		btn.addEventListener('click',e=>{
			console.log(e)
		});
	}		
}

function getMessage(user, message){
	return "Hello "+user+", welcome to our site. " + message
}


/* */