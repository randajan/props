import { cached, cacheds } from "../../../dist";

export const testCached = () => {
    const obj = {};
    const priv = {};
    let resetCalled = false;

    cached(obj, priv, 'lazyProp', 
        () => { resetCalled = true; return 99; }, // Reset function sets value to 99 and tracks if called
        (value) => value + 1,                     // Getter adds 1 to the stored value
        true, false
    );

    console.log('Testing cached function:');
    console.log(resetCalled === false ? 'Pass' : 'Fail'); // Should log 'Pass' (reset not yet called)
    console.log(obj.lazyProp === 100 ? 'Pass' : 'Fail'); // Should log 'Pass' (99 + 1 from getter)
    console.log(resetCalled === true ? 'Pass' : 'Fail'); // Should log 'Pass' (reset called on first access)
    console.log(priv.lazyProp === 99 ? 'Pass' : 'Fail'); // Should log 'Pass' (99 stored in priv after first access)
};

// Test for cacheds
export const testCacheds = () => {
    const obj = {};
    const priv = {};
    let resetACalled = false;
    let resetBCalled = false;

    const resetsAndGets = {
        cachedA: {
            reset: () => { resetACalled = true; return 10; }, // Reset function sets value to 10 for cachedA
            get: (value) => value * 2                         // Getter doubles the stored value
        },
        cachedB: {
            reset: () => { resetBCalled = true; return 20; }, // Reset function sets value to 20 for cachedB
            get: (value) => value / 2                         // Getter halves the stored value
        }
    };

    cacheds(obj, priv, resetsAndGets, false);

    console.log('Testing cacheds function:');
    console.log(resetACalled === false && resetBCalled === false ? 'Pass' : 'Fail'); // Should log 'Pass' (no resets called yet)
    console.log(obj.cachedA === 20 ? 'Pass' : 'Fail'); // Should log 'Pass' (10 * 2 from getter)
    console.log(obj.cachedB === 10 ? 'Pass' : 'Fail'); // Should log 'Pass' (20 / 2 from getter)
    console.log(resetACalled === true && resetBCalled === true ? 'Pass' : 'Fail'); // Should log 'Pass' (both resets called on first access)
    console.log(priv.cachedA === 10 && priv.cachedB === 20 ? 'Pass' : 'Fail'); // Should log 'Pass' (initial values stored in priv)
};