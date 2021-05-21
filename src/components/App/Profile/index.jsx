import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';

const Profile = ({ auth }) => {
  useEffect(() => {

  }, []);


  return (
    <Row>
      <p>Profile</p>
    </Row>
  );
}

Profile.propTypes = {};

Profile.defaultProps = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);