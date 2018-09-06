import { h, Lazy  } from "hyperapp";
import { Route } from "@hyperapp/router";

import Home from '../views/Home';
import About from '../views/About';
import Topics from '../views/Topics/Index';

export default () => (
  <main>
    <Route
      path="/"
      render={Home}
    />
    <Route
      path="/about"
      render={About}
    />
    <Route
      parent
      path="/topics"
      render={Topics}
    />
  </main>
);

// export default () => (
//   <main>
//     <Route
//       path="/"
//       render={Home}
//     />
//     <Route
//       path="/about"
//       render={
//         () => import('../views/About')
//           .then(({ default: page }) => {
//             console.log(page);
//         })
//       }
//     />
//     <Route
//       parent
//       path="/topics"
//       render={Topics}
//     />
//   </main>
// );
