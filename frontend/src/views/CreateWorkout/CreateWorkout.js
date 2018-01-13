/**
 * CreateWorkout.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

import { connect } from 'react-redux';

import Button from 'elemental/lib/components/Button';

import Alert from 'components/Alert';
import WorkoutList from 'containers/WorkoutList';

import workoutActions from 'store/workout/actions';

const WORKOUT_ID = `__WORKOUT`;

const SubmittedAlert = styled(Alert)`
  margin: 10px;
`;


export class CreateWorkout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      showWorkouts: false,
    };
  }

  handleStartChange = (date) => {
    this.setState({
      startDate: date,
      endDate: moment(date).add(30, `minutes`)
    });
  }

  handleEndChange = (date) => {
    this.setState({
      endDate: date,
    });
  }

  create = () => {
    const { createWorkout } = this.props;

    createWorkout(this.state)
      .then(() => {
        this.setState({
          startDate: moment(),
          endDate: null,
        })
      })
  }

  toggleList = () => {
    this.setState({ showWorkouts: !this.state.showWorkouts })
  }


  render() {
    const {
      workoutMeta,
    } = this.props;

    return (
      <div className="CreateWorkout inner-wrap-full">
        <div className="Card">
          <div className="Card__header">
            <h3 className="center">
              Record a workout
            </h3>
          </div>
          <div className="Card__body">
            <h3> When did you start working out? </h3>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleStartChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={10}
                dateFormat="LLL"
                className="CreateWorkout__input"
              />
            {
              this.state.endDate
                ? <div><h3> When did you finish working out? </h3>
                  <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleEndChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={10}
                    dateFormat="LLL"
                    minTime={this.state.startDate}
                    maxTime={moment().endOf(`day`)}
                    className="CreateWorkout__input"
                  /> </div>
                : null
            }

            {
              workoutMeta.posting
                ? <Alert> Your workout is submitting </Alert>
                : null
            }
            {
              workoutMeta.error
                ? <Alert type="error"> { workoutMeta.error } </Alert>
                : null
            }
            {
              workoutMeta.posted && !this.state.endDate
                ? <SubmittedAlert> You Submitted a workout </SubmittedAlert>
                : null
            }
            <Button disabled={ !this.state.endDate || workoutMeta.posting } onClick={ this.create }>
              Post Workout
            </Button>
            <Button onClick={ this.toggleList }>
              { this.state.showWorkouts ? `Hide` : `See` } Other Workouts
            </Button>
            { this.state.showWorkouts
              ? <WorkoutList />
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    pending: state.pending.data,
    workoutMeta: state.workout.meta,
  };
}, {
  createWorkout: workoutActions.create,
})(CreateWorkout);
