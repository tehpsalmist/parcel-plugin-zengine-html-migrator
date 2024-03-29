const HTMLAsset = require('./HTMLAsset')

class ZengineMigratorHtmlAsset extends HTMLAsset {
    async pretransform() {
        this.contents = this.interpolate(this.contents)
        return super.pretransform()
    }

    interpolate(code) {
        const replacement = require('fs').readFileSync(require('path').resolve(process.cwd(), 'v1-output', 'plugin.html'))

        return code.replace(`%PLUGIN_HTML%`, replacement)
    }
}

module.exports = ZengineMigratorHtmlAsset
