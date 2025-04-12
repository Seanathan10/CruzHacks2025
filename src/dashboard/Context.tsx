import {createContext} from 'react';

export interface ContextType {
    mobile: boolean | undefined;
}

export const Context = createContext <ContextType | null> (null);
