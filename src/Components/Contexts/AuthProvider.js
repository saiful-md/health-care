import React, { createContext } from 'react';
import useFirebase from '../Hook/UseFirebase/UseFirebase';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const allCotext = useFirebase();
	return <AuthContext.Provider value={allCotext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
