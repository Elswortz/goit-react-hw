import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  onChangeHandler = e => {
    this.setState({
      value: e.currentTarget.value,
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form className={css.form} onSubmit={this.onSubmitHandler}>
            <button type="submit" className={css.button}>
              <span className="button-label">Search</span>
            </button>

            <input
              className={css.input}
              type="text"
              autoComplete="off"
              value={this.state.value}
              autoFocus
              placeholder="Search images and photos"
              onChange={this.onChangeHandler}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
