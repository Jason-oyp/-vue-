
function getFragments(template, envObj) {
    const result = template.match(/{{[a-zA-Z0-9._$]+}}/g);

    result && result.forEach((item) => {
        template = template.replace(item, getValue(item, envObj))
    });
    return template;
}

function getValue(item,envObj) {
    const it = item.replace('{{', "").replace("}}", '').split(".");
    let temp = envObj;
    it.forEach(i => {
        temp = temp[i];
    });
    return temp;
}



export default function compile(template, envObj) {
    return getFragments(template,envObj);
}

// getFragments('name:{{name}},{{obj.x}}', {
//     name: 'jason',
//     obj: {
//         x:1
//     }
// });
