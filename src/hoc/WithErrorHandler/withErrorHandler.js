import React, { Component, Fragment } from "react";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: false
    }

    constructor() {
      super();
      this.reqInterceptor = axios.interceptors.request.use(
        req => req,
        error => {
          this.setState({ error: true });
          return Promise.reject(error);}
      );
      this.respInterceptor = axios.interceptors.response.use(
        resp => resp,
        error => {
          this.setState({ error: true });
          return Promise.reject(error);}
      )
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.respInterceptor);
    }

    errMsgOff = (event) => {
      this.setState({ error: false });
    }

    render() {
      return (
        <Fragment>
          <Modal handleBackdropClick={this.errMsgOff}
          shown={this.state.error}>  Something went wrong! </Modal>
          <WrappedComponent {...this.props} errMsgOff={this.errMsgOff}/>
        </Fragment>
      );
    }
  };
}

export default withErrorHandler;
