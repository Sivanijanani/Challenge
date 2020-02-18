import React from 'react'
import Drag from './Drag'
import items from './data/item'
import ReactDragListView from 'react-drag-listview/lib/index.js';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dragList: items,
            isAllChecked: false
        }
    }

    handleAllChecked = (event) => {
        let items = this.state.dragList
        items.forEach(item => item.isChecked = event.target.checked)
        this.setState({
            dragList: items,
            isAllChecked: !this.state.isAllChecked
        })
    }

    handleChange(dragItem) {
        let items = this.state.dragList
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
                <input type="checkbox" className="selectAll" checked={this.state.isAllChecked} onChange={(e) => { this.handleAllChecked(e) }} /><label>Select All</label>

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

export default Main;