import { virtual, virtuals } from "../../../dist/esm/index.mjs";


export const testVirtual = () => {
    const obj = {};
    let value = 42;
    virtual(obj, 'virtualProp', () => value, true, false);

    console.log('Testing virtual function:');
    console.log(obj.virtualProp === 42 ? 'Pass' : 'Fail'); // Should log 'Pass'
    console.log(Object.getOwnPropertyDescriptor(obj, 'virtualProp').enumerable === true ? 'Pass' : 'Fail'); // Should log 'Pass'
    console.log(Object.getOwnPropertyDescriptor(obj, 'virtualProp').configurable === false ? 'Pass' : 'Fail'); // Should log 'Pass'
};

// Test for virtuals
export const testVirtuals = () => {
    const obj = {};
    const getters = {
        propA: () => 'A',
        propB: () => 'B'
    };
    virtuals(obj, getters, false, true);

    console.log('Testing virtuals function:');
    console.log(obj.propA === 'A' && obj.propB === 'B' ? 'Pass' : 'Fail'); // Should log 'Pass'
    console.log(Object.getOwnPropertyDescriptor(obj, 'propA').enumerable === false ? 'Pass' : 'Fail'); // Should log 'Pass'
    console.log(Object.getOwnPropertyDescriptor(obj, 'propB').configurable === true ? 'Pass' : 'Fail'); // Should log 'Pass'
};