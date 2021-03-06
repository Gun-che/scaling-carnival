import React from 'react';
import PropTypes from 'prop-types';

export default class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props;

    if (error) {
      return <p>Во время запроса произошла ошибка:( <br />Пожалуйста, обновите страницу!</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

    if (name) {
      return <p>Привет, {name}!</p>
    } else {
      return (
        <button onClick={this.props.handleLogin}>
          Войти
        </button>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderTemplate()}
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}
