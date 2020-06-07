import { getJokeAsMaybe, IMaybe } from '../getJokeAsMaybe';

(async () => {
  const joke: IMaybe<string> = await getJokeAsMaybe();
  console.log(joke.getOrElse('something wrong'));
  // No one has ever spoken during review of Chuck Norris' code and lived to tell about it.
})();
