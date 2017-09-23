/* routes.js
 * Written by: Alex Kasemir
 *
 * Exports the routes used in the application
 */

import Home from 'views/Home';
import Login from 'views/Login';
import CreatePost from 'views/CreatePost';
import CreateWorkout from 'views/CreateWorkout';


export default [
  {
    path: `/login`,
    component: Login,
  },
  {
    path: `/`,
    exact: true,
    private: true,
    component: Home,
  },
  {
    path: `/createPost`,
    private: true,
    component: CreatePost,
  },
  {
    path: `/createWorkout`,
    private: true,
    component: CreateWorkout,
  },
];
