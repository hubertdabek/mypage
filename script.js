/* ------------------------ about me tab links -------------------------*/
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
/* ---------------------------- header side menu ----------------------------- */
        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }
/* --------------------- contact form ---------------------------*/
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwDjvmb56qkfNqqbBmMqwBgDnMqlKx8XZyR5Tk3wHVVABMNyQCypdIUmJ8DDyNKOAm5rw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message send successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
            else{
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
