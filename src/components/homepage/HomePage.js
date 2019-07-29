import React, { Component } from "react";
import {
  getTopAnime,
  getTopManga
} from "../../redux/reducers/actions/AnimeActions";
import TopAnime from "./TopAnime";
import TopManga from "./TopManga";
import { connect } from "react-redux";
import Loading from "../loading/Loading";

class HomePage extends Component {
  componentDidMount() {
    const { getTopAnime, getTopManga } = this.props;

    // Get top anime
    getTopAnime();

    // Get top manga
    getTopManga();
  }

  render() {
    const { topAnime, topManga } = this.props;

    return (
      <React.Fragment>
        {/** BANNER **/}
        <div id="banner">
          <div id="overlay" />
        </div>
        {/** TOP ANIME **/}
        {!topAnime ? <Loading /> : <TopAnime topAnime={topAnime} />}

        {/** TOP MANGA **/}
        {!topManga ? <Loading /> : <TopManga topManga={topManga} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  topAnime: state.getTop.topAnime,
  topManga: state.getTop.topManga
});

const actions = {
  getTopAnime,
  getTopManga
};

export default connect(
  mapStateToProps,
  actions
)(HomePage);
