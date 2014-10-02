<?php

class Plugin_fibo extends Plugin {

		var $meta = array(
		        'name'               => 'fibo',
		        'version'            => '0.1',
		        'author'             => 'Thomas Gimesi',
		        'author_url'         => 'http://gimesi.com'
		);

public function index() {
	
		$jquery = $this->fetchParam('addjquery');
		
		$html = "";
		
		if ($jquery == 'true'){
		$html .= $this->js->link("jquery.1.11.1.min.js");
		}
		
		$html .= $this->js->link("fibo.js");
		$html .= "<section class='test-block' style='background: #FDE3A7; color: #000; text-align: center; font-size: 14px; '>";
		$html .= "<span class='dynamic-px-width'></span>";
		$html .= "</section>";	
		return $html;	
	}		
}