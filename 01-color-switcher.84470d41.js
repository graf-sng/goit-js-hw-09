const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};let e=null;t.stop.disabled=!0,t.start.addEventListener("click",(()=>{e=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(()=>{clearInterval(e),t.start.disabled=!1,t.stop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.84470d41.js.map