import React from 'react'
import Drag from './Drag'
import ideationItems from './data/IdeationItems'
import validationItems from './data/ValidationItems'

import ReactDragListView from 'react-drag-listview/lib/index.js';

class SocialInnovation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dragList: [...ideationItems,...validationItems],
            isAllChecked: false
        }
    }

    handleAllChecked = (event) => {
        console.log(this.state.dragList)
        let items = [...this.state.dragList]
        items.forEach(item => item.isChecked = event.target.checked)
        console.log(items,this.state.dragList)
        this.setState({
            dragList: items,
            isAllChecked: !this.state.isAllChecked
        })
    }

    handleChange(dragItem) {
        let items = [...this.state.dragList]
        items.forEach(item => {
            if (item.id === dragItem.id)
                item.isChecked = !dragItem.isChecked
        })

        this.setState({ dragList: items })
        let AllChecked = items.every(item => item.isChecked)
        if (AllChecked) {
            this.setState({ isAllChecked: true })
        }
        else {
            this.setState({ isAllChecked: false })
        }
    }

    handleDateChange(date, id) {
        let items = this.state.dragList
        items.forEach(item => {
            if (item.id === id) {
                item.startDate = date;
            }
        })
        this.setState({
            dragList: items,
        });
    }

    render() {
        const that = this;
        const dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const data = that.state.dragList;
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                that.setState({ data });
            },
            nodeSelector: 'li',
            handleSelector: 'li'
        };

        return (
            <div className="main">
                  <h4 className="duedate">Due Date (optional)</h4>
                <input type="checkbox" className="selectAll" 
                checked={this.state.isAllChecked} 
                onChange={(e) => { this.handleAllChecked(e) }} />
                <label>{this.state.isAllChecked?"UnSelect All" : "Select All"}</label>

                <ReactDragListView {...dragProps}>
                    {this.state.dragList.map((item, index) => {
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
        )
    }
}

export default SocialInnovation;