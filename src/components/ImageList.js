import React from 'react';
import styles from './ImageList.css';
import ImageCard from './ImageCard';


const ImageList = function (props) {

    //console.log('Image Props inside Image List are' + props.images);
    const modifiedImageList = props.images.map(
        (images) => {
            return <ImageCard key={images.id} image={images} ></ImageCard>
        }
    );


    return <div className={styles.imagelist}>{modifiedImageList}</div>;
}

export default ImageList;