import { solid, solids } from "../../../dist/esm/index.mjs";


export const testSolid = () => {
    const obj = {};
    solid(obj, 'testProp', 123, true, false);
    
    console.log('Testing solid function:');
    console.log(obj.testProp === 123 ? 'Pass' : 'Fail'); // Should log 'Pass'
    console.log(Object.getOwnPropertyDescriptor(obj, 'testProp').enumerable === true ? 'Pass' : 'Fail'); // Should log 'Pass'
    console.log(Object.getOwnPropertyDescriptor(obj, 'testProp').configurable === false ? 'Pass' : 'Fail'); // Should log 'Pass'
};

// Test for solids
export const testSolids = () => {
    const obj = {};
    const props = { propA: 'valueA', propB: 'valueB' };
    solids(obj, props, false, true);

    console.log('Testing solids function:');
    console.log(obj.propA === 'valueA' && obj.propB === 'valueB' ? 'Pass' : 'Fail'); // Should log 'Pass'
    console.log(Object.getOwnPropertyDescriptor(obj, 'propA').enumerable === false ? 'Pass' : 'Fail'); // Should log 'Pass'
    console.log(Object.getOwnPropertyDescriptor(obj, 'propB').configurable === true ? 'Pass' : 'Fail'); // Should log 'Pass'
};