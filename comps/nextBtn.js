//MUST HAVE - CREATE A TEMPLATE TAG
var template_nextBtn = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_nextBtn.innerHTML = `
<style>
    .nextBtn { 
        width: 0;
        height: 0;
        border-top: 30px solid transparent;
        border-bottom: 30px solid transparent;

        border-left: 50px solid green;
    }

    .nextBtn:hover {
        background-color: blue;
        transition: 0.5s;
    }

    .nextBtn:active {
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;

        border-left: 40px solid DarkGreen;
    }
</style>

<div class='nextBtn'></div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class NextBtn extends HTMLElement {
  //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
  constructor() {
    super(); //pass on the HTMLElement super powers!
    this.attachShadow({ mode: "open" }); //Attach it to the shadowRoot

    //To-do - CREATE THE STATES FOR THE UI HERE!
  }

  //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
  connectedCallback() {
    this.shadowRoot.appendChild(template_nextBtn.content.cloneNode(true)); //use the template to make a clone
  }

  //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("next-btn", NextBtn);
