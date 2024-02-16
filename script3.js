function hideElement() {
    var element = document.getElementById('nm');
    if (element.style.display !== 'none') {
      element.style.display = 'none';
      
    }
  }

  function showElement() {
    var element = document.getElementById('nm');
    if (element.style.display === 'none') {
      element.style.display = 'block';
    }
  }

  document.getElementById("cl1").addEventListener("click", function() {
    addClass();
  });
  
  
  function addClass() {
    document.getElementById("cl1").classList.add("color");
    document.getElementById("cl").classList.add("displaycolor");
  };


  