var home_nav=document.getElementById('home-nav');
var about_nav=document.getElementById('about-nav');
var skills_nav =document.getElementById('skills-nav');
var experience_nav=document.getElementById('experience-nav');
var education_nav=document.getElementById('education-nav');
var portfolio_nav=document.getElementById('portfolio-nav');
var contact_nav=document.getElementById('contact-nav');

var home=document.getElementById('home');
var about=document.getElementById('about');
var skills =document.getElementById('skills');
var experience=document.getElementById('experience');
var education=document.getElementById('education');
var portfolio=document.getElementById('portfolio');
var contact=document.getElementById('contact');



function homescroll(){
    
    var hm_id=setInterval(() => {
        if(window.pageYOffset<10){
            scrollBy(0,3.5);
        }else{
            clearInterval(hm_id);
        }
          

    },200);
    



};


function aboutscroll(){
    
    var ab_id=setInterval(() => {
        if(window.pageYOffset<340){
            scrollBy(0,50);
        }else{
            clearInterval(ab_id);
        }
          

    },200);
    



};

function skillsscroll(){
    
    var s_id=setInterval(() => {
        if(window.pageYOffset<750){
            scrollBy(0,50);
        }else{
            clearInterval(s_id);
        }
          

    },200);
    



};



function expiescroll(){
    
    var ex_id=setInterval(() => {
        if(window.pageYOffset<1300){
            scrollBy(0,100);
        }else{
            clearInterval(ex_id);
        }
          

    },200);
    



};
function eduscroll(){
    
    var ed_id=setInterval(() => {
        if(window.pageYOffset<2255){
            scrollBy(0,100);
        }else{
            clearInterval(ed_id);
        }
          

    },200);
    



};

function portfolioscroll(){
    
    var po_id=setInterval(() => {
        if(window.pageYOffset<3300){
            scrollBy(0,100);
        }else{
            clearInterval(po_id);
        }
          

    },200);
    



};

function contactscroll(){
    
    var s_id=setInterval(() => {
        if(window.pageYOffset<3500){
            scrollBy(0,100);
        }else{
            clearInterval(s_id);
        }
          

    },200);
    



};

home_nav.addEventListener('click',homescroll);
about_nav.addEventListener('click',aboutscroll);
skills_nav.addEventListener('click',skillsscroll);
experience_nav.addEventListener('click',expiescroll);
education_nav.addEventListener('click',eduscroll);
portfolio_nav.addEventListener('click',portfolioscroll);
contact_nav.addEventListener('click',contactscroll);



// var c=document.querySelectorAll('.percent-indicator');
// var skill_main=document.getElementById("skill-main-div");



// console.log(c);
// var c=document.querySelectorAll('.percent-indicator');
// var s=document.querySelectorAll('#skill-main-div');

// var toprange=s[0].getBoundingClientRect().top;
// var bottomrange=s[6].getBoundingClientRect().bottom;

// var harrcw=new Array(7);
// for(var i=0;i<c.length;i++){
//           harrcw[i]=c[i].offsetWidth;
//      }


// function skillsscrolling(){
   
//     var curr=window.pageYOffset;

//     if(curr>=toprange&&curr<=bottomrange){
//        // console.log(curr,"1");
//         var ids=setInterval(widthinc,1000);
//         var xc=0;
//         function widthinc(){
//             var wi=c[0].offsetWidth;
            
//             if(wi<harrcw[0]){
                
//                 c[0].style.width="xc%";
//                 xc=xc+10;
               
//             }else{
//                 clearInterval(ids);
//             }

//         };

        
         
        

    
    
//     }else {
//         console.log("fuck3");
//       for(var i=0;i<c.length;i++){
//           c[i].style.width="0%";
//       }

//     }



// };


// var gettingskills=document.querySelectorAll('.percent-indicator');

// //gettingskills[0].style.backgroundColor="yellow";
// var skillmainsection=document.getElementById('skill-main');
// //skillmainsection.style.backgroundColor="pink";
// var tops=skillmainsection.getBoundingClientRect().top;
// var bottoms=skillmainsection.getBoundingClientRect().bottom;

// var allwidths=new Array();
// for(var i=0;i<gettingskills.length;i++){

//  allwidths[i]=gettingskills[i].offsetWidth;


// }

// function alltimes(){

//  var curr =window.pageYOffset;
//  if(curr>=tops&&curr<=bottoms){
    

//     for(var i=0;i<gettingskills.length;i++){

//         gettingskills[i].style.width="allwidths[i]";
       
       
//        }

//  }else{
     
//     for(var i=0;i<gettingskills.length;i++){

//         gettingskills[i].style.width="0";
       
       
//        }

//  }


// }



// setInterval(alltimes,100)

function clearbars(){

    for(let a of skillscontainer){
        a.style.width=0+"%";
    }
};

var skillscontainer=document.querySelectorAll('.percent-indicator');

var skillmain=document.getElementById('skill-main');

window.addEventListener('scroll',skillsmekya);

var animationsshot=false;

clearbars();

function fillbars(){

    for(let a of skillscontainer){
         let val=a.getAttribute('data-bar');
         let id=setInterval(filling,25);
         let initial=0;
         function filling(){
             if(initial<val){
                 initial=initial+1;
                 a.style.width=initial+"%";
             }else{
                 clearInterval(id);
             }

         };

    }


};







function skillsmekya(){

var contain=skillmain.getBoundingClientRect();

if(contain.top<=window.innerHeight&&!animationsshot){
    animationsshot=true;
   fillbars();

}else if(contain.top>window.innerHeight){
    clearbars();
    animationsshot=false;
}
    



};
