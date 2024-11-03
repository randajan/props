

export const solid = (obj, name, value, enumerable=true, configurable=false)=>{
    return Object.defineProperty(obj, name, { enumerable, value, configurable });
}

export const solids = (obj, namedValues, enumerable=true, configurable=false)=>{
    for (const name in namedValues) {
        const value = namedValues[name];
        solid(obj, name, value, enumerable, configurable);
    }
    return obj;
}