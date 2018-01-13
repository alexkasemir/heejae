/**
 * WorkoutList.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Spinner from 'elemental/lib/components/Spinner';

import workoutSelectors from 'store/workout/selectors';
import workoutActions from 'store/workout/actions';

import { makeNiceTime, getDuration } from 'utils';

const WorkoutListTable = styled.table`
  margin-top: 10px;
  width: 100%;
`;

const TableHeader = styled.thead`
`;

const TableBody = styled.tbody`
`;

const TableRow = styled.tr`

`;

const HeaderCell = styled.th`
border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: table-cell;
  padding: 0.66em;
  vertical-align: middle;
`;

const DataCell = styled.td`
border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: table-cell;
  padding: 0.66em;
  vertical-align: middle;
`;

export class WorkoutList extends Component {
  componentDidMount() {
    this.props.getWorkouts();
  }

  makeRow = (workout) => {
    return (
      <TableRow key={ workout.id }>
        <DataCell>{ makeNiceTime(workout.start_ts) }</DataCell>
        <DataCell>{ makeNiceTime(workout.end_ts) }</DataCell>
        <DataCell>{ `${getDuration(workout.start_ts, workout.end_ts)} minutes` }</DataCell>
      </TableRow>
    );
  }

  render() {
    const { workouts } = this.props;

    // if (!workouts) {
    //   return (
    //     <div className="center">
    //       <Spinner size="lg" />
    //     </div>
    //   );
    // }

    return (
      <WorkoutListTable>
        <TableHeader>
          <TableRow>
            <HeaderCell>Start Date</HeaderCell>
            <HeaderCell>End Date</HeaderCell>
            <HeaderCell>Duration</HeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            workouts.map((w) => this.makeRow(w))
          }
        </TableBody>
      </WorkoutListTable>
    );
  }
}

export default connect((state) => {
  return {
    workouts: workoutSelectors.allWorkouts(state),
  };
}, {
  getWorkouts: workoutActions.getAll,
})(WorkoutList);