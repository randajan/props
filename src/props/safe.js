

export const safe = (obj, priv, name, set, get, enumerable=true, configurable=false)=>{
    return Object.defineProperty(obj, name, {
        set:set ? v=>priv[name] = set(v, priv[name], name) : undefined,
        get:get ? _=>get(priv[name], name) : _=>priv[name],
        enumerable, configurable
    });
}

export const safes = (obj, priv, namedSetsAndGets, enumerable=true, configurable=false)=>{
    for (const name in namedSetsAndGets) {
        const setGet = namedSetsAndGets[name];
        
        let set, get;
        if (typeof setGet !== "object") { set = setGet; }
        else { set = setGet.set || setGet[0]; get = setGet.get || setGet[1]; }

        safe(obj, priv, name, set, get, enumerable, configurable);
    }
    return obj;
}