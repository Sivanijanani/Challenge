import React from 'react'
import DateTimePicker from 'react-datetime-picker'

class Drag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            isChecked: false          
        }
    }  
    
    render() {       
        return (
            <li key={this.props.id}>
                <div className="full">
                    <div className="drag">
                        <input type="checkbox" className="checkbox-round"
                            checked={this.props.isChecked}
                            onChange={() => { this.props.handleChange(this.props.item) }} />
                        <a> {this.props.item.description} </a>
                       
                    </div>
                    {this.props.isChecked &&
                        <div className="date">
                            <DateTimePicker 
                            value={this.props.item.startDate}
                            onChange={(date)=>{this.props.handleDateChange(date,this.props.item.id)}}/>
                        </div>
                    }
                </div>
            </li>
        )
    }
}

export default Drag;