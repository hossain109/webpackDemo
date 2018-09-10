<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class JeuController extends Controller
{
    /**
     * @Route("/jeu", name="jeu")
     */
    public function index()
    {
        return $this->render('jeu/index.html.twig');
    }
}
