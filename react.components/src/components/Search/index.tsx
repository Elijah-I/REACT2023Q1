import React from 'react';
import { Form } from 'react-router-dom';

import Spaces from './Spaces';
import Options from './Options';
import SearchLine from './SearchLine';

import { OPTION, SearchProps, SearchState } from 'types/search.types';

import './index.scss';

class Search extends React.PureComponent<SearchProps> {
  state: SearchState;

  constructor(props: SearchProps) {
    super(props);

    this.state = {
      option: OPTION.ALL,
      space: 'local',
      search: '',
    };

    this.makeSearch = this.makeSearch.bind(this);
    this.saveState = this.saveState.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setOption = this.setOption.bind(this);
    this.setSpace = this.setSpace.bind(this);
  }

  async componentDidMount() {
    const lsState = localStorage.getItem('search.state');
    if (lsState) this.setState({ ...JSON.parse(lsState) });
    await this.makeSearch();
  }

  componentDidUpdate() {
    this.saveState();
  }

  componentWillUnmount() {
    this.saveState();
  }

  saveState() {
    localStorage.setItem('search.state', JSON.stringify(this.state));
  }

  async makeSearch(event?: React.SyntheticEvent) {
    if (event) event.preventDefault();

    this.props.makeSearch(null);

    await this.wait(1000);
    this.props.makeSearch(this.state);
  }

  wait(milliseconds: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  setOption(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      option: event.currentTarget.value,
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

  render() {
    return (
      <Form role="form" onSubmit={async () => await this.makeSearch()}>
        <div className="search__wrapper">
          <SearchLine
            option={this.state.option}
            search={this.state.search}
            setSearch={this.setSearch}
          />
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
