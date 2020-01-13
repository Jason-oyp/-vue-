function VNode(realDom, template) {
    this.realDom = realDom;
    this.template = template;
    this.children = [];
}
export default function createVnode(realDom) {
    const vNode = new VNode(realDom, "");
    if (realDom.nodeType === 3) {
        vNode.template = realDom.nodeValue;
    }
    else {
        for (let i = 0; i < realDom.childNodes.length; i++) {
            createVnode(realDom.childNodes[i], '');
            vNode.children.push(createVnode(realDom.childNodes[i], ''));
        }
    }
    return vNode;
}