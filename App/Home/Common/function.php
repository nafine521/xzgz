<?php
	function getController_name($url){
		return strchr($url, "/", true);
	}
?>