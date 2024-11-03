
import { testCached, testCacheds } from "./props/cache.js";
import { testSafe, testSafes } from "./props/safe.js";
import { testSolid, testSolids } from "./props/solid.js";
import { testVirtual, testVirtuals } from "./props/virtual.js";

// Run tests
testSolid();
testSolids();


// Run tests
testVirtual();
testVirtuals();

testSafe();
testSafes();

testCached();
testCacheds();