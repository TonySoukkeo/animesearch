import React, { Component } from "react";
import MangaSearch from "./MangaSearch";
import SearchDisplay from "../homepage/SearchDisplay";
import Loading from "../loading/Loading";
import { mangaSearch } from "../../redux/reducers/actions/AnimeActions";
import { loading } from "../../redux/reducers/loading/LoadingActions";
import { connect } from "react-redux";

class MangaSearchPage extends Component {
  state = {
    searchValue: ""
  };

  handleSearchChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  searchManga = e => {
    e.preventDefault();

    const { mangaSearch, loading } = this.props,
      { searchValue } = this.state;
    // Change Loading status to true
    loading(true);
    mangaSearch(searchValue);
    // Reset input form field
    this.setState({
      searchValue: ""
    });
  };

  render() {
    const { searchedManga, isLoading } = this.props,
      { searchValue } = this.state;
    return (
      <React.Fragment>
        <div id="banner">
          <div id="overlay" />
        </div>
        {/** MAnga SEARCH DISPLAY **/}
        {isLoading ? (
          <Loading />
        ) : (
          <SearchDisplay searchedAnime={searchedManga} isLoading={isLoading} />
        )}
        {/** SEARCH ANIME **/}
        <MangaSearch
          searchValue={searchValue}
          handleSearchChange={this.handleSearchChange}
          searchManga={this.searchManga}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  searchedManga: state.getTop.mangaSearch,
  isLoading: state.isLoading.loading
});

const actions = {
  mangaSearch,
  loading
};

export default connect(
  mapStateToProps,
  actions
)(MangaSearchPage);
