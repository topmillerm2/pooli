import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Chart from '../components/Chart';

class PoolDetail extends Component {
  componentDidMount() {
    this.props.fetchPool(this.props.match.params.id);
  }

  render() {
    const { pools } = this.props;
    if (!pools.pool || !pools.chart) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h1 className="text-1">{pools.pool.title}</h1>
        <Chart chart={pools.chart} user={this.props.auth.user} />
      </div>
    );
  }
}

const mstp = ({ pools, auth }) => {
	console.log(pools)
  return { pools, auth };
};

export default connect(mstp, actions)(PoolDetail);
