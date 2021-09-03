import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../actions';
import Stats from '../Stats';
import './styles.css';

// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    // componentDidMount() {
    //     fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
    //         .then(res => res.json())
    //         .then(images => {
    //             this.setState({
    //                 images,
    //             });
    //         });
    // }
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        console.log('rendered');
        const { images, error, imageStats } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            {imageStats && <Stats stats={imageStats[image.id]}/>}
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                                title={image.user.username}
                            />
                        </div>
                    ))}
                    <button onClick={this.props.loadImages}>Load images</button>
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
            </div>
        );
    }
}

//below properties are getting assigned to the props by connect method
const mapStateToProps = ({ images, error, imageStats }) => ({
    images,
    error,
    imageStats
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
