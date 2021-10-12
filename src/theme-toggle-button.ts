import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { lightThemeIcon, darkThemeIcon } from "./icons";

export const tagName = "theme-toggle-button"

@customElement("theme-toggle-button")
export class ThemeToggleButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      outline: none;
      vertical-align: top;
    }
    button {
      padding: 0.25rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      border: none;
      outline: none;
      background-color: transparent;
      fill: currentcolor;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      vertical-align: top;
      -webkit-tap-highlight-color: transparent;
      border-radius: 50%;
      transition: background-color 100ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
    button:hover {
      background-color: var(--theme-offset-bg, #efefef);
    }
  `;

  // set the _doc element
  private _doc = document.firstElementChild;

  /**
   * The theme for the website the component is being used on
   */
  @property({ type: String, reflect: true, attribute: "theme" })
  theme = "light";


  @property({type: Boolean, reflect: true, attribute: 'remember-setting' })
  rememberSetting = false;

  render() {
    return html`<button
      @click=${this._toggleTheme}
      title=${`Enable ${this.theme === "dark" ? "Light" : "Dark"} Theme`}
    >
      ${this.theme === "dark"
        ? html`${lightThemeIcon}`
        : html`${darkThemeIcon}`}
    </button>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this._getCurrentTheme();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  private _getCurrentTheme() {
    // check for a local storage theme first
    const localStorageTheme = localStorage.getItem("theme");
    this.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    if (localStorageTheme !== null) {
      this.theme = localStorageTheme;
    }

    this._setCurrentTheme();
  }

  private _setCurrentTheme() {
    if (this.theme === "light") {
      this._doc!.setAttribute("color-scheme", "light");
    } else {
      this._doc!.setAttribute("color-scheme", "dark");
    }
  }

  private _toggleTheme() {
    if (this.theme === "light") {
      this.theme = "dark";
      this._doc!.setAttribute("color-scheme", "dark");
    } else {
      this.theme = "light";
      this._doc!.setAttribute("color-scheme", "light");
    }
    if(this.rememberSetting) {
      localStorage.setItem("theme", `${this.theme}`);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "theme-toggle-button": ThemeToggleButton;
  }
}
