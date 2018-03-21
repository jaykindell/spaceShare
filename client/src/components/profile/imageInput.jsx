import React from 'react';
import PropTypes from 'prop-types';
import ReactS3Uploader from 'react-s3-uploader';
import Pencil from 'mdi-react/PencilIcon.js';


import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';


class ImageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: null,
      newValue: '',
      displayImg: '',
      changed: false,
      cropping: false,
      imgFile: null,
      preNext: null,
    };

    this.toggleEditing = this.toggleEditing.bind(this);
    this.doneEditing = this.doneEditing.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { editView } = this.props;
    if (editView) {
      this.toggleEditing();
    }
  }

  onDrop(acceptedFile) {
    this.setState({
      newValue: acceptedFile.filename,
      displayImg: acceptedFile.publicUrl,
      changed: true,
    }, () => {
      console.log(acceptedFile);
      this.handleSubmit();
    });
  }

  handleSubmit() {
    const { newValue } = this.state;
    this.props.finalize(this.props.field, `https://spaceshare-sfp.s3.amazonaws.com/${newValue}`);
    this.doneEditing();
  }

  doneEditing() {
    this.setState({ editing: null });
  }

  toggleEditing() {
    this.setState({ editing: true });
  }


  startCrop(imgFile, next) {
    this.setState({ imgFile });
    this.setState({ preNext: next });
    this.setState({ cropping: true });
  }

  endCrop() {
    this.setState({ imgFile: null });
    this.setState({ preNext: null });
    this.setState({ cropping: false });
  }


  _crop(imgFile, next, imageInputComp, cropperContext) {
    const croppedDataUrl = this.refs.cropper.getCroppedCanvas();
    croppedDataUrl.toBlob(blob => next(new File([blob], 'myFile.png')));
    this.endCrop();
  }

  uploadOrCrop() {
    const imageInputComp = this;
    const { state } = this;
    const { userId, field, imageId, category } = this.props;
    const fileReader = new FileReader();
    if (!this.state.cropping) {
      return (<ReactS3Uploader
        className="form-control image-select"
        signingUrl="/s3/sign"
        signingUrlMethod="GET"
        preprocess={(img, next) => {
          let imgInputComp = this;
          fileReader.addEventListener('load', () => {
            imgInputComp.startCrop(fileReader.result, next);
          }, false);
          fileReader.readAsDataURL(img);
        }}
        accept="image/*"
        s3path={category}
        scrubFilename={
          filename =>
            filename.replace(/[^]*/, `${userId}_${field}_${imageId}`)
        }
        multiple={false}
        onFinish={this.onDrop}
      />);
    }

    // else return this !!

    return (<Cropper
      ref="cropper"
      src={state.imgFile}
      style={{ width: '100%', height: 'auto' }}
      aspectRatio={1 / 1}
      guides={false}
      crop={this._crop.bind(this, state.imgFile, state.preNext, imageInputComp)}
    />);
  }

  render() {
    const { placeholder, category, imageId, userId, field, value } = this.props;

    const { editing, displayImg, changed } = this.state;
    let displayed;
    if (editing) {
      displayed = (
        <div className="content-box image-selection-box">
          <div className="pl-2 pr-2 pb-5 pt-2">
            <div className="row justify-content-end mr-0 pb-2">
              <button
                className="btn btn-outline-light btn-sm pb-0"
                onClick={this.doneEditing}
                type="button"
              >
                <i className="material-icons md-sm">close</i>
              </button>
            </div>
            <h5 className="text-center mb-3">
              {placeholder}
            </h5>
            {/* the following allows for conditional rendering */}
            {this.uploadOrCrop()}
          </div>
        </div>
      );
    } else {
      displayed = (
        <div>
          {changed && (
            <img
              src={displayImg}
              alt="your uploaded file"
              className="img-fluid img-thumbnail"
            />
          )}
          {!changed && (
            <img
              src={value}
              alt="your uploaded file"
              className="img-fluid img-thumbnail"
            />
          )}
          <button className="btn btn-primary btn-block mt-2 mb-2" onClick={this.toggleEditing}>
            <div className="row justify-content-between pl-2 mr-0">
              Change image
              <Pencil className="mdi-btn-alt" height={20} width={20} fill="#FFF" />
            </div>
          </button>
        </div>
      );
    }

    return (
      <div>
        {displayed}
      </div>
    );
  }
}

ImageInput.propTypes = {
  placeholder: PropTypes.string,
  category: PropTypes.string,
  imageId: PropTypes.number,
  userId: PropTypes.number,
  field: PropTypes.string,
  value: PropTypes.string,
  editView: PropTypes.bool,
  finalize: PropTypes.func,
};

ImageInput.defaultProps = {
  placeholder: 'Upload an image!',
  category: 'spaces/',
  imageId: 0,
  userId: null,
  field: null,
  value: 'http://vectips.com/wp-content/uploads/2017/04/14-astronaut-flat.jpg',
  editView: false,
  finalize: null,
};

export default ImageInput;
