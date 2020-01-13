export default function createResponse(origin, target, callback) {
    for (const props in origin) {
        if (origin.hasOwnProperty(props)) {

            if (typeof origin[props] === "object") {
                let newTarget = {};
                createResponse(origin[props], newTarget, callback);
                Object.defineProperty(target, props, {
                    get() {
                        return newTarget;
                    },
                    set(val) {
                        origin[props] = val;
                        newTarget = val;
                        callback && callback(val);
                    }
                })
            } else {
                Object.defineProperty(target, props, {
                    get() {
                        return origin[props];
                    },
                    set(val) {
                        origin[props] = val;
                        callback && callback(val);
                    }
                })
            }
        }
    }
}