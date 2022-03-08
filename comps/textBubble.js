//MUST HAVE - CREATE A TEMPLATE TAG
var template_textBubble = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_textBubble.innerHTML = `
<style>
    .text-bubble {
        width: 200px;
        height: 75px;
        padding: 20px;
        position: relative;
        background-color: blue;
        border-radius: 5px;
    }

    div:after {
      content: " ";
      position: absolute;
       right:30px;
       bottom: -15;
       border-top:15px solid blue;
       border-right: 15px solid transparent;
       border-left: 15px solid transparent;
      border-radius: 1px;
    } 

</style>

<div class='text-bubble'>

</div>
<div>O</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TextBubble extends HTMLElement {
  //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
  constructor() {
    super(); //pass on the HTMLElement super powers!
    this.attachShadow({ mode: "open" }); //Attach it to the shadowRoot

    //To-do - CREATE THE STATES FOR THE UI HERE!
  }

  //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
  connectedCallback() {
    this.shadowRoot.appendChild(template_textBubble.content.cloneNode(true)); //use the template to make a clone
  }

  //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("text-bubble", TextBubble);
