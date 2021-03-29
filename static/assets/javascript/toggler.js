/**
 * @typedef {Object} SideNavTogglerOptions
 *
 * @prop {boolean} expanded
 * @prop {string} openClass
 * @prop {(context: SideNavToggler) => null} onOpenStart
 * @prop {(context: SideNavToggler) => null} onCloseStart
 * @prop {(context: SideNavToggler) => null} onOpenEnd
 * @prop {(context: SideNavToggler) => null} onCloseEnd
 */

class SideNavToggler {
    /**
     * @param {HTMLElement} toggler
     * @param {SideNavTogglerOptions} options
     */
    constructor(toggler, options = {}) {
        const {
            expanded = false,
            openClass = 'is-open',
            onOpenStart = () => null,
            onCloseStart = () => null,
            onOpenEnd = () => null,
            onCloseEnd = () => null,
        } = options;

        /**
         * @private
         * @type {HTMLElement}
         */
        this.toggler = toggler;

        /**
         * @private
         * @type {HTMLElement}
         */
        this.nav = document.getElementById(
            toggler.getAttribute('aria-controls')
        );

        /**
         * @private
         * @type {boolean}
         */
        this.expanded = expanded;

        /**
         * @private
         * @type {string}
         */
        this.openClass = openClass;

        this.onOpenStart(onOpenStart)
            .onOpenEnd(onOpenEnd)
            .onCloseStart(onCloseStart)
            .onCloseEnd(onCloseEnd);

        this.toggleState = this.toggleState.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    /**
     * @param {(context: this) => null}
     * @returns {this}
     */
    onOpenStart(handler) {
        this._onOpenStart = handler;
        return this;
    }

    /**
     * @param {(context: this) => null}
     * @returns {this}
     */
    onOpenEnd(handler) {
        this._onOpenEnd = handler;
        return this;
    }

    /**
     * @param {(context: this) => null}
     * @returns {this}
     */
    onCloseStart(handler) {
        this._onCloseStart = handler;
        return this;
    }

    /**
     * @param {(context: this) => null}
     * @returns {this}
     */
    onCloseEnd(handler) {
        this._onCloseEnd = handler;
        return this;
    }

    /**
     * @private
     * @param {boolean} expanded
     * @returns {this}
     */
    toggleState(expanded) {
        this.expanded = expanded;

        if (this.expanded) {
            this.nav.classList.add(this.openClass);
            this.toggler.setAttribute('disabled', this.expanded);
        } else {
            this.nav.classList.remove(this.openClass);
            this.toggler.removeAttribute('disabled');
        }

        this.toggler.setAttribute('aria-expanded', this.expanded);

        return this;
    }

    /** @returns {this} */
    open() {
        this._onOpenStart(this);
        this._onOpenEnd(this.toggleState(true));

        return this;
    }

    /** @returns {this} */
    close() {
        this._onCloseStart(this);
        this._onCloseEnd(this.toggleState(false));

        return this;
    }

    /**
     * @private
     * @param {Function}
     */
    registerAs(role) {
        this.toggler.addEventListener('click', role);
    }

    registerAsOpener() {
        this.registerAs(this.open);
    }

    registerAsClosing() {
        this.registerAs(this.close);
    }
}

const mainOpener = new SideNavToggler(document.querySelector('#main'));
const mainClosing = new SideNavToggler(document.querySelector('#closenav'));

mainOpener.registerAsOpener();
mainClosing.onCloseEnd(mainOpener.close).registerAsClosing();