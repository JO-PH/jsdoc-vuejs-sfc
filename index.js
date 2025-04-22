/**
 * The plugin implements a beforeParse() event handler. Its only task
 * is to extract the contents of the <script setup> part of the single file component
 * (sfc) and pass it for further processing to the JSDoc process. This is done by
 * relying on the complier-sfc shipped with the vue ecosystem.
 * This code is actually based on a vastly simplified copy of the jsdoc-vuejs package.
 * @module jsdoc-vuejs-sfc
 * @summary A JSDoc plugin to document vuejs sfc files with <script setup> style.
 */
import { parse } from '@vue/compiler-sfc'
import fs from 'fs'

/**
 * Utilizes the compiler-sfc from the vue ecosystem to extract the <cript setup> portion of the vue sfc.
 * @param {String} filename 
 * @returns Returns the contents of the <script setup> tag of the sfc, or an empty string if not present.
 */
function extractVueScript(filename) {
    const source = fs.readFileSync(filename, 'utf8');
    const parsedComponent = parse(source);
    // Extract the <script setup> part of the SFC
    const scriptContent = parsedComponent.descriptor.scriptSetup ? parsedComponent.descriptor.scriptSetup.content : '';

    return scriptContent;
}

/**
 * Implements and registers the handler for .vue files.
 */
const handlers = {
    beforeParse(e) {
        if (/\.vue$/.test(e.filename)) {
            e.source = extractVueScript(e.filename);
        }
    }
}

export { handlers }
