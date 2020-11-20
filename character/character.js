function nemesis(){
	document.getElementById("villaindata").innerHTML='<object style="width : 1000px;height : 500px" type="text/html" data="nemesis.html" ></object>'; 
}
function wesker(){
	document.getElementById("villaindata").innerHTML='<object style="width : 1000px;height :500px" type="text/html" data="wesker.html" ></object>'; 
}
function saddler(){
	document.getElementById("villaindata").innerHTML='<object style="width : 1000px;height : 500px" type="text/html" data="saddler.html" ></object>'; 
}
function mrx(){
	document.getElementById("villaindata").innerHTML='<object style="width : 1000px;height : 500px" type="text/html" data="mrx.html" ></object>'; 
}
function leon(){
	document.getElementById("herodata").innerHTML='<object style="width : 1000px;height : 500px" type="text/html" data="leon.html" ></object>'; 
}
function jill(){
	document.getElementById("herodata").innerHTML='<object style="width : 1000px;height :500px" type="text/html" data="jill.html" ></object>'; 
}
function carlos(){
	document.getElementById("herodata").innerHTML='<object style="width : 1000px;height : 500px" type="text/html" data="carlos.html" ></object>'; 
}
function ada(){
	document.getElementById("herodata").innerHTML='<object style="width : 1000px;height : 500px" type="text/html" data="ada.html" ></object>'; 
}
const names = document.querySelectorAll(".name");
for (let name of names) {
   name.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 	   var current = document.getElementsByClassName("active");

	    // If there's no active class
	   if (current.length > 0) {
	      current[0].className = current[0].className.replace(" active", "");
	   }
       if (target.classList.contains('jill')) {
       	   this.className += " active";
           jill();
           return;
       }
 
       else if (target.classList.contains('leon')) {
       	   this.className += " active";
           leon();
           return;
       }
 
       else if (target.classList.contains('ada')) {
       	   this.className += " active";
           ada();
           return;
       }
 
       else if (target.classList.contains('carlos')) {
       	   this.className += " active";
           carlos();
           return;
       }
       else if (target.classList.contains('nemesis')) {
       	   this.className += " active";
           nemesis();
           return;
       }
 
       else if (target.classList.contains('wesker')) {
           this.className += " active";
           wesker();
           return;
       }
 
       else if (target.classList.contains('saddler')) {
       	   this.className += " active";
           saddler();
           return;
       }
 
       else if (target.classList.contains('mrx')) {
       	   this.className += " active";
           mrx();
           return;
       }

   });
}
function re4(){
	document.getElementById('imgchar').src = '../assets/img/adare4.png';
}
function re2(){
	document.getElementById('imgchar').src = '../assets/img/adare2.jpg';
}
function re6(){
	document.getElementById('imgchar').src = '../assets/img/adare6.jpg';
}
const adas = document.querySelectorAll(".ada");
for (let ada of adas) {
   ada.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('re4')) {
           re4();
           return;
       }
 
       else if (target.classList.contains('re6')) {
           re6();
           return;
       }
 
       else if (target.classList.contains('re2')) {
           re2();
           return;
       }
 
   });
}
function cre3(){
	document.getElementById('imgchar').src = '../assets/img/carlre3.jpg';
}
function cre3m(){
	document.getElementById('imgchar').src = '../assets/img/carlrem.png';
}
const carl = document.querySelectorAll(".carl");
for (let c of carl) {
   c.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('cre3')) {
           cre3();
           return;
       }
 
       else if (target.classList.contains('cre3m')) {
           cre3m();
           return;
       }
 
   });
}
function jre3(){
	document.getElementById('imgchar').src = '../assets/img/jillre3m.png';
}
function jre1(){
	document.getElementById('imgchar').src = '../assets/img/re1.png';
}
function jre5(){
	document.getElementById('imgchar').src = '../assets/img/jillre5.png';
}
const jills = document.querySelectorAll(".jill");
for (let j of jills) {
   j.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('jre3')) {
           jre3();
           return;
       }
 
       else if (target.classList.contains('jre1')) {
           jre1();
           return;
       }
        else if (target.classList.contains('jre5')) {
           jre5();
           return;
       }
 
   });
}
function lre2(){
	document.getElementById('imgchar').src = '../assets/img/leonre2.jpg';
}
function lre4(){
	document.getElementById('imgchar').src = '../assets/img/leonre4.jpg';
}
function lre6(){
	document.getElementById('imgchar').src = '../assets/img/leonre6.png';
}
const leons = document.querySelectorAll(".leon");
for (let l of leons) {
   l.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('lre2')) {
           lre2();
           return;
       }
 
       else if (target.classList.contains('lre4')) {
           lre4();
           return;
       }
        else if (target.classList.contains('lre6')) {
           lre6();
           return;
       }
 
   });
}
function hero(){
	document.getElementById('villainpage').style.display = 'none'
	document.getElementById('heropage').style.display = 'block'
}
function vil(){
	document.getElementById('heropage').style.display = 'none'
	document.getElementById('villainpage').style.display = 'block'
}
const buttons = document.querySelectorAll(".btn");
for (let b of buttons) {
   b.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 	   var current = document.getElementsByClassName("active");

	    // If there's no active class
	   if (current.length > 0) {
	      current[0].className = current[0].className.replace(" active", "");
	   }
       if (target.classList.contains('hero')) {
       	   this.className += " active";
           hero();
           return;
       }
 
       else if (target.classList.contains('villain')) {
       	   this.className += " active";
           vil();
           return;
       }
 
   });
}

function wre5(){
	document.getElementById('imgchar').src = '../assets/img/weskerre5.png';
}
function wre4(){
	document.getElementById('imgchar').src = '../assets/img/weskerre4.jpg';
}
function wre1(){
	document.getElementById('imgchar').src = '../assets/img/weskerre1.png';
}
const weskers = document.querySelectorAll(".ws");
for (let w of weskers) {
   w.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('wre1')) {
           wre1();
           return;
       }
 
       else if (target.classList.contains('wre4')) {
           wre4();
           return;
       }
        else if (target.classList.contains('wre5')) {
           wre5();
           return;
       }
 
   });
}
function nre3(){
	document.getElementById('imgchar').src = '../assets/img/nemesisre3.jpg';
}
function nre3m(){
	document.getElementById('imgchar').src = '../assets/img/nemesisre3m.jpg';
}
const nems = document.querySelectorAll(".nem");
for (let n of nems) {
   n.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('nre3')) {
           nre3();
           return;
       }
 
       else if (target.classList.contains('nre3m')) {
           nre3m();
           return;
       }
   });
}
function mrxre2(){
	document.getElementById('imgchar').src = '../assets/img/mrxre2.png';
}
function mrxre2m(){
	document.getElementById('imgchar').src = '../assets/img/mrxre2m.jpg';
}
const mrxs = document.querySelectorAll(".mrx");
for (let m of mrxs) {
   m.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
 
       if (target.classList.contains('mre2')) {
           mrxre2();
           return;
       }
 
       else if (target.classList.contains('mre2m')) {
           mrxre2m();
           return;
       }
   });
}