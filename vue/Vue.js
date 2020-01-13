import createVnode from './vNode.js'
import render from './render.js'
import createResponse from './dataResponse.js'


export default function Vue(options) {
    this.$data = options.data;
    this.$el = options.el;
    const vNode = createVnode(document.querySelector(this.$el));
    render(vNode, this.$data);
    createResponse(this.$data,this, () => {
        render(vNode, this.$data);
    })
}