<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
//class object, method
class PhpCodeController extends Controller
{
    /**
     * @Route("/phpcode", name="phpcode")
     */

    	public $a = 10;
    	public $b = 32;
    	protected $c = "live long";

    	public function sum()
    	{
    		 $test1 = $this->a;
    		 $test2 = $this->b;
    		 $result = $test2+$test1;
    		 return $result;
    	}
    
}

$myObj = new PhpCodeController;

echo $myObj->sum()."<br>";
//echo $myObj->c;

//using constant
class useConstant
{
	const test = "php constant variable";
	
	public function display(){
		echo self::test;
	}
}
$useConstant1 = new useConstant;
echo $useConstant1->display()."<br>";
echo $useConstant1::test;
echo "<br>------------------<br>";
//using keyword private public protected
class threekey{
	public $font_size="18";
	private $font_color = "blue";
	protected $string = "w3school";

	public function property()
	{
		echo $this->font_size;
		echo $this->font_color;
		echo $this->string;
	}	
}
$threekey1 = new threekey;
echo $threekey1->font_size;
//echo $threekey1->font_color;   //cannot access private property
//echo $threekey1->string;       //cannot acess protected property
//echo $threekey1->property();

class exthreekey extends threekey{
	public function acess_protected(){
		echo "protected<br>";
		echo $this->string;  //acess protected by child class
	}

}
$newexthreekey = new exthreekey;
echo "<br>";
echo $newexthreekey->acess_protected();
echo "<br>public function access<br>";
echo $newexthreekey->property();
echo "<br>---------------------<br>";
//constructor creating and using
class testConstructor{
	private $variable1;
	private $variable2;
	private $variable3;

	function __construct ($variable1,$variable2,$variable3)
	{
		$this->variable1 = $variable1;
		$this->variable2 = $variable2;
		$this->variable3 = $variable3;

		$this->customize_print();   //constructor can call method or function 
	}
	function customize_print(){
		echo $this->variable1." ".$this->variable2."  ".$this->variable3;
	}
}
$f = new testConstructor("taspia","sohrab","sultana");

//$f->customize_print();
echo "<br>-------------------<br>";
//Deconstructor

class testDeconstructor{

	function __construct(){
		echo "w3school ";
		$this->name = "testDeconstructor";
	}
	function __destruct(){
		echo " Destroy ".$this->name."<br>";
	}
}
$myDecontructObj = new testDeconstructor();

//inheritence
echo "<br>-----------------<br>";
class testInheritence{
	protected $font_size;
	protected $string_value;
	protected $taspia ="my life";

	function __construct($font_size,$string_value){
		$this->font_size = $font_size;
		$this->string_value = $string_value;

		$this->print_inhertence();
	}

	function print_inhertence(){
		echo "Font: ".$this->font_size." Value: ".$this->string_value;
	}
}

class subclass extends testInheritence{
	public $font ="18";                  //acess modificaion child class
}
$sohrab1 = new subclass("12","arial");
echo "<br>".$sohrab1->font;
//echo "test".$sohrab1->taspia."<br>";  //not accessible beacuse of protected

//another exemple inheritance
echo "<br>-------------<br>";
class A{
	public function test(){
		return "inheritance working<br>";
	}
}
class B extends A{
	public function test(){
		$retour = parent::test();
		return $retour;
	}
}
$a1 = new B;
echo $a1->test();
//inheritance exemple mere et fille
echo "<br>-----------------<br>";
class mere{
	protected $attributProtect;
	private $attributPrive;

	function __construct(){
		$this->attributProtect = "Varible protected testing..";
		$this->attributPrive = "Varible private testing";

	}
}
class fille extends mere{
	public function affiche(){
		echo $this->attributProtect;
		//echo $this->attributPrive;   //private not accible ici
	}
}
$testinheritence = new fille;
$testinheritence->affiche();

//interface

echo "<br>-----------------<br>";

interface car {
	public function setModel($name);

	public function getModel();
}

class minicar implements car{
	private $model;

	public function setModel($name){
		$this->model = $name;
	}

	public function getModel(){
		return $this->model;
	}
}

interface vehicule {
	public function setHasWheel($bool);

	public function getHasWheel();
}

class minicar1 implements car, vehicule {
	private $model;
	private $hasWheel;

	public function setModel($name){
		$this->model = $name;
	}

	public function getModel(){
		return $this->model;
	}

	public function setHasWheel($bool)
  	{ 
    $this->hasWheel = $bool; 
  	}
  
  	public function getHasWheel()
  	{
  	return ($this->hasWheel)? "has wheels" : "no wheels";
  	}

}

$myInterface = new minicar1();

$myInterface->setModel("tyota");

echo $myInterface->getModel();

echo "<br>-------------setter---getter------------<br>";
//Les accesseurs et mutateurs ou getter and setting

class Personnage{
	private $force;
	private $experience;
	private $degats;

	public function frapper(Personnage $personAfrap){
		$personAfrap->degats = $this->force;

	}
	public function gagneExperience(){
		$this->experience++;
	}

	// Mutateur chargé de modifier l'attribut $_force.
  	public function setForce($force)
  	{
    if (!is_int($force)) // S'il ne s'agit pas d'un nombre entier.
    {
      trigger_error('La force d\'un personnage doit être un nombre entier', E_USER_WARNING);
      return;
    }
    
    if ($force > 100) // On vérifie bien qu'on ne souhaite pas assigner une valeur supérieure à 100.
    {
      trigger_error('La force d\'un personnage ne peut dépasser 100', E_USER_WARNING);
      return;
    }
    
    $this->force = $force;
  }

    // Mutateur chargé de modifier l'attribut experience.
public function setExperience($experience)
  {
    if (!is_int($experience)) // S'il ne s'agit pas d'un nombre entier.
    {
      trigger_error('L\'expérience d\'un personnage doit être un nombre entier', E_USER_WARNING);
      return;
    }
    
    if ($experience > 100) // On vérifie bien qu'on ne souhaite pas assigner une valeur supérieure à 100.
    {
      trigger_error('L\'expérience d\'un personnage ne peut dépasser 100', E_USER_WARNING);
      return;
    }
    
    $this->experience = $experience;
  }

public function degats(){
  	return $this->degats;
}
public function force(){
	return $this->force;
}
public function experience(){
	return $this->experience;
}

}

$perso1 = new Personnage();
$perso2 = new personnage;

$perso1->setForce(2);
$perso1->setExperience(10);

$perso2->setForce(10);
$perso2->setExperience(50);

$perso1->frapper($perso2); //perso1 frappe perso2
$perso1->gagneExperience(); //perso1 gagne experience

$perso2->frapper($perso1);   //perso2 frappe perso1
$perso2->gagneExperience();  //perso2 gagne experience

echo 'Le personnage 1 a ', $perso1->force(), ' de force, contrairement au personnage 2 qui a ', $perso2->force(), ' de force.<br />';
echo 'Le personnage 1 a ', $perso1->experience(), ' d\'expérience, contrairement au personnage 2 qui a ', $perso2->experience(), ' d\'expérience.<br />';
echo 'Le personnage 1 a ', $perso1->degats(), ' de dégâts, contrairement au personnage 2 qui a ', $perso2->degats(), ' de dégâts.<br />';

//acess constant and static
echo "<br>--------------------<br>";
class Person{
	private $force;
	private $localisation;
	private $degats;
	private $experience;

	const FORCE_PETITE = 20;
  	const FORCE_MOYENNE = 50;
  	const FORCE_GRANDE = 80;

  	public static $text = "Je voudrais parler a tous";

	function __construct($forceinitial){
		$this->setForce($forceinitial);
	}

	public function setForce($force){
		if (in_array($force, [self::FORCE_PETITE, self:: FORCE_MOYENNE, self:: FORCE_GRANDE])) {
			$this->force = $force;
		}
	}

	public function deplacer()
  	{

  	}
        
  	public function frapper()
  	{

  	}
        
  	public function gagnerExperience()
  	{

  	}
  	public static function parler(){
  		echo self::$text;
  	}

}

$person1 = new Person(Person::FORCE_PETITE);

//$person1->setForce(20);
//echo $person1->force;    si variable force public on peux acceder ici

echo $person1::parler();

//compteur de instance de l'objet
echo "<br>-------------------<br>";

class Compteur{
	public static $count=0;

	function __construct(){
		self::$count++;
	}

	public function getCount(){
		return self::$count;
	}

}
$compte1 = new Compteur;
$compte2 = new Compteur;
$compte3 = new Compteur;

//echo Compteur::getCount();
//echo $compte1->getCount();
echo $compte1::getCount();

//abstract class
echo "<br>----------------<br>";
abstract class Person1{
	protected $p1="abstract mehtod for p1 is working<br>";
	protected $p2 = "abstract method for p2 is working<br>";
	private $p3 = "abstract for privte p3";

	//cette methode pour toules class fille
	abstract public function frapper(Person1 $pers);
	public function recevoirDegats(){

	}
}

class Magicien1 extends Person1{
	//ici parceque method abstact
	private $magi1 = "child class private working<br>";
	public function frapper(Person1 $pers){			
		echo $pers->p2;   //protected p1 and p2 accessible
		//echo $pers->p3;		//private not accessible
		echo $pers->magi1;
	}
}

$magicien1 = new Magicien1; //Right sentence
$magicien1->frapper($magicien1);
//$pers1 = new Person1 //wrong sentence

//class abstract with final
echo "<br>---------------<br>";

abstract class absfinal{
	protected $abs1 = "abstract and finale exemple1";
	protected $abs2 = "abstract and finale exemple2";

	public function absfinalfunction(absfinal $abs1){

	}
	final public function recevoirabs(){

	}
}
final class childabs extends absfinal {
	public function absfinalfunction(absfinal $abs){

	}
	//fatal erreur on ne peux pas modifier
	/*public function recevoirabs(){

	}*/
}

//self and static method
echo "<br>---------------------<br>";
class Dad{
	public static function lancerleTest(){
 	self::quiest();
 	}

 	public static function quiest(){
 	echo 'Je suis la classe <strong>Dad</strong> !<br>';

 	}
 	protected function heritTest(){
 		echo "Inherit test is working<br>";
 	}
}

class Son extends Dad{
	public static function quiest(){
    echo 'Je suis la classe <strong>Enfant</strong> !<br>';
    echo "je suis extra enfant <br>";
  	}

}
Son::quiest();    //static method we can call withour instantiated or inheritence
Dad::quiest();
$dadtest = new Dad;
$dadtest->quiest();
//$sontest = new Son;          //protected not callable
//$sontest->heritTest();

//cas complexes
echo "<br>---------------------<br>";
class AA{
	public function callquiestce(){
		static::quiestce1();
	}
	public function quiestce1(){
		echo "AA<br>";
	}
}
class BB extends AA{
	public static function testBB(){
		parent::quiestce1();  // self::quiestce1();
	}
	public function quiestce2(){
		echo "BB<br>";
	}
}
class CC extends BB{
	public function quiestce(){
		echo "CC<br>";
	}
}
$classCC = new CC;
$classCC->quiestce();
$classCC->quiestce2();
CC::TestBB();
BB::TestBB();
AA::quiestce1();
AA::callquiestce();
$classAA = new AA;
$classAA->callquiestce();

//Methods magique
echo "<br>-------magique--------------<br>";
class methodmagique{
	private $privateattribute;

	private $stockattrs = [];

	public function __set($nom,$valeur){
		$this->stockattrs[$nom] = $valeur;
		//echo "assiner nom: <strong>",$nom,"</strong> le valeur: <strong>",$valeur,"</strong><br>";
	}
	public function __get($nom){
		if (isset($this->stockattrs[$nom])) {
			return "possible access nom ".$this->stockattrs[$nom]."<br>";
		}
	}
	public function afficheattributs(){
		 echo '<pre>', print_r($this->stockattrs, true), '</pre>';
	}
	public function __isset($nom){
		return isset($this->stockattrs[$nom]);
	}
	public function __unset($nom){
		if (isset($this->stockattrs[$nom])) {
			unset($this->stockattrs[$nom]);
		}
	}
}

$obj = new methodmagique;
$obj->attribut = "simple test";
$obj->privateattribute = "magique test";

$obj->afficheattributs();
echo $obj->attribut;

if(isset($obj->attribut)){
	echo 'L\'attribut <strong>attribut</strong> existe !<br />';
}else{
	 echo 'L\'attribut <strong>attribut</strong> n\'existe pas !<br />';
}

unset($obj->attribut);

if(isset($obj->attribut)){
	echo 'L\'attribut <strong>attribut</strong> existe !<br />';
}else{
	 echo 'L\'attribut <strong>attribut</strong> n\'existe pas !<br />';
}

if(isset($obj->unAutreAttribut)){
	echo 'L\'attribut <strong>unAutreAttribut</strong> existe !<br />';
}else{
	 echo 'L\'attribut <strong>unAutreAttribut</strong> n\'existe pas !<br />';
}


//https://openclassrooms.com/fr/courses/1665806-programmez-en-oriente-objet-en-php/1667055-les-objets-en-profondeur