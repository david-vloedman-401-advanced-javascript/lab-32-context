import React, {useState} from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props){
  const [hideCompleted, setHideCompleted] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  
}