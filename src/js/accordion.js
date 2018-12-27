class Accordion {
    constructor(id, options = {}) {
        this._matchUrl = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)
        this._accordion = document.getElementById(id)
        if (options.data) this._parseData(options.data)
        this._accordionClass = options.className || 'Accordion'
        this._headingClass = `${this._accordionClass}-heading`
        this._bodyClass = `${this._accordionClass}-body`
        this._openClass = `is-open`
        this._init()
    }

    _init() {
        this._accordion.className = this._accordionClass

        const headings = this._accordion.getElementsByTagName('dt')
        for (const heading of headings) {
            heading.className = this._headingClass
            heading.addEventListener('click', this._toggle.bind(this))
        }

        const bodies = this._accordion.getElementsByTagName('dd')
        for (const body of bodies) {
            body.className = this._bodyClass
        }
    }

    _parseData(data) {
        data.forEach(row => {
            const accordionHeading = document.createElement('dt')
            accordionHeading.innerText = row.heading
            this._accordion.appendChild(accordionHeading)

            const accordionBody = document.createElement('dd')
            this._accordion.appendChild(accordionBody)

            row.body.forEach(paragraph => {
                const url = paragraph.match(this._matchUrl)
                const accordionBodyParagraph = document.createElement(url ? 'a' : 'p')
                if (url) accordionBodyParagraph.href = url
                accordionBodyParagraph.innerText = paragraph
                accordionBody.appendChild(accordionBodyParagraph)
            })
        })
    }

    _toggle(event) {
        const body = event.target.nextElementSibling
        body.classList.contains(this._openClass) ? this._close(body) : this._open(body)
    }

    _open(body) {
        const bodies = this._accordion.getElementsByTagName('dd')
        for (const body of bodies) this._close(body)
        body.classList.add(this._openClass)
    }

    _close(body) {
        body.classList.remove(this._openClass)
    }
}
