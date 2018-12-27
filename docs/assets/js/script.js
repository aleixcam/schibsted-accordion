const accordion = new Accordion('accordion')

Bolt.getDownloadLinks(links => {
    const accordionAjax = new Accordion('accordion-ajax', {
        data: links
    })
})
