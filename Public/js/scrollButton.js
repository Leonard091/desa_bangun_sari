function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
  
    window.scrollTo({
      top: middle,
      behavior: 'smooth'
    });
  }

  document.getElementById('scrollButton').addEventListener('click', function() {
    // Scroll ke target pertama
    scrollToElement('target1');
  
    // Set delay 2 detik, lalu scroll ke target kedua
    setTimeout(function() {
      scrollToElement('target2');
    }, 3000);

    setTimeout(function() {
      scrollToElement('target3');
    }, 7000);

    setTimeout(function() {
      scrollToElement('target4');
    }, 11500);
  });