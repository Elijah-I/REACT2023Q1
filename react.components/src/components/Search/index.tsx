import React from 'react';
import { Form } from 'react-router-dom';

import Spaces from './Spaces';
import Options from './Options';
import SearchLine from './SearchLine';

import type { SearchProps, SearchState } from 'types/search.types';

import './index.scss';

class Search extends React.PureComponent<SearchProps> {
  state: SearchState;
  initialState: SearchState;

  constructor(props: SearchProps) {
    super(props);

    this.initialState = {
      option: 0,
      space: 'local',
      search: '',
    };

    this.state = this.initialState;

    this.makeSearch = this.makeSearch.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setOption = this.setOption.bind(this);
    this.setSpace = this.setSpace.bind(this);
  }

  componentDidMount() {
    const state = JSON.parse(
      localStorage.getItem('search.state') || JSON.stringify(this.initialState)
    );

    setTimeout(() => this.props.makeSearch(state), 1000);
    this.setState({ ...state });
  }

  componentWillUnmount() {
    localStorage.setItem('search.state', JSON.stringify(this.state));
  }

  setOption(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      option: +event.currentTarget.value,
    });
  }

  setSpace(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      space: event.currentTarget.value,
    });
  }

  setSearch(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      search: event.currentTarget.value,
    });
  }

  makeSearch(event: React.SyntheticEvent) {
    event.preventDefault();
    this.props.makeSearch(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.makeSearch}>
        <div className="search__wrapper">
          <div className="search__line">
            <SearchLine search={this.state.search} setSearch={this.setSearch} />
          </div>
          <div className="search__config">
            <Spaces space={this.state.space} setSpace={this.setSpace} />
            <Options option={this.state.option} setOption={this.setOption} />
          </div>
        </div>
      </Form>
    );
  }
}

export default Search;
