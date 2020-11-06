import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodosItem extends Component {
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "16px",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
        };
    };
    render() {
        return ( <
            div style = { this.getStyle() } >
            <
            p >
            <
            input type = 'checkbox'
            onChange = { this.props.markComplete }
            />{" "} { this.props.todo.title } { " " } <
            /p>{" "} <
            /div>
        );
    }
}

// PropTypes
TodosItem.propTypes = {
    todo: PropTypes.object.isRequired,
};

export default TodosItem;