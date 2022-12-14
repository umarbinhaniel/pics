import React from "react";

export default class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = { spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10)+3;
        this.setState({spans});
    }

    render(){
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                ref={this.imageRef}
                key={this.props.image.id} 
                src={this.props.image.urls.regular} 
                alt={this.props.image.description}/>
            </div>


        );
    }
}