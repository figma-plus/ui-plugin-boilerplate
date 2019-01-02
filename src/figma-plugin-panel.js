/*
<div>
  <div class="figma-plugin-panel">
    <header>
      <span>
        Figma Plugin Boilerplate
      </span>
      <button><span class="g0126e402"></span></button>
    </header>
    <main class="empty">
      <h2>Nothing is here</h2>
      <p>
        Here's a message to say that this is an empty state.<br />
        Write anything, inculding emojis 😉
        </p>
    </main>
  </div>

  <div class="figma-plugin-panel">
    <header>
      <nav>
        <button class="active">Active</button>
        <button>Inactive</button>
      </nav>
      <button><span class="g0126e402"></span></button>
    </header>
    <main>
      Hello
    </main>
    <footer>
      <button>Cancel</button>
      <button class="primary">Confirm</button>
    </footer>
  </div>
</div>
*/

import h from 'vhtml';
/** @jsx h */

import './assets/figma-plugin-boilerplate.scss';

const createHtmlNodes = str => document.createRange().createContextualFragment(str);
 
const panel = ({
  id,
  title,
  showClose,
  tabs,
}) =>
  <div class="figma-plugin-panel" id={id}>
    <header>
      {Array.isArray(tabs) && tabs.length > 0 ?
        <nav>
          {tabs.map(tab => <button>{tab}</button>)}
        </nav>
        :
        <span>${title}</span>
      }
      {showClose ? <button><span class="g0126e402"></span></button> : ''}
    </header>
    <main>
    </main>
  </div>
;

const footer = <footer></footer>;



export default class FigmaPluginPanel {
  constructor(args) {
    const ui = panel(args);
    const htmlNodes = createHtmlNodes(ui);
    document.body.appendChild(htmlNodes);

    this.panel = document.getElementById(args.id);

    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    this.panel.style.left = (clientWidth/2) - (args.width/2) + 'px';
    this.panel.style.top = (clientHeight/2) - (args.height/2) + 'px';

    this.header = this.panel.getElementsByTagName("header")[0];
    this.draggable(this.panel, this.header);
  }

  draggable(panel, header) {
    var isMouseDown = false;
  
    // initial mouse X and Y for `mousedown`
    var mouseX;
    var mouseY;
  
    // element X and Y before and after move
    var elementX = parseInt(panel.style.left) || 0;
    var elementY = parseInt(panel.style.top) || 0;
  
    // mouse button down over the element
    header.addEventListener('mousedown', onMouseDown);
  
    /**
     * Listens to `mousedown` event.
     *
     * @param {Object} event - The event.
     */
    function onMouseDown(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      isMouseDown = true;
    }
  
    // mouse button released
    header.addEventListener('mouseup', onMouseUp);
  
    /**
     * Listens to `mouseup` event.
     *
     * @param {Object} event - The event.
     */
    function onMouseUp(event) {
      isMouseDown = false;
      elementX = parseInt(panel.style.left) || 0;
      elementY = parseInt(panel.style.top) || 0;
    }
  
    // need to attach to the entire document
    // in order to take full width and height
    // this ensures the element keeps up with the mouse
    document.addEventListener('mousemove', onMouseMove);
  
    /**
     * Listens to `mousemove` event.
     *
     * @param {Object} event - The event.
     */
    function onMouseMove(event) {
      if (!isMouseDown) return;
      var deltaX = event.clientX - mouseX;
      var deltaY = event.clientY - mouseY;
      panel.style.left = elementX + deltaX + 'px';
      panel.style.top = elementY + deltaY + 'px';
    }
  }
}