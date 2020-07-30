
import React, { Component } from 'react';
import Slider from "react-slick";
// import axios from 'axios';
import { connect } from 'react-redux';
import './scss/Crime.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class Crime extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const settings = {
            className: "center",
            centerMode: false,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 600,
            draggable: false,
        };

        return (
            <div>
                <h1>Crime</h1>
                <div className='top'>
                    <Slider {...settings}>
                        {Object.keys(this.props.movies).map((movie, i) => (
                            <div key={this.props.movies[movie].id} className="top_small_Picture">
                                <Grid item xs={3}>
                                    <Paper>
                                        {this.props.movies[movie].photos.map(photo => (
                                            <img src={photo.small_Picture} className="small_Picture" key={this.props.movies[movie].id} />
                                        ))}
                                    </Paper>
                                </Grid>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Crime);