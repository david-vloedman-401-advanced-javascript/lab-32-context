import React, {useState} from 'react';

export const SettingsContext = React.createContext();
/**
 * Context for application settings
 * @param {*} props 
 */
function SettingsProvider(props){
  const [hideCompleted, setHideCompleted] = useState(false);
  const [pageSize, setPageSize] = useState(5);

  const state = {
    hideCompleted,
    pageSize,
    setHideCompleted,
    setPageSize
  }
  
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;