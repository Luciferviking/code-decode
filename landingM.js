  gsap.to(("#ltrRound1, #ltrRound2, #ltrRound3"),1,{rotation: "720",stagger: 0.2,yoyo:false});
  function topArray(){
    gsap.to((".topArray"), 1, {y:87});
  }
  function lowArray(){
    gsap.to((".lowArray"), 1, {y:-87});
  }
  function centerR(){
   gsap.to(("#centerR, #centerR2, #ltrRound3"), 1, {x:-87}); 
  }
  function centerL(){
   gsap.to(("#centerL, #centerL2, #ltrRound1"), 1, {x:87}); 
  }
  function enlarge(){
    gsap.to(("#enlarge"),1,{display: "block", fontSize: 7500});
  }

  setTimeout(topArray, 1010);
  setTimeout(lowArray, 1010);
  setTimeout(centerR, 2010);
  setTimeout(centerL, 2010);
  setTimeout(enlarge, 3010);


  setTimeout(function(){
    var element = document.getElementById("homepage");
    element.click();  
    console.log("clicked");
  }, 4010);
 
