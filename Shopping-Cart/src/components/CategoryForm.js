import React, {Component} from 'react';

class CategoryForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var url = 'http://localhost:9000/category/';

        fetch(url, {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="center">
                    <label htmlFor="name">Category name</label>
                    <input id="name" name="name" type="text" />

                    <label htmlFor="description">Description</label>
                    <input id="description" name="description" type="text" />


                    <button>Add Category</button>
                </div>
            </form>
        );
    }

}


export default CategoryForm;