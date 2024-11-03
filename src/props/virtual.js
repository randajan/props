

export const virtual = (obj, name, get, enumerable=true, configurable=false)=>{
    return Object.defineProperty(obj, name, { enumerable, get, configurable })
}

export const virtuals = (obj, namedGets, enumerable=true, configurable=false)=>{
    for (const name in namedGets) {
        const get = namedGets[name];
        virtual(obj, name, get, enumerable, configurable);
    }
    return obj;
}