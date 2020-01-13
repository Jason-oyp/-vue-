import compile from "./compile.js";

export default function render(vNode, envObj) {
    if (vNode.realDom.nodeType === 3) {
        if (vNode.realDom.nodeValue !== compile(vNode.template, envObj))
        vNode.realDom.nodeValue = compile(vNode.template, envObj);
    } else {
        for (let i = 0; i < vNode.children.length; i++) {
            render(vNode.children[i], envObj);
        }
    }
}