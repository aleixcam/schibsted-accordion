class Bolt {
    static releases() {
        return fetch('https://api.github.com/repos/aleixcam/bolt/releases', {
            method: 'GET'
        }).then(result => {
            return result.json()
        }).then(json => {
            if (Array.isArray(json)) return json
            throw Error(json.message)
        }).then(releases => {
            if (releases.length > 0) return releases
            throw Error('No releases found')
        }).catch(error => {
            console.error(error)
        })
    }

    static getDownloadLinks(callback) {
        return this.releases()
            .then(releases => {
                const links = []
                releases.forEach(release => {
                    const name = `Bolt-${release.name}-mac.zip`
                    const asset = release.assets.find(asset => asset.name === name)
                    console.log(release);
                    links.push({
                        heading: `Bolt ${release.tag_name}`,
                        body: [
                            asset.browser_download_url,
                            release.body
                        ]
                    })
                })

                return callback(links)
            }).catch(error => {
                console.error(error)
            })
    }
}
