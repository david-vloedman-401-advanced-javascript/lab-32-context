import React, { useEffect, useState, useContext } from "react";
import useFetch from "../../hooks/fetch.js";
import { When } from "../if";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import TodoItem from "./item.js";
import {SettingsContext} from '../settings';
import Auth from '../auth/auth'

import "./todo.scss";


const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

const ToDo = () => {
  const [todoList, setToDoList] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showItem, setShowItem] = useState({});

  
  const { request, response, error, isLoading } = useFetch();

  const context = useContext(SettingsContext);

  const _addItem = item => {
    const addRequest = {
      url: todoAPI,
      options: {
        method: "post",
        body: JSON.stringify(item)
      }
    };
    console.log(addRequest.options.body);
    request(addRequest);
  };

  useEffect(()=>{
    document.title = `${todoList.filter(item => !item.complete).length} items to Complete`;
  });

  const _deleteItem = id => {
    const deleteRequest = {
      url: `${todoAPI}/${id}`,
      options: {
        method: "delete"
      }
    };
    request(deleteRequest);
  };

  const _toggleComplete = id => {
    let item = todoList.filter(i => i._id === id)[0] || {};
    item.complete = !item.complete;
    const updateRequest = {
      url: `${todoAPI}/${id}`,
      options: {
        method: "put",
        body: JSON.stringify(item)
      }
    };
    request(updateRequest);
  };

  const _toggleDetails = id => {
    setShowDetails(!showDetails); 
    let item = todoList.filter(item => item._id === id)[0];
    setShowItem(item);
  };

  
  const _getAll = () => {
    const req = {
      url: todoAPI,
      options: {
        method: "get"
      }
    };
    request(req);
  };

  
  useEffect(() => {
    _getAll();
  }, []);


  useEffect(() => {
    
    if (response.count >= 0) {
      setToDoList(response.results);
    }
    
    else {
      _getAll();
    }
  }, [response]);

  return (
    <>
      <Auth capability="read">
        <header>
          <h2>
            There are {todoList.filter(item => !item.complete).length} Items To
            Complete
          </h2>
        </header>
      </Auth>
      <Auth>
        <section className="todo">
          <div>
            <Auth capability="create">
              <TodoForm handleSubmit={_addItem} />
            </Auth>
          </div>

          <div>
            <TodoList
              list={todoList}
              context={context}
              handleComplete={_toggleComplete}
              handleDelete={_deleteItem}
              handleDetails={_toggleDetails}
            />
          </div>
        </section>
      </Auth>
      <When condition={showDetails}>
        <TodoItem handleDetails={_toggleDetails} item={showItem} />
      </When>
    </>
  );
};

export default ToDo;
