import { safe, safes } from "../../../dist";


export const testSafe = () => {
    const obj = {};
    const priv = { secretValue: 10 };
    safe(obj, priv, 'publicValue', 
        (newValue, oldValue) => newValue * 2, // Setter doubles the value
        (storedValue) => storedValue + 1,     // Getter adds 1 to the stored value
        true, false
    );

    console.log('Testing safe function:');
    obj.publicValue = 5;
    console.log(obj.publicValue === 11 ? 'Pass' : 'Fail'); // Should log 'Pass'
    console.log(priv.secretValue === 10 ? 'Pass' : 'Fail'); // Should log 'Pass' (getter modifies result, not stored value)
    console.log(Object.getOwnPropertyDescriptor(obj, 'publicValue').enumerable === true ? 'Pass' : 'Fail'); // Should log 'Pass'
    console.log(Object.getOwnPropertyDescriptor(obj, 'publicValue').configurable === false ? 'Pass' : 'Fail'); // Should log 'Pass'
};

// Test for safes
export const testSafes = () => {
    const obj = {};
    const priv = { valueA: 100, valueB: 200 };
    const settersAndGetters = {
        propA: {
            set: (newValue) => newValue + 10,       // Setter adds 1 to new value
            get: (storedValue) => storedValue * 2  // Getter doubles the stored value
        },
        propB: {
            set: (newValue) => newValue - 10,       // Setter subtracts 1 from new value
            get: (storedValue) => storedValue / 2  // Getter halves the stored value
        }
    };

    safes(obj, priv, settersAndGetters, false, true);

    console.log('Testing safes function:');
    obj.propA = 50;
    obj.propB = 150;
    console.log(obj.propA === 120 ? 'Pass' : 'Fail'); // Should log 'Pass' (100 * 2 after set)
    console.log(obj.propB === 70 ? 'Pass' : 'Fail'); // Should log 'Pass' (200 / 2 after set)
    console.log(Object.getOwnPropertyDescriptor(obj, 'propA').enumerable === false ? 'Pass' : 'Fail'); // Should log 'Pass'
    console.log(Object.getOwnPropertyDescriptor(obj, 'propB').configurable === true ? 'Pass' : 'Fail'); // Should log 'Pass'
};