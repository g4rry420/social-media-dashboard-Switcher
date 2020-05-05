let checkbox = document.querySelector("input");
    
    checkbox.addEventListener("change", (e)=>{
      let html = document.getElementsByTagName("html")[0];
      let media = window.matchMedia("(prefers-color-scheme: dark)");
      if(checkbox.checked === true){
        html.setAttribute("data-theme","light");
      }else if (checkbox.checked === false){
        html.setAttribute("data-theme", "dark");
      }
    })
