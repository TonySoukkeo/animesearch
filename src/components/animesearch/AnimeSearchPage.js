import React, { Component } from "react";
import AnimeSearch from "../homepage/AnimeSearch";
import SearchDisplay from "../homepage/SearchDisplay";
import Loading from "../loading/Loading";
import { animeSearch } from "../../redux/reducers/actions/AnimeActions";
import { loading } from "../../redux/reducers/loading/LoadingActions";
import { connect } from "react-redux";

class AnimeSearchPage extends Component {
  state = {
    searchValue: ""
  };

  handleSearchChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  searchAnime = e => {
    e.preventDefault();

    const { animeSearch, loading } = this.props,
      { searchValue } = this.state;
    // Change Loading status to true
    loading(true);
    animeSearch(searchValue);
    // Reset input form field
    this.setState({
      searchValue: ""
    });
  };

  render() {
    const { searchedAnime, isLoading } = this.props,
      { searchValue } = this.state;
    return (
      <React.Fragment>
        <div id="banner">
          <div id="overlay" />
        </div>

        {/** ANIME SEARCH DISPLAY **/}
        {isLoading ? (
          <Loading />
        ) : (
          <SearchDisplay searchedAnime={searchedAnime} isLoading={isLoading} />
        )}
        {/** SEARCH ANIME **/}
        <AnimeSearch
          searchValue={searchValue}
          handleSearchChange={this.handleSearchChange}
          searchAnime={this.searchAnime}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  searchedAnime: state.getTop.animeSearch,
  isLoading: state.isLoading.loading
});

const actions = {
  animeSearch,
  loading
};

export default connect(
  mapStateToProps,
  actions
)(AnimeSearchPage);
