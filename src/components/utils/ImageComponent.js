import React, { Component } from 'react';
import './App.css';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//     .App {
//         font-family: sans-serif;
//         text-align: center;
//     }
//     .dialog {
//         box-shadow: 0 8px 6px -6px black;
//         position: static;
//         left: 20%;
//         top: 10%;
//     }
//     .image {
//         width: 300px;
//      }
// `
class ImageComponent extends Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
        // <Wrapper>
        <div>
            <img
                className="small"
                src="/artist_in_you/images/picasso.jpeg"
                onClick={this.handleShowDialog}
                alt="no"
            />
            {this.state.isOpen && (
                <dialog
                    className="dialog"
                    style={{ position: "absolute" }}
                    open
                    onClick={this.handleShowDialog}
                >
                    <img
                        className="image"
                        src="/artist_in_you/images/picasso.jpeg"
                        onClick={this.handleShowDialog}
                        alt="no"
                    />
                </dialog>
            )}
        </div>                            
    //   </Wrapper>
    );
  }
}

export default ImageComponent