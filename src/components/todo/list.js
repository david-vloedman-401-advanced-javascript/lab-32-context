import React, {useContext, useEffect, useState } from "react";
import {SettingsContext} from '../settings';
import {When, If, Then, Else} from '../if/';
import Auth from '../auth/auth';



/**
 * A component for the list of todo items
 * @param {*} props 
 */
const TodoList = props => {
  const list = props.list || [];
  const context = useContext(SettingsContext);
  const pageSize = context.pageSize;
  const pages = [];
  const currentPage = 0;


  useEffect(()=>{
       if (list.length < pageSize) {
        pages.push(list);
      }
      for (let i = 0; i < list.length; i += pageSize) {
        let page = list.slice(i, i + pageSize);
        pages.push(page);
      }
      console.log(pages);
      console.log('use effect');

    
  })

  return (
    <ul>
      
      <When condition={!context.hideCompleted}>
        {list
          .filter(item => !item.complete)
          .map(item => (
            <li
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <Auth capability="read">
                <span onClick={() => props.handleComplete(item._id)}>
                  {item.text}
                </span>
              </Auth>

              <button onClick={() => props.handleDetails(item._id)}>
                Details
              </button>
              <Auth capability="delete">
                <button onClick={() => props.handleDelete(item._id)}>
                  Delete
                </button>
              </Auth>
            </li>
          ))}
      </When>
      <When condition={context.hideCompleted}>
        {list.map(item => (
          <li className={`complete-${item.complete.toString()}`} key={item._id}>
            <Auth capability="read">
              <span onClick={() => props.handleComplete(item._id)}>
                {item.text}
              </span>
            </Auth>

            <button onClick={() => props.handleDetails(item._id)}>
              Details
            </button>
            <Auth capability="delete">
              <button onClick={() => props.handleDelete(item._id)}>
                Delete
              </button>
            </Auth>
          </li>
        ))}
      </When>
      <button
        name="displayCompleted"
        onClick={() => context.setHideCompleted(!context.hideCompleted)}
      >
        Toggle Completed
      </button>
      <If condition={pages.length > 1}>
        <Then>         
          <button name="next">Next</button>
        </Then>
      </If>
    </ul>
  );
};

export default TodoList;
