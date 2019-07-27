import React from 'react';
import { throwStatement } from '@babel/types';


class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.imageReference = React.createRef();

        this.state = { spans: 0 };
    }

    componentDidMount() {

        console.log(this.imageReference);


        // We are listening to load event once the image is loaded.
        this.imageReference.current.addEventListener('load', this.setSpans);


    }

    setSpans = () => {
        console.log(this.imageReference.current.clientHeight);

        const height = this.imageReference.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans: spans });

    }


    render() {
        const { urls, description } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img alt={description} src={urls.regular} ref={this.imageReference}></img>

            </div>);


    };

}

export default ImageCard;