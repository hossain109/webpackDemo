import { log2 } from './log'
import $ from 'jquery'
log2('salutaaa')

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
if (!$(this).next().hasClass('show')) {
$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
}
var $subMenu = $(this).next(".dropdown-menu");
$subMenu.toggleClass('show');
$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
$('.dropdown-submenu .show').removeClass("show");
});
return false;
});

$('body').css('backgroundColor','#FFF')

$(document).ready(function(){
	$(".p").mouseenter(function(){
		alert("your entered p1")
	})
})
$(document).ready(function(){
    $("#all").click(function(){
        $("*").hide()
    })
})
$(document).ready(function(){
	$("#all_code").click(function(){
		alert("$(document).ready(function(){$('#click').click(function(){$('*').hide()})")
	})
})
$(document).ready(function(){
	$("#current").click(function(){
		$(this).hide()
	})
})
$(document).ready(function(){
	$("#current_code").click(function(){
		alert("$(document).ready(function(){ $('#current').click(function(){$(this).hide()})")
	})
})
$(document).ready(function(){
	$("#class_intro").click(function(){
		$("p.intro").hide()
	})
})
$(document).ready(function(){
	$("#class_code").click(function(){
		alert("$(document).ready(function(){$('#class').click(function(){$('p.intro').hide()})})")
	})
})
$(document).ready(function(){
	$("#first_element").click(function(){
		$("h3:first").hide()
	})
})
$(document).ready(function(){
	$("#first_code").click(function(){
		alert("$(document).ready(function(){ $('#first_code').click(function(){ $('p:first').hide() }) })")
	})
})
$(document).ready(function(){
	$("#ul_element").click(function(){
		$("ul li:first").hide()
	})
})
$(document).ready(function(){
	$("#all_ul_element").click(function(){
		$("ul li:first-child").hide()
	})
})
$(document).ready(function(){
	$("#ul_code").click(function(){
		alert("$(document).ready(function(){ $('#ul_element').click(function(){ $('ul li:first/ul li:first-child').hide() }) })")
	})
})
$(document).ready(function(){
	$("#target").click(function(){
		$("a[target!='_blank']").hide()
	})
})
$(document).ready(function(){
	$("#target_code").click(function(){
		alert("$(document).ready(function(){ $('#target').click(function(){ $('a[target!='_blank']'').hide() }) })")
	})
})
$(document).ready(function(){
	$('a').attr('target', function(){
		if (this.host == location.host) return '_self'
			else return '_blank'
	})
})
$("#href_code").on('click',function(){
	alert("	$('a').attr('target', function(){ if (this.host == location.host) return '_self' else return '_blank' })")
}) //location.host = site en cours et this.host = site en cliquant
//addclass remove class toggle class
$(document).ready(function(){
	$("#sohrab").toggleClass('bleu').toggleClass('vert')
	$("#taspia").addClass('vert')
	$("#sohug").addClass('grand')
})
$('h2').css('font-size')
$('h2').css('font-size','2em')
$("#modification_code").click(function(){
	alert(" getter::$('h2').css('font-size') // setter:: $('h2').css('font-size','4em') // remove:: $('a').removeAttr('href')")
})
$("#insert").click(function(){
	$('<li>Deuxième élément bis</li>').insertAfter('li:nth-child(2)')
})
$("#delete").click(function(){
	$('li:nth-child(2)').remove();
})
$("#insert_code").click(function(){
	alert("$('#insert').click(function(){ $('<li>Deuxième élément bis</li>').insertAfter('li:nth-child(2)') }) // $('li:nth-child(2)').remove()")
})
$('#methods').click(function(){
	$('h2').append('***')
	$('h2').prepend('**')
	$('h2').before('<hr>')
	$('h2').after('<br><br>')
})
$("#method_code").click(function(){
	alert("$('#methods').click(function(){ $('h2').append('***') // $('h2').prepend('**') //$('h2').before('<hr>') //$('h2').after('<br><br>')")
})
//Recover multi options values
$(function(){
	$("#multiOptionBtn").click(function(){
	var lsSelection = ""
	$("select[id = 'multiOption'] option:selected").each(function(){
		lsSelection += $(this).val()+' |'
		$("#lbResult").html(lsSelection)
	})
	})
})
$("#multiOptionCde").click(function(){
	alert("$(function(){ $('#multiOptionBtn').click(function(){ var lsSelection = '' $('select[id = 'multiOption'] option:selected').each(function(){ lsSelection += $(this).val()+' |' $('#lbResult').html(lsSelection) }) }) })")
})
//adding element in multiple select option
$(function(){
	$('#addElement').click(function(){
		if ($('#inputElement').val() !="") {
			$('#multipleOption').append("<option value='" + $("#inputElement").val() + "'>" + $("#inputElement").val() + "</option>")
		}
	})
})
$("#addCode").click(function(){
	alert("$(function(){ $('#addElement').click(function(){ if ($('#inputElement').val() !='') { $('#multipleOption').append('<option value='' + $('#inputElement').val() + ''>'' + $('#inputElement').val() + '</option>') } }) }) ")
})
//transfer one select to another select
//akhane select null hole ki hobe seta determine korte hobe
$(function(){
	$('#btPlus').click(function(){
		var lsSelection = ""
		$("select[id = 'transfer1'] option:selected").each(function(){
			lsSelection = $(this).val()+'<br>'
			$('#transfer2').append("<option value='" + lsSelection + "'>" + lsSelection + "</option>")
		})
		$("#transfer1 :selected").remove()
	})
	$('#btMoins').click(function(){
		var lsSelection = ''
		$("select[id = 'transfer2'] option:selected").each(function(){
			lsSelection = $(this).val()+'<br>'
			$('#transfer1').append("<option value='" + lsSelection + "'>" + lsSelection + "</option>")
		})
		$("#transfer2 :selected").remove()
	})
})
//Iterations
$(function(){
	var lsResultant = ''
	var listeVilles = $('#listeVilles li')
	lsResultant = 'Number of Iterations: '+listeVilles.length+'<br>'
	listeVilles.each(function(index){
		lsResultant += index + ':'+$(this).text()+'<br>'
	})
	$('#pResultat').html(lsResultant)
})
$("#code_iterations").click(function(){
	alert("$(function(){ var lsResultant = '' var listeVilles = $('#listeVilles li') lsResultant = 'Number of Iterations: '+listeVilles.length+'<br>' listeVilles.each(function(index){ lsResultant += index + ':'+$(this).text()+'<br>' }) $('#pResultat').html(lsResultant) })")
})
//recuperes liste des image src
$(function(){
	var tImage = new Array ()
	var lsImageResultant = $('#listesImages li img')
	lsImageResultant.each(function(){
		tImage.push($(this).attr('src'))
		console.log($(this).attr('src'))
	})
})
$("#listeImageCode").click(function(){
	alert("$(function(){ var tImage = new Array () var lsImageResultant = $('#listesImages li img') lsImageResultant.each(function(){ tImage.push($(this).attr('src')) console.log($(this).attr('src')) }) }) ")
})
//Recover multiple elements of form
$(function(){
	$('#btPlusLigne').click(function(){
		$('#bodyTable').append("<tr><td><input type='text' name='produit[]'></td><td><input type='text' name='prix[]'></td><td><input type='text' name='qte[]'></td><td><label class='amount'></label></td></tr>")
	})

	$('#btCalculer').click(function(){
		var montant =  new Array()
		var sizeTable = $('#bodyTable tr')
		var countTr = sizeTable.length
		var total = 0

		var prix = new Array()
		$("input[name='prix[]']").each(function(){
			prix.push($(this).val())
		})
		var qte = new Array()
		$("input[name='qte[]']").each(function(){
			qte.push($(this).val())
		})
		sizeTable.each(function(index){
			var montant = prix[index]*qte[index]
			total +=montant
		})
		$("#spTotal").html(total)
	})
})
//select one check from multiple check
$(function(){
	$('.checklist').on('change', function(){
		$('.checklist').not(this).prop("checked",false)
	})
})
$("#checkCode").click(function(){
	alert("$(function(){ $('.checklist').on('change', function(){ $('.checklist').not(this).prop('checked',false) }) })" )
})
//jQuery avec formulaire
var user = $('#user').val()
var password = $('#password').val()
var sex =  $('input[name=sexe]:checked').val()
var fonction = $('#fonction').val()
$("#submit").click(function(){
	if ( ($('#user').val() === "") || ($('#password').val()==="")|| ($('#fonction').val() ==="") || ($('input[name=sexe]:checked').val() === undefined) ) {
		$("#erreur").html("<p>Vous n'avez pas rempli correctement les champs du formulaire !</p>")
		$("#erreur").css("color", "red")
	}else{
	$("#erreur").html("<p>Vous avez bien remplit correctement les champs du formulaire !</p>")
	$("#erreur").css("color", "green")		
	} 

})
$('#annuler_by_jquery').click(efface_formulaire)
function efface_formulaire (){
	$(':input')
		.not(':button,:submit,:reset')
		.val('')
		.prop('checked',false)
		.prop('checked',false)
} 
//teste field user and password
$("#user").keyup(function(){
	if($(this).val().length < 5){
		$(this).css("border-color","red")
		$(this).css("color", "red")
	}else{
		$(this).css("border-color","green")
		$(this).css("color", "green")
	}
})
$("#password").keyup(function(){
	if($(this).val().length < 5){
		$(this).css("border-color","red")
		$(this).css("color", "red")
	}else{
		$(this).css("border-color","green")
		$(this).css("color", "green")
	}
})
//form with event prevent method
$(function init(){
	$('#btSubmit').on('click',function(event){
		event.preventDefault()
		valider()

	function valider(){	
		var lsMessage = ""
	if ($('#id').val() === "") {
		lsMessage += "Input Id "
	}
	if ($('#nom').val() === "") {
		lsMessage += "Input Nom "
	}

		 $('#spMessage').html(lsMessage)
	}
	if ($('#id').val() !== "" && $('#nom').val() !== "") {
		$('#spMessage').html('<b>Form submitted</b>')
		$('#btSubmit').submit()
	}
	})
})
//clic on image and positioning
$(function(){
	//Dimention window
	var largeur = ($(window).width())-50
	var hateur = ($(window).width())-50
	//Display first image in (100,100)
	var p = $('#target_img').offset()
    p.top=100
    p.left=100
    $('#target_img').offset(p);
	//Manage clic and replace of image
	$('#target_img').click(function(){
	var	x = Math.floor(Math.random()*largeur)
	var	y = Math.floor(Math.random()*hateur)
	var p = $('#target_img').offset()
	p.top = x
	p.left = y
	$('#target_img').offset(p)
	})
})
	var position = $('#target_img').position()
	console.log("x : " + position.left + " – y : " + position.top)
	$('#target_img').bind('click',function(){
		$(this).fadeTo(3000,.3)
		$('#rapport').text(this.title +'-'+e.pageX+' '+e.pageY)
	})

//$('img').one('click',function(){
//	$('#message').text('Vous avez cliqué sur l\'image. Désormais, je resterai insensible aux clics.').fadeIn(1000).fadeOut(5000)
//})

//click on image for fade
$("#fade_code").click(function(){
	alert("$('img').one('click',function(){ $('#message').text('Vous avez cliqué sur l\'image. Désormais, je resterai insensible aux clics.').fadeIn(1000).fadeOut(5000)})")
})
$(function(){
	$('img').click(function(event,texte){
		if(texte == undefined)
			texte = "par vous"
		$('#message').text('L\'image a été cliquée ' + texte).fadeIn(1000).fadeOut(1000)
	})
	$('#btn_click').click(function(){
		$('img').trigger('click', 'par jQuery')
	})
})

//modifier img par css
$('#image_pressing').width(300)
$('#image_pressing').css('border', '3px solid black')
//personelle event
$('#bonjour').on('bonjour_jquery',function(){
	alert("jQuery vous dit Bonjour")
})
$('#bonjour').click(function(){
	$('#bonjour').trigger("bonjour_jquery")
})
//image appear and disappear
$(function(){
	$('#affiche').click(function(){
		$('.img_test').first().show('slow',function showNextOne(){
			$('this').next('img_test').show('slow',showNextOne)
		})
	})
	$('#cache').click(function(){
		$('.img_test').first().hide('slow',function hideNextOne(){
			$('this').next('img_test').hide('slow',hideNextOne)
		})
	})
})
//active click on image
$(function(){
	function traitement(){
		alert('Image cliquée')
	}
	$('#activer').on('click', function(){
		$('#image_click').click(traitement)
	})
	$('#deactiver').on('click', function(){
		$('#image_click').off('click', traitement)
	})
})
$("#code_click").click(function(){
	alert("$(function(){ function traitement(){ alert('Image cliquée') } $('#activer').on('click', function(){ $('#image_click').click(traitement) }) $('#deactiver').on('click', function(){ $('#image_click').off('click', traitement) }) })")
})
//table animation
$(function(){
	$('tr:even').css('background-color','yellow')
	$('td').css('width','200px')
	$('td').css('text-align','center')
	$('#display').click(function(){
		$('tr:even').show('slow')
	})
	$('#hide').click(function(){
		$('tr:even').hide(1000)
	})
})
$("#table_code").click(function(){
	alert("$(function(){ $('tr:even').css('background-color','yellow') $('td').css('width','200px') $('td').css('text-align','center') $('#display').click(function(){ $('tr:even').show('slow') }) $('#hide').click(function(){ $('tr:even').hide(1000) }) })") })
//fade after certain time
$('#afficheMessage').click(function(){
	$('#message_delay').fadeIn('slow').delay(2000).fadeOut('slow')
})
//slide in jquery
$('#img_slide').click(function(){
	$(this).slideUp('slow')
})
$('#img_slide').click(function(){
	$(this).slideDown('slow')
})
$('#slide_toggle').click(function(){
	$(this).slideToggle()
})

//Animation delay
$(function(){
	$('#enchainer').click(function(){
		$('#animate_img').animate({'border-width':'100'},1500)
						.animate({'width':'-=100'},1500)
	})
	$('#nePasEnchainer').click(function(){
		$('#animate_img').animate({'border-width':'100'},{queue:false,duration:1500})
						.animate({'width':'-=100'},1500)
	})
	$('#executerEnMemeTemps').click(function(){
		$('#animate_img').animate({ 'border-width': '100', 'width': '-=100' }, 1500)
	})
	$('#etatInitial').click(function(){
		$('#animate_img').css({'border-width':'4px', 'width':'200'})
	})
})
	$("#anim_code").click(function(){
		alert("$(function(){ $('#enchainer').click(function(){ $('#animate_img').animate({'border-width':'100'},1500) .animate({'width':'-=100'},1500) }) $('#nePasEnchainer').click(function(){ $('#animate_img').animate({'border-width':'100'},{queue:false,duration:1500}) .animate({'width':'-=100'},1500) }) $('#executerEnMemeTemps').click(function(){ $('#animate_img').animate({ 'border-width': '100', 'width': '-=100' }, 1500) }) $('#etatInitial').click(function(){ $('#animate_img').css({'border-width':'4px', 'width':'200'}) }) })") })
//State of Delay
$(function(){
	$('#droite').click(function(){
		$('#img_queue').animate({left: '+=50'}, 2000)
	})
	$('#gauche').click(function(){
		$('#img_queue').animate({left: '-=50'}, 2000)
	})
	$('#bas').click( function() {
      $('#img_queue').animate({top: '+=50'}, 2000)
    })
    $('#haut').click( function() {
      $('#img_queue').animate({top: '-=50'}, 2000)
    })
    $('#etatFile').click(function(){
    	var n = $('#img_queue').queue()
    	$('#infos').text('Nombre d\'animations dans la file d\'attente : ' + n.length)

    })
})
//basic animation
  $(function() {
    $('.basic_anim').first().fadeOut(2000, function suivante() {
        $(this).next('.basic_anim').fadeOut(2000,suivante)
    })
  })
  $("#basic_anim_code").click(function(){
  	alert("  $(function() { $('.basic_anim').first().fadeOut(2000, function suivante() { $(this).next('.basic_anim').fadeOut(2000,suivante) }) })")
  })
//manupulation delay
$(function(){
	$('#ajouter').click(function(){
		$('#bon').toggle()
				.queue(function(){
		$('#mauvais').animate({left: '+=200'}, 'slow')
					 .animate({top: '+=200'}, 'slow')
					 .animate({left: '-=200'}, 'slow')
					 .animate({top: '-=200'}, 'slow')
				})
	})
	$('#annuler').click(function(){
		$('.delay_img').clearQueue()
	})
	$('#remplacer').click(function(){
		$('#mauvais').css('left',200).css('top',200)
		$('#mauvais').queue(function(){
			$(this).animate({top: '-=200'},'slow')
					.animate({top: '+=200', 'left': '-=200'}, 'slow')
                    .animate({top: '-=200'}, 'slow')
            $(this).dequeue()
		})
	})
	$('#retour').click( function() {
      $('.delay_img').queue(function() {
            alert('Animation terminée.')
            $(this).dequeue()
       })
    })
})
$("#delay_maintain_code").click(function(){
	alert("Too much code go to source code app js")
})
//animation without termination
$(function(){
	function bis(){
		$('#balle').animate({left: '+=200'}, 'slow')
                 .animate({top: '+=50'}, 'slow')
                 .animate({left: '-=200'}, 'slow')
                 .animate({top: '-=50'}, 'slow',bis)
	}
	bis()
	//setInterval(bis, 2400)
})
$("#anim_without_term").click(function(){
	alert("$(function(){ function bis(){ $('#balle').animate({left: '+=200'}, 'slow') .animate({top: '+=50'}, 'slow') .animate({left: '-=200'}, 'slow') .animate({top: '-=50'}, 'slow',bis) } bis() })") })
//stop and restart animation
$(function(){
	$('#img_start_stop').animate({left: '+=500'},2000).animate({top: '+=300'},2000)
	$('#stopFin').click(function(){
		$('#img_start_stop').stop(false, false)
	})
	$('#stopAnnuleFin').click(function(){
		$('#img_start_stop').stop(true, true)
	})
	$('#stop').click( function() {
      $('#img_start_stop').stop(true, false)
    })
    $('#reprise').click( function() {
      $('#img_start_stop').css('left', 0).css('top', 0)
      $('#img_start_stop').animate({left: '+=500'}, 2000).animate({top: '+=300'}, 2000)
    })
})
//input text and view text
$(function(){
	$('#btn_text').click(function(){
		var value = $('#inputId').val()
		$('#input_result').html('Text origin: '+value+'...'+
		'<br>Apres la fonction trim(): '+$.trim(value)+'.')
	})
})
$("#input_text_code").click(function(){
	alert("$(function(){ $('#btn_text').click(function(){ var value = $('#inputId').val() $('#input_result').html('Text origin: '+value+'...'+ '<br>Apres la fonction trim(): '+$.trim(value)+'.') }) })") })
//find out text position from text
  $(function() {
    $('#find_position').click(function() {
      var leTexte = $('#text_given').val()
      var laPosition = $('#text_position').val()
      var leResultat = 'Le caractère en position ' + laPosition + ' est un "' + leTexte.charAt(laPosition) + '"'
      $('#position_result').text(leResultat);
    })  
  })
//Zoom out Image
$(function(){
	$('#zoom_img').mouseover(function(){
		$(this).attr('src', 'image/full.jpg')
	})
	$('#zoom_img').mouseout(function(){
		$(this).attr('src', 'image/half.jpg')
	})
})
$("#zoom_image_code").click(function(){
	alert("$(function(){ $('#zoom_img').mouseover(function(){ $(this).attr('src', 'image/full.jpg') }) $('#zoom_img').mouseout(function(){ $(this).attr('src', 'image/half.jpg') }) })")
})
//enlarge image by mouse
$(function(){
	$('#img_half').mouseover(function(){
		$(this).fadeOut(1000)
		$('#img_full').fadeIn(1000)
	})
	$('#img_full').mouseout(function(){
		$(this).fadeOut(1000)
		$('#img_half').fadeIn(1000)
	})
})
//les images galleries
$(function(){
	$('.naturalpic').css('border', '5px white solid')
	$('.naturalpic:first').css('border', '5px black solid')
	$('.naturalpic').click(function(){
		$(this).css('border', '5px white solid')
		$(this).css('border', '5px black solid')
		var nom = $(this).attr('id')
		var path = '/image/img/'+nom+'.jpeg'
		$('#nature1_grand').attr('src',path)
	})
})
$('#galleries_imgs').click(function(){
	alert("$(function(){ $('.nautralpic').css('border', '5px white solid') $('.naturalpic:first').css('border', '5px black solid') $('.naturalpic').click(function(){ $(this).css('border', '5px white solid') $(this).css('border', '5px black solid') var nom = $(this).attr('id') var path = '/image/img/'+nom+'.jpeg' $('#nature1_grand').attr('src',path) }) })")
})
//Diaporama automatique
$(function(){
	var i = 0
	affiche()

	function affiche() {
      i++
      if (i==1) 
      	var precedent = '#diapo5'
           else
         precedent = '#diapo' + (i-1)
      var actuel = '#diapo' + i
      $(precedent).fadeOut(2000)
      $(actuel).fadeIn(2000)
      if (i==5) i=0         
    }
	setInterval(affiche, 2000)
})
//Change and effects
$(function(){
	$('#lbEffets').change(choiseList)

	function choiseList(){
		var lsEffect = $('#lbEffets').val()
		$("#lblMessage").html(lsEffect)

		if (lsEffect === 'show') {
			$('#photo').show(1000)
		}
		if (lsEffect === 'hide') {
			$('#photo').hide(1000)
		}
		if (lsEffect === 'slideUp') {
			$('#photo').slideUp(1000)
		}
		if (lsEffect === 'slideDown') {
			$('#photo').slideDown(1000)
		}
		if (lsEffect === 'slideToggle') {
			$('#photo').slideToggle(1000)
		}
		if (lsEffect === 'fadeIn') {
			$('#photo').fadeIn(1000)
		}
		if (lsEffect === 'fadeOut') {
			$('#photo').fadeOut(1000)
		}
		if (lsEffect === 'fadeTo') {
			$('#photo').fadeTo(3000,.5)
		}
		if (lsEffect === 'toggle') {
			$('#photo').toggle(1000)
		}
	}
})
//Chaing method
$('#chain_click').click(function(){
	$('#chain_method').css("color", "red").slideUp(2000).slideDown(2000)
})
$("#chin_code").click(function(){
	alert("$('#chain_click').click(function(){ $('#chain_method').css('color', 'red').slideUp(2000).slideDown(2000) })")
})
//Chain animation 
$(function(){
	$('#chain_anim').click(function(){
		$('#photo1').animate({left:100, opacity:0.5}, 1000, "swing", animText)
	})
	function animText() {
		$('#chain_method').animate({top: 200}, "slow")
	}
})
$("#chain_anim_code").click(function(){
	alert("$(function(){ $('#chain_anim').click(function(){ $('#photo1').animate({left:100, opacity:0.5}, 1000, 'swing', animText) }) function animText() { $('#chain_method').animate({top: 200}, 'slow') } })")
})
//Stop method for sliding
$(function(){
	$('#slide_down').click(function(){
		$('#slide_panel').slideDown(5000)
	})
	$('#slide_stop').click(function(){
		$('#slide_panel').stop()
	})
})
$("#stop_code").click(function(){
	alert("$(function(){ $('#slide_down').click(function(){ $('#slide_panel').slideDown(5000) }) $('#slide_stop').click(function(){ $('#slide_panel').stop() }) })")
})
//Callback
$('#btn_callback').click(function(){
	$('#text_callback').hide()
	alert('The paragraph is now hidden....')
})
$('#btn_callback1').click(function(){
	$('#text_callback').hide(function(){
		alert('The paragraph is now hidden.....')
	})
})
$("#callback_code").click(function(){
	alert("$('#btn_callback').click(function(){ $('#text_callback').hide() alert('The paragraph is now hidden....') })")
})
$("#callback_code1").click(function(){
	alert("$('#btn_callback1').click(function(){ $('#text_callback').hide(function(){ alert('The paragraph is now hidden.....') }) })")
})
//
$("#target_img").mousedown(function(e){
	("#rapport").text("Eventment: "+e.type+". Boutoun passe: "+e.which)
})
$("#target_text").keydown(function(){
	$("#lumiere").css('background-color','green')
})
$('#target_text').keyup(function(){
        $('#lumiere').css('background-color', 'white');
})
$("#saisie").keypress(function(e){
	$("#unelettre").text(e.which)
})
$(document).ready(function(){
	$('.rouge').fadeOut("slow", function(){
		$(this).fadeIn("slow")
	})
})

$(document).ready(function(){
	$("#click_hide").click(function(){
		$(".p1").hide(1000)
	})
	$("#click_show").click(function(){
		$(".p1").show()
	})
	$("#click_toggle").click(function(){
		$(".p1").toggle()
	})
	$("#dblclick_hide").click(function(){
		$(".p1").hide(1000)
	})
	$("#dblclick_show").click(function(){
		$(".p1").show()
	})
	$("#dblclick_toggle").click(function(){
		$(".p1").toggle()
	})

	$("#click_code").click(function(){
		alert("$(document).ready(function(){ $('#click_hide').click(function(){ $('.p1').hide(1000) }) // $('#click_show').click(function(){ $('.p1').show() }))} // 	$('#click_toggle').click(function(){ $('.p1').toggle()})")
	})
	$("#dblclick_code").click(function(){
		alert("	$('#dblclick_hide').click(function(){ $('.p1').hide(1000) }) // $('#dblclick_show').click(function(){ $('.p1').show() }) // $('#dblclick_toggle').click(function(){ $('.p1').toggle() })")
	})
})
//focusin and focusout
$("fieldset").focusin(function(){
	$("#result").text($(this).attr("id"))
})
$("fieldset").focusout(function(){
	$("#result2").text($(this).attr("id"))
})
$("#focus_code").click(function(){
	alert("$('fieldset').focusin(function(){ $('#result').text($(this).attr('id')) }) // $('fieldset').focusout(function(){ $('#result2').text($(this).attr('id')) })")
})
//focus in form by click
$(function(){

	$('input, textarea').focus(function(){
		var lefocus = $(this).attr('id')
		$("#status").text(lefocus+' a le focus')
	})
	$('input, textarea').blur( function() { 
      var leFocus_id = '#' + $(this).attr('id')        
      $(leFocus_id).css('background-color', '#fff')
    })
})

$("#focus_click_code").click(function(){
	alert("$(function(){ var lefocus $('input, textarea').focus(function(){ lefocus = $(this).attr('id') $('#status').text(lefocus+' a le focus') }) })")
})
//change
$('select').change(function(){
	$('#resultat').text('You are selected'+$(this).val()+'.')
})
$("#change_code").click(function(){
	alert("$('select').change(function(){ $('#resultat').text('You are selected'+$(this).val()+'.') })")
})
$(document).ready(function(){
	$("input").focus(function(){
        $(this).css("background-color", "#cccccc")
	})
	$("input").blur(function(){
        $(this).css("background-color", "#ffffff")
    })
})
$(document).ready(function(){
	$(".p2").mouseenter(function(){
		$(this).css("background-color", "lightblue")
	})
	$(".p2").mouseleave(function(){
		$(this).css("background-color", "lightgray")
	})
	$(".p2").click(function(){
		$(this).css("background-color", "yellow");
	})
	$(".p2").dblclick(function(){
		$(this).css("background-color", "red");
	})
})
$(document).ready(function(){
	$("#form_code").click(function(){
		alert("$(document).ready(function(){ $('input').focus(function(){ $(this).css('background-color', '#cccccc') }) // $('input').blur(function(){ $(this).css('background-color', '#ffffff') }) }) // 	$('.p2').mouseenter(function(){ $(this).css('background-color', 'lightblue') }) // $('.p2').mouseleave(function(){ $(this).css('background-color', 'lightgray') }) // $('.p2').click(function(){ $(this).css('background-color', 'yellow'); }) // $('.p2').dblclick(function(){ $(this).css('background-color', 'red'); })")
	})
})
$(document).ready(function(){
	$("#load").click(function(){
		$("#div1").load("demo.txt")
	})
	var x = 0
	$(".scroll").scroll(function(){
		$("span").text( x+= 1)
	})
	$("#trigger_scroll").click(function(){
		$(".scroll").scroll()
	})
	var x = 0
	$(window).resize(function(){
		$("span").text( x+= 1)
	})
	//$(window).unload(function(){
	//	alert("goodbye")
	//})
})
$(document).ready(function(){
	$("#load_scroll").click(function(){
		alert("$(document).ready(function(){ $('#load').click(function(){ $('#div1').load('demo.txt') }) // var x = 0 $('.scroll').scroll(function(){ $('span').text( x+= 1) }) $('#trigger_scroll').click(function(){ $('.scroll').scroll() }) })")
	})
})
$(document).ready(function(){
	$("#resize_unload").click(function(){
		alert(" $(document).ready(function(){	var x = 0 $(window).resize(function(){ $('span').text( x+= 1) }) // $(window).unload(function(){ alert('goodbye') }) })")
	})
})
$(document).ready(function(){
	$("#flip").click(function(){
		$("#panel").slideDown("slow");
	})
	$("#flip").click(function(){
		$("#panel").slideUp("slow")
	})
})

$(document).on('keypress', function(e){
	if (e.wich === 80 && e.ctrlKey) {
		console.log("control + p pressed")
	}
})
$(document).on("keypress", function(e){
	console.log(e)
})
$(function(){
	function Horloge(){
		var laDate = new Date()
		var h = laDate.getHours()+"."+laDate.getMinutes()+"."+laDate.getSeconds()
		$('#heure').text(h)
	}
	setInterval(Horloge, 1000)
})
$("#heureCode").click(function(){
	alert("$(function(){ function Horloge(){ var laDate = new Date() var h = laDate.getHours()+'.'+laDate.getMinutes()+'.'+laDate.getSeconds() $('#heure').text(h) } setInterval(Horloge, 1000)})") 
})

//jeu animation
$(function deplace(){
$('.fond').animate({top: '-=360'},
	1000,
	'linear',
	function(){
	 $('.fond').css('top', 0)
	deplace()
	})
})
//Voiture rouge deplace
//$(function(){
	//$('#vr').animate({top: '-=600'}, 2500, 'linear', function(){
    //var vrX = Math.floor(Math.random()*194)+70
    //var vrY = 400
    //$('#vr').css('top',400)
    //$('#vr').css('left',250)
  //})
//})
/*$(document).keydown(function(e){
	if (e.which==39) {
		vjX = parseInt($('#vj').css('left'))	
	if (vjX<280) {
		$('#vj').css('left',vjX+30)
		}
	}
	if (e.which == 37){
  	vjX = parseInt($('#vj').css('left'));
  	if (vjX > 70)
    $('#vj').css('left', vjX-30);
	}

})*/

