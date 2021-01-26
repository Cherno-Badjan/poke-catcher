import { increaseCaught, increaseSeen } from "../localStorageUtils";


export function renderResults(_id) {
    const caughtCount = increaseCaught(_id);
    const seenCount = increaseSeen(_id);

    return caughtCount, seenCount;

}
