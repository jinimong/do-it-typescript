import * as R from 'ramda';
import { getRandomJoke, JokeType } from '../getRandomJoke';

getRandomJoke()
  .then((JokeItem: JokeType) => {
    const joke = R.view(R.lensProp('joke'))(JokeItem);
    console.log(joke);
    // Chuck Norris doesn't use web standards as the web will conform to him.
  })
  .catch((e: Error) => console.log(e.message));
