<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PhpController extends Controller
{
    /**
     * @Route("/php", name="php")
     */
    public function index()
    {
    	
    	return $this->render('default/php.html.twig');
    }
}


