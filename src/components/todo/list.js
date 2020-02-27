import React, {useContext, useEffect, useState } from "react";
import {SettingsContext} from '../settings';
import {When} from '../if/';
import Auth from '../auth/auth';

const TodoList = props => {
  const list = props.list || [];
  const context = useContext(SettingsContext);
  const pageSize = context.pageSize;
  const pages = [];
  const currentPage = 0;



  useEffect(()=>{
    if(list.length < pageSize){
      pages.push(list);
    } 
    for (let i = 0; i < list.length; i += pageSize) {
      let page = list.slice(i, i + pageSize);
      pages.push(page);
    }
    
  })

  return (
    <ul>
      {list.map(item => (
        <li className={`complete-${item.complete.toString()}`} key={item._id}>
          <Auth capability="read">
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
          </Auth>

          <button onClick={() => props.handleDetails(item._id)}>Details</button>
          <Auth capability="delete">
            <button onClick={() => props.handleDelete(item._id)}>Delete</button>
          </Auth>
        </li>
      ))}
      <When condition={pages.length > 1}>
        <button name="next">Next</button>
      </When>
    </ul>
  );
};

export default TodoList;
