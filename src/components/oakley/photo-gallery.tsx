import * as React from "react";

type Image = {
  height?: number;
  width?: number;
  url: string;
};

type PhotoGallery = {
  photoGallery: Image[];
};

const PhotoGallery = (props: PhotoGallery) => {
  const { photoGallery } = props;

  return (
    <div>
      {photoGallery.map((image, index) => (
        <img src={image.url} key={index} />
      ))}
    </div>
  );
};

export default PhotoGallery;
