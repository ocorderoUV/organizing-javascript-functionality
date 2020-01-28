var Details = (function(){

	var $content;

    EVT.on("init",init);
	function init() {
		$content = $("[rel=js-details]");
		
		$content.on("click","[rel=js-select-person]",selectPerson)
		EVT.on("person-selected",loadPerson);


	}

	function selectPerson(evt){
		evt.preventDefault();
		var ID = $(evt.target).attr("data-person");

		EVT.emit("person-selected",ID);
	}

	function loadPerson(ID) {
		$.ajax("details/" + ID + ".html",{ dataType: "text" })
		.then(function(content){
			$content.html(content);
		});
	}

	return {
		init: init,
		loadPerson: loadPerson
	};

})();

