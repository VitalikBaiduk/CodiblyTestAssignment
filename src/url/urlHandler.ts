import { atomWithHash } from "jotai/utils";

export const currentPageAtom = atomWithHash("page", 0);
export const currentItemId = atomWithHash("id", "");
