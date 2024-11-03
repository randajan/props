import { safe } from "./safe";


export const cached = (obj, priv, name, reset, get, enumerable=true, configurable=false)=>{
    const setAndGet = v=>{
        if (!priv.hasOwnProperty(name)) { v = priv[name] = reset(name); }
        return get ? get(v, name) : v;
    };
    return safe(obj, priv, name, null, setAndGet, enumerable, configurable);
};

export const cacheds = (obj, priv, namedResetsAndGets, enumerable=true)=>{
    for (const name in namedResetsAndGets) {
        const resetGet = namedResetsAndGets[name];
        
        let reset, get;
        if (typeof resetGet !== "object") { reset = resetGet; }
        else { reset = resetGet.reset || resetGet[0]; get = resetGet.get || resetGet[1]; }

        cached(obj, priv, name, reset, get, enumerable);
    }
    return obj;
}