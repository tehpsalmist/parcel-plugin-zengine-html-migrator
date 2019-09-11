const HTMLAsset = require('./HTMLAsset')

class InterpolateHtmlAsset extends HTMLAsset {
    async pretransform() {
        this.contents = this.interpolate(this.contents)
        return super.pretransform()
    }

    interpolate(code) {
        const replacement = require('fs').readFileSync(require('path').resolve(process.cwd(), 'plugin', 'plugin.html'))
        return code.replace(`%PLUGIN_HTML%`, replacement)
    }
}

module.exports = InterpolateHtmlAsset
