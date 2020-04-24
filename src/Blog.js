import React from "react";
import PropTypes from "prop-types";

class Blog extends React.Component {
    render() {
        return (
            <div className="blog">
                <h1>Başlık: {this.props.baslik}</h1>
                <p>İçerik: {this.props.icerik}</p>
                <p>Puan: {this.props.puan}</p>
                <p>Kategoriler:
                {
                   this.props.kategoriler.map(kategori => (
                       <span>{kategori}</span>
                   )) 
                }
                </p>
            </div>            
        )
    }
}

Blog.propTypes = {
    baslik: PropTypes.string.isRequired,
    icerik: PropTypes.string,
    puan: PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10]),
    kategoriler: PropTypes.arrayOf(PropTypes.string)
}

export default Blog;