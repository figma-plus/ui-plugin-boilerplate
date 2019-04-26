/** @jsx h */
import "./figma-plugin-ui.scss";
import h from "vhtml";
import { getDomNode } from "./utils";

export default class ExamplePlugin {
  constructor() {
    this.pluginName = "Example Plugin";

    // SETUP PLUGIN
    const shortcut = {
      mac: {
        option: true,
        shift: true,
        key: "H"
      },
      windows: {
        alt: true,
        shift: true,
        key: "H"
      }
    };

    const options = {
      label: this.pluginName,
      action: this.action,
      shortcut
    };

    window.figmaPlus.addCommand(options);

    // The UI follows a strict structure to utlize the CSS shipped with this boilerplate
    // But you can freely play with the css in figma-plugin-ui.scss

    this.html = (
      <div class="figma-plugin-ui">
        <div class="scrollable">
          <h2>Section 1</h2>

          <div class="field">
            <label for="input1">Label</label>
            <input id="input1" type="text" />
            <p>
              Help text for input, explain what's the behavior of this input
              field.
            </p>
          </div>

          <h2>Section 2</h2>

          <div class="field-row">
            <label for="input2">Label</label>
            <input id="input2" type="text" />
          </div>

          <div class="field-row">
            <label for="input3">Label</label>
            <input id="input3" type="text" />
          </div>

          <div class="field-row">
            <label for="input4">Label</label>
            <input id="input4" type="text" />
          </div>

          <h2>Section 3</h2>

          <div class="field">
            <label for="select1">Select</label>
            <select id="select1">
              <option>First</option>
              <option>Second</option>
              <option>Third</option>
            </select>
          </div>

          <div class="field">
            <label for="select2">Select with wrapper</label>
            <div class="select">
              <select id="select2">
                <option>First</option>
                <option>Second</option>
                <option>Third</option>
              </select>
            </div>
          </div>

          <h2>Section 3</h2>
          <div class="field-row">
            <button id="button1">Button 1</button>
            <button id="button2">Button 2</button>
            <button id="button3">Button 3</button>
            <button id="button4">Button 4</button>
          </div>
        </div>
        <footer>
          <button id="button-secondary">Secondary</button>
          <button id="button-primary" class="primary">
            Primary
          </button>
        </footer>
      </div>
    );
  }

  onInteract = event => {
    /*
      We're using one function to handle all UI elements
      here just to make the example shorter.
      We recommend using a separate function for each ui element.
    */
    console.log(event.target.id, event);

    if (event.target.id === "button-primary") {
      window.figmaPlus.hideUI(this.pluginName);
    }
  };

  attachEvents = element => {
    /*
      No need to removeEventListeners because figmaPlus.hideUI
      removes the plugin from the DOM.  This removes listeners too.
    */

    ["#input1", "#input2", "#input3", "#input4"].map(id =>
      getDomNode(id).addEventListener("input", this.onInteract)
    );

    ["#select1", "#select2"].map(id =>
      getDomNode(id).addEventListener("change", this.onInteract)
    );

    [
      "#button1",
      "#button2",
      "#button3",
      "#button4",
      "#button-secondary",
      "#button-primary"
    ].map(id => getDomNode(id).addEventListener("click", this.onInteract));
  };

  action = () => {
    /*
      Show the plugin modal using figmaPlugin API.
      figmaPlus.showUI({
          title,
          html,
          reactComponent,
          vueComponent,
          onMount,
          width,
          height,
          positionX,
          positionY,
          overlay,
          padding,
          useFigmaStyles,
          tabs
      });
    */
    window.figmaPlus.showUI({
      title: this.pluginName,
      html: this.html,
      onMount: element => {
        // Hookup onInteract to handle all UI events.
        // You can also use a separate handler for each UI element..
        // it's just plain ol javascript.

        this.attachEvents(element);
      },
      width: 460,
      height: 600,
      positionX: 0.5,
      positionY: 0.5,
      overlay: false,
      padding: false,
      useFigmaStyles: false
    });
  };
}

window.examplePlugin = new ExamplePlugin();
