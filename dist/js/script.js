$(function(){$("#numero_entero").keyup(function(){this.value=(this.value+"").replace(/[^0-9]/g,"")}),$("#btn_enviar").click(function(e){var n=$("#numero_entero").val();e.preventDefault();var r=!0;if($("#numeros li").each(function(){return n<1?(alert("Escriba un número entero mayor a 0"),r=!1,!1):$(this).text()==n?(alert("El número se repite, Digite otro"),$(n).focus(),r=!1,!1):void 0}),r===!0)return $("ul#numeros").append("<li>"+n+"</li>"),!1})}),$(function(){$("#btn-asc").click(function(){$("#numeros li").animate({borderWidth:"2px"},0).sortMe("number",{reverse:!1})})}),$(document).ready(function(){$("#btn-reiniciar").click(function(){$("#numeros li").remove()})});