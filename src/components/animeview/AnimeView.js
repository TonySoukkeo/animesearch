import React, { Component } from "react";
import {
  getAnimeDetails,
  getAnimeReview,
  relatedAnime,
  resetAnimeProps
} from "../../redux/reducers/actions/AnimeActions";
import LeftHandView from "./LeftHandView";
import RightHandView from "./RightHandView";
import Synopsis from "./Synopsis";
import Reviews from "./reviews/Reviews";
import Loading from "../../components/loading/Loading";
import { loading } from "../../redux/reducers/loading/LoadingActions";
import Modal from "../modal/Modal";
import RelatedAnime from "./RelatedAnime";
import { connect } from "react-redux";

class AnimeView extends Component {
  state = {
    modalContent: null,
    userImg: null,
    username: null,
    userScore: null
  };

  componentDidMount() {
    const { getAnimeDetails, getAnimeReview } = this.props;

    let id = this.props.match.params.id.split("_")[0],
      type = this.props.match.params.id.split("_")[1];
    if (type === "Manga" || type === "Novel" || type === "One-shot") {
      type = "manga";
    } else {
      type = "anime";
    }

    getAnimeDetails(id, type);
    getAnimeReview(id, type);
  }

  componentDidUpdate(prevProps) {
    const { currentAnime, relatedAnime, loading } = this.props;
    const id = [];
    if (
      currentAnime &&
      currentAnime.related &&
      this.props.animeRelated.length === 0
    ) {
      Object.values(currentAnime.related).forEach(arr =>
        arr.forEach(x =>
          id.push({
            id: x.mal_id,
            type: x.type
          })
        )
      );
      relatedAnime(id);
      loading(true);
    }

    // Reload page when params change
    if (this.props.match.params.id !== prevProps.match.params.id) {
      window.location.reload();
    }
  }

  // Clear props for related anime when component unmounts
  componentWillUnmount() {
    const { resetAnimeProps } = this.props;
    resetAnimeProps();
  }

  // Selected modal content to display
  openModal = (content, userImg, username, userScore) => {
    const review = content.replace(/\\n/gi, "<br>");
    this.setState({ modalContent: review, userImg, username, userScore });
  };

  // Reset Modal
  resetModal = () => {
    this.setState({
      modalContent: null,
      userImg: null,
      username: null,
      userScore: null
    });
  };

  render() {
    const { currentAnime, reviews, animeRelated, isLoading } = this.props;
    const { modalContent, userImg, username, userScore } = this.state;

    return (
      <React.Fragment>
        <section id="anime-view-top">
          <div className="container">
            <div className="row">
              <LeftHandView currentAnime={currentAnime} />
              <RightHandView currentAnime={currentAnime} />
            </div>
          </div>
        </section>
        <Synopsis currentAnime={currentAnime} />
        <Reviews reviews={reviews} openModal={this.openModal} />
        <Modal
          modalContent={modalContent}
          userImg={userImg}
          username={username}
          userScore={userScore}
          resetModal={this.resetModal}
        />
        {isLoading ? <Loading /> : <RelatedAnime animeRelated={animeRelated} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentAnime: state.getTop.currentAnime,
  reviews: state.getTop.reviews,
  animeRelated: state.getTop.relatedAnime,
  isLoading: state.isLoading.loading
});

const actions = {
  getAnimeDetails,
  getAnimeReview,
  relatedAnime,
  resetAnimeProps,
  loading
};

export default connect(
  mapStateToProps,
  actions
)(AnimeView);
