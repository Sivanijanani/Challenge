import React from 'react'
import ideationItems from './data/IdeationItems'
import validationItems from './data/ValidationItems'
import ReactDragListView from 'react-drag-listview/lib/index.js';
import Drag from './Drag'


class All extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ideationList: ideationItems,
            validationList: validationItems,
            isAllideationChecked: false,
            isAllValidationChecked: false
        }
    }
    handleAllChecked = (event) => {        
        let items = [...this.state.ideationList]
        items.forEach(item => item.isChecked = event.target.checked)
        this.setState({
            ideationList: items,
            isAllideationChecked: !this.state.isAllideationChecked
        })
    }

    handleChange(dragItem) {
        let items = [...this.state.ideationList]
        items.forEach(item => {
            if (item.id === dragItem.id)
                item.isChecked = !dragItem.isChecked
        })

        this.setState({ ideationList: items })
        let AllChecked = items.every(item => item.isChecked)
        if (AllChecked) {
            this.setState({ isAllideationChecked: true })
        }
        else {
            this.setState({ isAllideationChecked: false })
        }
    }

    handleDateChange(date, id) {
        let items = this.state.ideationList
        items.forEach(item => {
            if (item.id === id) {
                item.startDate = date;
            }
        })
        this.setState({
            ideationList: items,
        });
    }

    handleAllCheckedValidation = (event) => {        
        let items = [...this.state.validationList]
        items.forEach(item => item.isChecked = event.target.checked)
        this.setState({
            validationList: items,
            isAllValidationChecked: !this.state.isAllValidationChecked
        })
    }

    handleChangeValidation(dragItem) {
        let items = [...this.state.validationList]
        items.forEach(item => {
            if (item.id === dragItem.id)
                item.isChecked = !dragItem.isChecked
        })

        this.setState({ validationList: items })
        let AllChecked = items.every(item => item.isChecked)
        if (AllChecked) {
            this.setState({ isAllValidationChecked: true })
        }
        else {
            this.setState({ isAllValidationChecked: false })
        }
    }

    handleDateChangeValidation(date, id) {
        let items = this.state.validationList
        items.forEach(item => {
            if (item.id === id) {
                item.startDate = date;
            }
        })
        this.setState({
            validationList: items,
        });
    }
    render() {

        const that = this;
        const dragPropsIdeation = {
            onDragEnd(fromIndex, toIndex) {
                const data = that.state.ideationList;
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                that.setState({ data });
            },
            nodeSelector: 'li',
            handleSelector: 'li'
        };

        const dragPropsValidation = {
            onDragEnd(fromIndex, toIndex) {
                const data = that.state.validationList;
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                that.setState({ data });
            },
            nodeSelector: 'li',
            handleSelector: 'li'
        };
        return (<div className="main">
           
            <h3>Ideation</h3>
            <h4 className="duedate">Due Date (optional)</h4>
                <div className="scroll">
                    <input type="checkbox" className="selectAll"
                        checked={this.state.isAllideationChecked}
                        onChange={(e) => { this.handleAllChecked(e) }} />
                    <label>{this.state.isAllideationChecked ? "UnSelect All" : "Select All"}</label>
                    <ReactDragListView {...dragPropsIdeation}>
                        {this.state.ideationList.map((item, index) => {
                            return (
                                < Drag key={index}
                                    item={item}
                                    isChecked={item.isChecked}
                                    handleChange={(e) => this.handleChange(e)}
                                    handleDateChange={(e, id) => this.handleDateChange(e, id)} />
                            );
                        }
                        )}
                    </ReactDragListView>
                </div>
            <h3>Validation</h3>
            <h4 className="duedate">Due Date (optional)</h4>
                <div className="scroll">
                    <input type="checkbox" className="selectAll"
                        checked={this.state.isAllValidationChecked}
                        onChange={(e) => { this.handleAllCheckedValidation(e) }} />
                    <label>{this.state.isAllValidationChecked ? "UnSelect All" : "Select All"}</label>
                    <ReactDragListView {...dragPropsValidation}>
                        {this.state.validationList.map((item, index) => {
                            return (
                                < Drag key={index}
                                    item={item}
                                    isChecked={item.isChecked}
                                    handleChange={(e) => this.handleChangeValidation(e)}
                                    handleDateChange={(e, id) => this.handleDateChangeValidation(e, id)} />
                            );
                        }
                        )}
                    </ReactDragListView>
                </div>
        </div>);
    }
}

export default All;
